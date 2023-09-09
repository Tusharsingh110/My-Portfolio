import React from 'react'

const FeedbackCards = (props) => {
    // console.log(props);
  return (
    <>
      <div className='bg-[#fffdfd] dark:bg-[#33373f] h-[300px] w-[300px] mx-auto shadow hover:shadow-md duration-[100ms] rounded-xl'>
        <div className='p-4 '>
       <p className='pt-1'>
            <h1 className='font-semibold text-gray-800 dark:text-gray-50'>{props.username}</h1>
       </p>
            <small className='pb-1 text-gray-500 dark:text-gray-50'>{props.email}</small>
            <hr />
      <p className='m-4 ml-0 text-gray-700 dark:text-gray-50'>{props.message}</p>
      </div>
      
      </div>
    </>
  )
}

export default FeedbackCards
