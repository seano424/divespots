export default function CardOverlayDetails({
  attr = '90',
  title = 'Cost',
  emoji = '💸',
}) {
  return (
    <div className="flex justify-between w-full px-2 lg:px-1">
      <div className="flex w-full">
        <span className="flex-shrink-0 w-10">{emoji}</span> {title}
      </div>
      <div className="relative w-full">
        <h1
          style={{ width: `calc(${attr}% - .1rem)` }}
          className={`bg-green-300 absolute bg-opacity-90 z-30 h-5 rounded-lg`}
        ></h1>
        <h1
          className={`bg-black w-full h-5 bg-opacity-${attr} absolute rounded-lg`}
        ></h1>
      </div>
    </div>
  )
}
