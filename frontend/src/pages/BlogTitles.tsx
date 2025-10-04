import { useState } from 'react'

// icons imports
import { BookOpenText, Hash, Sparkles } from 'lucide-react'

const BlogTitles = () => {

  const categories = ['English', 'Japanese', 'Vietnamese', 'Chinese', 'Korean', 'French', 'German', 'Spanish', 'Italian', 'Russian', 'Portuguese', 'Arabic', 'Hindi', 'Bengali', 'Urdu', 'Punjabi']

  const [selectedCategory, setSelectedCategory] = useState('English')
  const [input, setInput] = useState('')
  
  const onSubmitHandler = async (e:any) => {
    e.preventDefault();
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left col */}
      <form onSubmit={() => onSubmitHandler()} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#8E37EB]'/>
          <h1 className='text-xl font-semibold'>AI Dictionary</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Keyword</p>

        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='e.g. a word "linguistist" or a sentence "saint peter is calling my name"' required/>
        
        <p className='mt-4 text-sm font-medium'>Output Language</p>
        <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
          {
          categories.map((item) => (
            <span onClick={() => setSelectedCategory(item)} key={item} className={`text-xs px-4 p-1 border rounded-full cursor-pointer ${selectedCategory === item ? 'bg-purple-50 text-purple-700' : 'text-gray-700 border-gray-200 hover:bg-gray-100'}`}>{item}</span>
          ))}
        </div>
        <br />
        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#B153EA] to-[#E549A3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 hover:scale-102 transition duration-300'>
          <Hash className='w-5'/>Generate Explanation
        </button>
      </form>

      {/* right col */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-50'>
        <div className='flex items-center gap-3'>
          <Hash className='w-5 h-5 text-[#B153EA]'/>
          <h1 className='text-xl font-semibold'>Generated Explanation</h1>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <BookOpenText className='w-9 h-9 text-[#B153EA]'/>
            <p>Enter a keyword and click "Generate Explanation" to get started!</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BlogTitles
