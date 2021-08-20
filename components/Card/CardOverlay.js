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
        <CardOverlayDetails
          title="Dive Shops"
          attr={attributes.dive_shops_rating || '70'}
          emoji="🤿"
        />
        <CardOverlayDetails
          title="Overall Vibe"
          attr={attributes.experience_rating || '99'}
          emoji="🌎"
        />
        <CardOverlayDetails
          title="Marine Life"
          attr={attributes.marine_life_rating || '85'}
          emoji="🦈"
        />
        <CardOverlayDetails
          title="Climate"
          attr={attributes.weather_rating || '80'}
          emoji="☔️"
        />
      </section>
    </main>
  )
}
