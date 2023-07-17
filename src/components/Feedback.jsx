import React from 'react'

const Feedback = () => {

    const [feedback, setFeedback] = React.useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thanks for your feedback!!")
    }

    return (
        <div className='w-full p-10 dark:bg-[#33373f] duration-[500ms] dark:text-white'>
<div className='text-center text-[#2271ef] dark:bg-[#183777] dark:text-white  py-8 text-[20px] md:text-4xl font-bold duration-[150ms]'>Feedback</div>

            <div className="mx-auto md:p-10 p-4 max-w-[13000px] justify-center items-center bg-[#EDF3FD] dark:bg-[#262626] ">
            
            <form className='text-zinc-800 dark:text-white' onSubmit={handleSubmit}  >
                <div className="md:flex md:justify-evenly items-center">

                <div className="p-4 flex flex-col md:w-[40%] ">
                    
                <label htmlFor="username">Name:</label>
                <input className='dark:bg-[#464b55] p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm ' type="text" name='username'  required/>

                <label className='mt-4' htmlFor="email">Email:</label>
                <input className='dark:bg-[#464b55] p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm ' type="email" name="email"  required/>

                <select className='dark:bg-[#464b55] p-1 mt-8 -outline-offset-0 outline-none  focus:outline-[#2271ef] rounded-sm ' name="type" id="type" required>
                    <option disabled selected >---Select an  option---</option>
                    <option value="feedback">Feedback/Suggestion</option>
                    <option value="ask">Ask</option>
                    <option value="other">Other</option>
                </select>

                <div className='mt-6'>
                     <label htmlFor='collab' className='accent-[#2271ef] -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm '><input type="checkbox" name="collab" id="collab"/> If you want to collaborate just check this check box</label>
                </div>

                

                </div>
                
                <div className="flex md:w-[40%] justify-center">
                <textarea className='w-full m-4 p-1 outline-none -outline-offset-0 focus:outline-[#2271ef] rounded-sm dark:bg-[#464b55]' name="message" id="" cols="30" rows="10" placeholder='Your message goes here..'  required></textarea>
                </div>
                </div>
                <div className="flex mt-2 justify-center">

                {/* <input type="submit" className='p-2 w-24 rounded-md drop-shadow-lg bg-[#2271ef] dark:bg-[#464b55] text-white' onClick={handleSubmit} value="Submit" /> */}

                <input className= 'p-2 w-24 rounded-md drop-shadow-md bg-[#2271ef] dark:bg-[#464b55] text-white' type='submit' value='submit' />

                </div>
            </form>

            </div>
        </div>
    )
}

export default Feedback;