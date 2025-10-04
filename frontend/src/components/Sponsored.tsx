

const Sponsored = () => {
  return (
    <>
      {/* Right side bar */}
      <div className='max-xl:hidden sticky top-0'>
        <h3 className='text-slate-800 text-2xl font-semibold ml-3'>Sponsored</h3>
        <div className='max-w-xs bg-white text-xs p-4 rounded-mg incline-flex flex-col gap-2 shadow'>
          <img src="https://www.emailonacid.com/wp-content/uploads/2018/05/EOA_2018GmailUpdate.jpg" className='w-75 h-50 rounded-md' alt=""/>
          <p className='text-slate-600'>Email Marketing</p>
          <p className='text-slate-400'>Supercharge your marketing with an easy-to-use platform build for results.</p>
        </div>
      </div>
    </>
  )
}

export default Sponsored
