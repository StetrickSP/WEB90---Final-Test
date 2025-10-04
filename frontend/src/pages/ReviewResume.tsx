import { FileText, Sparkles } from 'lucide-react';
import { useState } from 'react'
// import InDevelopment from '../components/InDevelopment';

/// Task 1: Add an text input area

const ReviewResume = () => {

  const [input, setInput] = useState<File | null>(null)
    
  const onSubmitHandler = async (e:any) => {
    e.preventDefault();
  }


  return (
    // Temporary in development sign
    // <InDevelopment/>

    /// Continue at 2:58:30

    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left col */}
      <form onSubmit={() => onSubmitHandler()} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00DA83]'/>
          <h1 className='text-xl font-semibold'>CEFR Evaluation</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Upload your essay</p>

        <input onChange={(e) => setInput((e.target as HTMLInputElement).files?.[0] || null)} accept='application/pdf' type="file" className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600' required/>
        <p className='text-sm text-gray-500'>Supports PDF only.</p>

        {/* Task 1*/}
        
        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-green-700 hover:to-cyan-600 hover:scale-102 transition duration-300'>
          <FileText className='w-5'/>Evaluate CEFR Level
        </button>
      </form>

      {/* right col */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
        <div className='flex items-center gap-3'>
          <FileText className='w-5 h-5 text-[#00DA83]'/>
          <h1 className='text-xl font-semibold'>Evaluation Results</h1>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <FileText className='w-9 h-9 text-[#00DA83]'/>
            <p>Upload a PDF and click Evaluate CEFR Level to get started!</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ReviewResume
