import React from 'react'

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-9 flex flex-col md:flex-row my-8'>
                <div className='md:px-2 md:w-1/2 md:mt-[120px] md:order-1 order-2'>
                    <div className='space-y-8'>
                        <h1 className='text-4xl font-bold'>Hello , welcomes here to learn something <span className='text-pink-500'>new everyday !!!</span></h1>
                        <p className='text-xl font-normal'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Enim molestiae error commodi optio id distinctio veniam ad
                            neque,corporis quos numquam impedit! Totam, consequuntur rem.
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    </div>
                    <button className="btn btn-secondary mt-4">Send Email</button>
                    
                </div>
                <div className='md:px-2 order-1 md:w-1/2'>
                    <img  className='object-cover rounded-[3px] mt-20 order-1' src="https://imgs.search.brave.com/tQAlmeQ8b9hCCG8a0uD3kWJqyC6GTCKYsT5sHVDLDhs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTE4NDE1NzM2MzQt/MjgxNDBmYzdjZWQ3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRoOGZH/SnZiMnNsTWpCeGRX/OTBaWE44Wlc1OE1I/eDhNSHg4ZkRBPQ" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner