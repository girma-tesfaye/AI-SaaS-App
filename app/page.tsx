import { Button } from '@/components/ui/button'
import { DESTRUCTION } from 'dns'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <p className='text-6xl text-green-500'>Hello AI SaaS</p>
    <Button variant="destructive">Name</Button>

    </div>
  )
}
