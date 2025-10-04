// react imports
import { useState } from 'react'

// icons imports
import { Image, Sparkles } from 'lucide-react'


const GenerateImages = () => {

  const styles = [
    "Photorealistic",
    "Cartoon",
    "3D Render",
    "Pixel Art",
    "Oil Painting",
    "Sketch",
    "Cyberpunk",
    "Abstract"
  ]
  
  const [selectedStyle, setSelectedStyle] = useState('Photorealistic')
  const [input, setInput] = useState('')
  const [publish, setPublish] = useState(false)
    
  const onSubmitHandler = async (e:any) => {
    e.preventDefault();
  }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left col */}
      <form onSubmit={() => onSubmitHandler()} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00AD25]'/>
          <h1 className='text-xl font-semibold'>AI Image Generator</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Describe your Image</p>

        <textarea onChange={(e) => setInput(e.target.value)} value={input} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='describe the image you want to generate...' required/>
        <p className='mt-4 text-sm font-medium'>Style</p>

        <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
          {
          styles.map((item) => (
            <span onClick={() => setSelectedStyle(item)} key={item} className={`text-xs px-4 p-1 border rounded-full cursor-pointer ${selectedStyle === item ? 'bg-green-50 text-green-700' : 'text-gray-700 border-gray-200 hover:bg-gray-100'}`}>{item}</span>
          ))}
        </div>

        {/* Publish Image: to be continue (2:53:00) */}
        <div className='my-6 flex items-center gap-2'>
          <label className='relative cursor-pointer'>
            <input type="checkbox" onChange={(e)=> setPublish(e.target.checked)} checked={publish} className='sr-only peer'/>

            <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>

            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
          </label>
          <p className='text-sm'>Make this image Public</p>
        </div>

        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#1DB059] to-[#14F2BF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-green-700 hover:to-cyan-600 hover:scale-102 transition duration-300'>
          <Image className='w-5'/>Generate Image
        </button>
      </form>

      {/* right col */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-50'>
        <div className='flex items-center gap-3'>
          <Image className='w-5 h-5 text-[#14F2BF]'/>
          <h1 className='text-xl font-semibold'>Generated Image</h1>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Image className='w-9 h-9 text-[#14F2BF]'/>
            <p>Enter a keyword and click "Generate Explanation" to get started!</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default GenerateImages
