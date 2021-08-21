import Image from 'next/image'
export default function CardImage({
  image = 'https://images.unsplash.com/photo-1535797544472-3e5705c86831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
}) {
  return (
    <section className="absolute z-10 w-full h-full top-0 left-0">
      <Image
        layout="fill"
        src={image}
        alt="image of Utah"
        className="rounded-tr-3xl rounded-bl-3xl object-cover"
      />
    </section>
  )
}
