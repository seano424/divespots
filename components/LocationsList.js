import { gql, useQuery } from '@apollo/client'

export const GET_LOCATIONS = gql`
  query getLocations {
    locations {
      weather_rating
      marine_life_rating
      experience_rating
      dive_shops_rating
      country
      place
      region
      image
      id
      marine_life_locations {
        marine_life {
          description
          name
        }
      }
    }
  }
`

export default function LocationsList() {
  const { loading, error, data } = useQuery(GET_LOCATIONS)
  if (loading) return 'Loading...'
  if (error) return <div>{error}</div>

  return <></>
}
