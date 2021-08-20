import CardImage from './CardImage'
import CardDetails from './CardDetails'
import CardOverlay from './CardOverlay'
export default function Card({ image, place, country, weather, attributes }) {
  return (
    <div className="card group cursor-pointer font-black relative col-span-2 shadow text-white rounded-tr-full rounded-bl-full w-48 h-48 md:h-56 md:w-56 lg:h-72 lg:w-[19rem]">
      <CardImage image={image} />
      <CardDetails place={place} country={country} weather={weather} />
      <CardOverlay attributes={attributes} />
    </div>
  )
}
