import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

import { GET_LOCATIONS } from './LocationsList'

const ADD_LOCATION = gql`
  mutation addLocation(
    $place: String!
    $country: String!
    $region: String!
    $image: String!
    $weather_rating: Int!
    $experience_rating: Int!
    $dive_shops_rating: Int!
    $marine_life_rating: Int!
  ) {
    insert_locations(
      objects: {
        country: $country
        image: $image
        place: $place
        region: $region
        marine_life_rating: $marine_life_rating
        experience_rating: $experience_rating
        dive_shops_rating: $dive_shops_rating
        weather_rating: $weather_rating
      }
    ) {
      returning {
        country
        id
        image
        place
        experience_rating
        dive_shops_rating
        marine_life_rating
        weather_rating
      }
    }
  }
`

const AddLocation = () => {
  const [place, setPlace] = useState('')
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [weatherRating, setWeatherRating] = useState('')
  const [experienceRating, setExperienceRating] = useState('')
  const [diveshopsRating, setDiveshopsRating] = useState('')
  const [marineLifeRating, setMarineLifeRating] = useState('')
  const [image, setImage] = useState('')
  const [addLocation] = useMutation(ADD_LOCATION, {
    onCompleted: () => {
      setPlace('')
      setCountry('')
      setRegion('')
      setWeatherRating('')
    },
  })

  const onSubmit = (e) => {
    e.preventDefault()
    const weather_rating = +weatherRating
    const experience_rating = +experienceRating
    const dive_shops_rating = +diveshopsRating
    const marine_life_rating = +marineLifeRating
    addLocation({
      variables: {
        place,
        country,
        region,
        weather_rating,
        experience_rating,
        dive_shops_rating,
        marine_life_rating,
        image,
      },
      update: (cache, { data }) => {
        const existingLocations = cache.readQuery({
          query: GET_LOCATIONS,
        })
        cache.writeQuery({
          query: GET_LOCATIONS,
          data: {
            locations: [data.insert_locations, ...existingLocations.locations],
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
          <input
            type="text"
            name="weatherRating"
            id="weatherRating"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded sm:text-sm px-2 border-gray-300 shadow-2xl drop-shadow-2xl"
            onChange={(e) => setWeatherRating(e.target.value)}
            value={weatherRating}
            placeholder="weather rating "
          />
          <input
            type="text"
            name="diveShopsRating"
            id="diveShopsRating"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded sm:text-sm px-2 border-gray-300 shadow-2xl drop-shadow-2xl"
            onChange={(e) => setDiveshopsRating(e.target.value)}
            value={diveshopsRating}
            placeholder="dive shops overall rating "
          />
          <input
            type="text"
            name="experienceRating"
            id="experienceRating"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded sm:text-sm px-2 border-gray-300 shadow-2xl drop-shadow-2xl"
            onChange={(e) => setExperienceRating(e.target.value)}
            value={experienceRating}
            placeholder="overall experience rating "
          />
          <input
            type="text"
            name="marineLifeRating"
            id="marineLifeRating"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded sm:text-sm px-2 border-gray-300 shadow-2xl drop-shadow-2xl"
            onChange={(e) => setMarineLifeRating(e.target.value)}
            value={marineLifeRating}
            placeholder="overall marine life rating "
          />
          <input
            type="text"
            name="image"
            id="image"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded sm:text-sm px-2 border-gray-300 shadow-2xl drop-shadow-2xl"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            placeholder="image url"
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
