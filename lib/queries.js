import { gql } from '@apollo/client'

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
