import Link from 'next/link'
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center  w-full'>
      <h1 className='text-5xl mt-20'>The Blue Nile</h1>
      <p className='text-sm w-3/4 mt-5'>Thier is a lot of untapped potential when it comes to data that nasa has. And Scientists lack
    the fluidity of access when it comes to the nasa data catalog. 
    What better way to interact with data than to move around it, as if you are in a video game. 
    The AR and VR representations of network ontologies don’t only contribute to how the data
    gets read but how it is edited. Developers can take advantage of this and gamify the process
    of adding metadata to get a helping hand from citizen scientists in classfying data.
    The possibilities are endless. </p>
    <p className=''>Here is my attempt in visualizing one of nasa’s datasets. But be careful the 3d and AR versions 
    are CPU intensive since I didn’t have time to optimize them. You will be fine if you are on a 
    mid-high level PC.  </p>
    <Link href='/app'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Goto Demo Page</button></Link>
    </div>
  )
}
