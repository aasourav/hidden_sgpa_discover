import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Result = () => {
    const navigate = useNavigate()
   // const data = useSelector(state => state.sgpa_cal)
    const goHome = ()=>{
        navigate('/')
    }
    const ans =  useSelector(state=> state.sgpa_cal).sgpa
    // console.log(typeof(ans.sgpa))
    const res =  ans
    // const res = 2.33
  return (
    <div
        className='flex flex-col items-center mt-16
        '
    >
        <div className='flex flex-col items-center border-4
         p-20 border-blue-500 rounded-xl bg-success-bg
         bg-cover
        '>
            <h1
                className='text-2xl font-bold bg-white
                text-orange-700
                '
            >Your SGPA is</h1>
            <h1 className='
                text-6xl font-bold text-teal-700
                mt-4
            '>
                {res}
            </h1>
            <button
                className='
                 mt-36 border-4 border-sky-200 px-4 py-2 rounded-md
                 bg-teal-700 text-white font-medium
                '
                onClick={goHome}
            >Home Page</button>
        </div>
        

    </div>
  )
}

export default Result