import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import CardOverlayDetails from './CardOverlayDetails'

export default function CardOverlay({ fun, weather, safety }) {
  const [heartOpen, setHeartOpen] = useState(false)
  return (
    <section
      className={`absolute opacity-0 transition group-hover:opacity-100 w-full h-full top-0 left-0 bg-black bg-opacity-60 z-50 rounded-tr-3xl rounded-bl-3xl`}
    >
      <article>
        <div className="flex items-center text-xl justify-end px-2 mt-10">
          {!heartOpen ? (
            <AiOutlineHeart onClick={() => setHeartOpen(!heartOpen)} />
          ) : (
            <AiFillHeart color="red" onClick={() => setHeartOpen(!heartOpen)} />
          )}
        </div>
      </article>
      <article className="h-full pt-5 flex flex-col items-start">
        <CardOverlayDetails />
        <CardOverlayDetails attr={fun} title="Fun" emoji="😎" />
        <CardOverlayDetails attr={weather} title="Weather" emoji="☔️" />
        <CardOverlayDetails attr={safety} title="Safety" emoji="👷‍♀️" />
      </article>
    </section>
  )
}
