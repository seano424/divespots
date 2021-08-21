import { useClerk } from '@clerk/clerk-react'

export default function AuthLink() {
  const stuff = useClerk()
  console.log(stuff)
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}
