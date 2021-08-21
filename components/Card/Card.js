import CardImage from './CardImage'
import CardDetails from './CardDetails'
import CardOverlay from './CardOverlay'
export default function Card({ image, place, country, weather, attributes }) {
  return (
    <div className="card group cursor-pointer font-black relative col-span-2  text-white w-[25rem] h-[20rem] sm:h-72 sm:w-[18rem] md:h-[12rem] md:w-[15rem] lg:w-[19rem] lg:h-[15rem] xl:w-[23rem] shadow-3xl drop-shadow-xl ">
      <CardImage image={image} />
      <CardDetails place={place} country={country} weather={weather} />
      <CardOverlay attributes={attributes} />
    </div>
  )
}
