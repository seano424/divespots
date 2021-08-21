import { useQuery } from '@apollo/client'
import { GET_LOCATIONS } from 'lib/queries'

export default function LocationsList() {
  const { loading, error, data } = useQuery(GET_LOCATIONS)
  if (loading) return 'Loading...'
  if (error) return <div>{error}</div>

  return <></>
}
