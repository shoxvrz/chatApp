import React, { useEffect, useState } from "react"
import './Login.css'
import {useNavigate} from 'react-router-dom'

const Login = () => {
   const [notActive, setNotActive] = useState(true)
   const [inputData, setInputData] = useState({
      userName: '',
      room: ''
   })

   const navigate = useNavigate()

   useEffect(() => {
         if(inputData.userName && inputData.room){
            setNotActive(false)
         }else{
            setNotActive(true)
         }
   }, [inputData.userName, inputData.room])

   const inputHandler = (e) => {
      const { name, value } = e.target

      setInputData((prev) => ({ ...prev, [name]: value }))
   }

   return (
      <div className='login'>
         <div className="main">
            <h1>Join</h1>
            <input name='userName' onChange={inputHandler} type="text" placeholder={'Name'} />
            <input name='room' onChange={inputHandler} type="text" placeholder={'Room'} />
            <button onClick={() => navigate(`/chat?userName=${inputData.userName}&room=${inputData.room}`)} className={notActive ? 'disabled' : 'abled'} disabled={notActive}> Sign In</button>
         </div>
      </div>
   )
}

export default Login