// react imports
import { useEffect, useState } from 'react'
// assets import
import { dummyCreationData } from '../assets/assets';
// icons imports
import { Gem, Sparkles } from 'lucide-react';
// clerk imports
import { Protect } from '@clerk/clerk-react';
// define types imports
import type { Creation } from '../helpers/Types';
import CreationItem from '../components/CreationItem';

const Dashboard = () => {

  const [ creations, setCreations ] = useState<Creation[]>([]);
  
  const getDashboardData = async () => {
    setCreations(dummyCreationData)
  }

  useEffect(()=>{
    getDashboardData();
  }, [])

  return (
    <div className='h-full overflow-y-scroll p-6'>
      <div className='flex justify-start gap-4 flex-wrap'>

        {/* Total creations */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl font-semibold'>{creations.length}</h2>
          </div>
          <div className='w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-400 text-white flex justify-center items-center'>
            <Sparkles className='w-5 text-white'/>
          </div>
        </div>

        {/* Active Plan */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Active Plan</p>
            <h2 className='text-xl font-semibold'>
              <Protect plan='premium'  fallback='Free'>Premium</Protect>
            </h2>
          </div>
          <div className='w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 text-white flex justify-center items-center'>
            <Gem className='w-5 text-white'/>
          </div>
        </div>

      </div>

      <div className='space-y-3'>
        <p className='mt-6 mb-4'>Recent Creations</p>
        {
          creations.map((item)=> <CreationItem key={item.id} item={item}/>)
        }
      </div>
      
    </div>
  )
}

export default Dashboard
