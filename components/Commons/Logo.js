export default function Logo({ color = 'text-primary-black' }) {
  return (
    <div className="flex flex-shrink-0 h-14 w-40 gap-2 items-center min-w-max">
      <div className="border-4 border-white rounded-tr-xl rounded-bl-xl">
        <div className="p-1 navitems font-black rounded-tr-xl rounded-bl-xl  bg-black text-white uppercase text-base">
          <span className="text-secondary">D</span>
          <span className="">S</span>
        </div>
      </div>
      <h4 className={`font-black ${color} navitems dark:text-gray-50`}>
        Divespots
      </h4>
    </div>
  )
}
