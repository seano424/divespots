import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import CardOverlayDetails from './CardOverlayDetails'

export default function CardOverlay({
  attributes = { fun: '90', weather: '80', safety: '100' },
}) {
  const [heartOpen, setHeartOpen] = useState(false)
  return (
    <main
      className={`absolute flex flex-col space-y-4 opacity-0 transition group-hover:opacity-100 w-full h-full top-0 left-0 bg-black bg-opacity-80 z-30 rounded-tr-3xl rounded-bl-3xl`}
    >
      <section>
        <article className="flex items-center text-xl justify-end px-2 mt-6 lg:mt-10">
          {!heartOpen ? (
            <AiOutlineHeart onClick={() => setHeartOpen(!heartOpen)} />
          ) : (
            <AiFillHeart
              color="#ee4266"
              onClick={() => setHeartOpen(!heartOpen)}
            />
          )}
        </article>
      </section>

      <section className="h-full lg:pt-5 flex flex-col items-start">
        <CardOverlayDetails />
        <CardOverlayDetails attr={attributes.fun} title="Fun" emoji="😎" />
        <CardOverlayDetails
          attr={attributes.weather}
          title="Weather"
          emoji="☔️"
        />
        <CardOverlayDetails
          attr={attributes.safety}
          title="Safety"
          emoji="👷‍♀️"
        />
      </section>
    </main>
  )
}
