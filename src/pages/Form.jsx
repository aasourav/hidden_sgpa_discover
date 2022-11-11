import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import { calculateSGPA } from '../features/sgpa/sgpaSlice'

const Form = () => {
   const navigate = useNavigate()
   const [value,setValue] = useState({
      cur_cgpa:'',
      last_sem_cgpa:'',
      total_credit_hour:'',
      last_sem_credit_hour:''
   })


   const dispatch = useDispatch();
   // const data = useSelector(state => state.sgpa_cal)
   const clearData = ()=>{
      setValue({
         cur_cgpa:'',
         last_sem_cgpa:'',
         total_credit_hour:'',
         last_sem_credit_hour:''
      })
   }
   const submitHandle = (e)=>{
      e.preventDefault()
      const c_cg = parseFloat(value.cur_cgpa);
      const last_s_cg = parseFloat(value.last_sem_cgpa)
      const total_credit = parseFloat(value.total_credit_hour)
      const last_s_credit = parseFloat(value.last_sem_credit_hour)

      const val = total_credit - last_s_credit;
      const v2 = total_credit * c_cg;
      const v3 = val * last_s_cg;

      const sgpa = ((v2-v3)/(last_s_credit)).toFixed(2)
      clearData()
      console.log(sgpa)
      dispatch(calculateSGPA(sgpa))
      navigate('/result')
   }
   const changingForm = (e)=>{
         setValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value
         }))
         // console.log(e.target.value, e.target.name);
   }
  return (
    <div className='flex flex-col items-center mt-16 '>
        <div className='text-blue-600 text-4xl border-b-4 border-yellow-600 pb-3'>What is my SGPA?</div>
        <form onSubmit={submitHandle}>
           
           <InputField change={changingForm} n='cur_cgpa' name='Your current CGPA:' placeholder='ex. 3.40' value={value.cur_cgpa}/>
           <InputField  change={changingForm}  n='last_sem_cgpa' name='CGPA was in last semester:' placeholder='ex. 4.00' value={value.last_sem_cgpa}/>

           <InputField change={changingForm}  n='total_credit_hour' name='Total credit hour that you have completed: ' placeholder='ex. 50' value={value.total_credit_hour}/>

           <InputField change={changingForm}  n='last_sem_credit_hour' name='Total credit hour in your last semester: ' placeholder='ex. 12' value={value.last_sem_credit_hour}/>
           
           <button type='submit' className='
              mt-3 bg-sky-500
              border-2 border-green-300 rounded-md px-3 py-1
              text-white font-medium
           '>Get SGPA!</button>
           <button onClick={clearData} className='
              ml-4
              mt-3 bg-sky-500
              border-2 border-green-300 rounded-md px-3 py-1
              text-white font-medium
           '>Clear Input</button>
        </form>
    </div>
  )
}

export default Form