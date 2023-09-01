import React, { useState } from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState({
        username: '',
        email: '',
        type: '',
        collab: false,
        message: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can access the feedback data here and perform further actions
        // For now, let's just log the feedback object
        console.log(feedback);
        // Reset the form
        setFeedback({
            username: '',
            email: '',
            type: '',
            collab: false,
            message: '',
        });
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        // For checkbox inputs, use checked value directly
        const newValue = type === 'checkbox' ? checked : value;

        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [name]: newValue,
        }));
    }

    return (
        <div className='w-full p-10 dark:bg-[#33373f] duration-[500ms] dark:text-white'>
            <div className='text-center text-[#2271ef] dark:bg-[#183777] dark:text-white py-8 text-[20px] md:text-4xl font-bold duration-[150ms]'>Feedback</div>
            
            <div className="mx-auto md:p-10 p-4 max-w-[13000px] justify-center items-center bg-[#EDF3FD] dark:bg-[#262626] ">
                <form className='text-zinc-800 dark:text-white' onSubmit={handleSubmit}>
                    <div className="md:flex md:justify-evenly items-center">
                        <div className="p-4 flex flex-col md:w-[40%] ">
                            <label htmlFor="username">Name:</label>
                            <input onChange={handleChange} className='dark:bg-[#464b55] p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm' type="text" name='username' value={feedback.username} required />
                            
                            <label className='mt-4' htmlFor="email">Email:</label>
                            <input onChange={handleChange} className='dark:bg-[#464b55] p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm' type="email" name="email" value={feedback.email} required />
                            
                            <select onChange={handleChange} className='dark:bg-[#464b55] p-1 mt-8 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm' name="type" id="type" value={feedback.type} required>
                                <option disabled value="">---Select an option---</option>
                                <option value="feedback">Feedback/Suggestion</option>
                                <option value="ask">Ask</option>
                                <option value="other">Other</option>
                            </select>
                            
                            <div className='mt-6'>
                                <label htmlFor='collab' className='accent-[#2271ef] -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm'>
                                    <input onChange={handleChange} type="checkbox" name="collab" id="collab" checked={feedback.collab} />
                                    If you want to collaborate just check this check box
                                </label>
                            </div>
                        </div>
                        
                        <div className="flex md:w-[40%] justify-center">
                            <textarea onChange={handleChange} className='w-full m-4 p-1 outline-none -outline-offset-0 focus:outline-[#2271ef] rounded-sm dark:bg-[#464b55]' name="message" id="" cols="30" rows="10" placeholder='Your message goes here..' value={feedback.message} required></textarea>
                        </div>
                    </div>
                    <div className="flex mt-2  justify-center">
                        <input className='p-2 w-24 rounded-md drop-shadow-md bg-[#2271ef] dark:bg-[#464b55] border text-white hover:bg-white hover:text-[#2271ef] hover:border border-[#2271ef] duration-[100ms]' type='submit' value='Submit' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Feedback;
