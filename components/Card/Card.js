import CardImage from './CardImage'
import CardDetails from './CardDetails'
import CardOverlay from './CardOverlay'
export default function Card({ image, city, country, weather, attributes }) {
  return (
    <div className="card group cursor-pointer font-black relative col-span-2 shadow text-white rounded-tr-full rounded-bl-full h-72 w-72">
      <CardImage image={image} />
      <CardDetails city={city} country={country} weather={weather} />
      <CardOverlay attributes={attributes} />
    </div>
  )
}
