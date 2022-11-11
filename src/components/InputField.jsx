import React from 'react'

const InputField = ({ change,n,value,name='Your name',placeholder='input your name'}) => {
  return (
    <div className='mt-4'>
        <label className='
            text-teal-600
            font-medium
        '>{name}</label>
        <br/>
        <i className="fa-sharp fa-solid fa-pen border-green-400 text-green-600 border-2 p-2 border-r-0  rounded-l-md"></i>
        <input
        type='number'
        required={true}
        name={n}
        value = {value}
        onChange={change}
        
        className='
            mt-2
            border-2 border-l-0 border-green-400
            p-1 focus:outline-none  rounded-r-md
        ' 
            placeholder={placeholder}
        />
    </div>
  )
}

export default InputField