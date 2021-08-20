import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

import { GET_LOCATIONS } from './LocationsList'

const ADD_LOCATION = gql`
  mutation addLocation($place: String!, $country: String!, $region: String!) {
    insert_locations_one(
      object: { place: $place, country: $country, region: $region }
    ) {
      id
      place
      country
      region
      attributes_id
    }
  }
`

const AddLocation = () => {
  const [place, setPlace] = useState('')
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [addLocation] = useMutation(ADD_LOCATION, {
    onCompleted: () => {
      setPlace('')
      setCountry('')
      setRegion('')
    },
  })

  const onSubmit = (e) => {
    e.preventDefault()
    addLocation({
      variables: { place, country, region },
      update: (cache, { data }) => {
        const existingLocations = cache.readQuery({
          query: GET_LOCATIONS,
        })
        cache.writeQuery({
          query: GET_LOCATIONS,
          data: {
            locations: [
              data.insert_locations_one,
              ...existingLocations.locations,
            ],
          },
        })
      },
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="my-4 flex rounded-md shadow-sm">
        <div className="flex space-x-2">
          <input
            type="text"
            name="place"
            id="place"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded sm:text-sm px-2 border-gray-300 shadow-2xl drop-shadow-2xl"
            onChange={(e) => setPlace(e.target.value)}
            value={place}
            placeholder="place name"
          />
          <input
            type="text"
            name="country"
            id="country"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded sm:text-sm px-2 border-gray-300 shadow-2xl drop-shadow-2xl"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            placeholder="country name"
          />
          <input
            type="text"
            name="region"
            id="region"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded sm:text-sm px-2 border-gray-300 shadow-2xl drop-shadow-2xl"
            onChange={(e) => setRegion(e.target.value)}
            value={region}
            placeholder="region name"
          />
        </div>
        <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
          Add
        </button>
      </div>
    </form>
  )
}

export default AddLocation
