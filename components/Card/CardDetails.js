import { FaWifi } from 'react-icons/fa'
export default function CardDetails({
  place = 'Key West',
  country = 'USA',
  weather = { temperature: '32' },
}) {
  return (
    <section className="absolute px-4 lg:py-1 w-full top-0 left-0 flex flex-col z-30 h-full justify-center space-y-6 lg:justify-between">
      <article className="hidden lg:flex text-sm lg:space-y-4 justify-between items-center">
        <p>50</p>
        <aside className="flex gap-1 items-center justify-center">
          <span>
            <FaWifi />
          </span>
          <p className="flex flex-col">
            <span>57</span>
            <span>Mbps</span>
          </p>
        </aside>
      </article>
      <article className="flex flex-col text-lg lg:py-5 justify-center items-center">
        <h4>{place}</h4>
        <p>{country}</p>
      </article>
      <article className="flex items-center justify-between text-sm">
        <aside className="flex items-center space-x-2">
          <p>☀️ </p>
          <div className="flex flex-col">
            <p>Feels {weather.temperature}°</p>
            <p>32°</p>
          </div>
        </aside>
        <aside>$3,175 / mo</aside>
      </article>
    </section>
  )
}
