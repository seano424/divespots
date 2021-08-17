export default function CardOverlayDetails({
  attr = '80',
  title = 'Cost',
  emoji = '💸',
}) {
  return (
    <aside className="flex justify-between w-full">
      <p className="flex w-full">
        <span className="flex-shrink-0 w-10">{emoji}</span> {title}
      </p>
      <div className="relative w-full">
        <h1
          className={`bg-green-300 w-[calc(${attr}%-.1rem)] absolute bg-opacity-90 z-50 h-5 rounded-lg`}
        ></h1>
        <h1 className="bg-black w-full h-5 bg-opacity-40 absolute rounded-lg"></h1>
      </div>
    </aside>
  )
}
