import BrazilMap from '@/components/BrazilMap'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col w-full h-screen justify-center items-center bg-gradient-to-b from-zinc-200 to-white'>
      <div className='flex w-[50%] text-green-800'>
        <BrazilMap />
      </div>
    </main>
  )
}
