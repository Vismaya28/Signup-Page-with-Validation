import React, { useState } from 'react'
import Signup from './Signup'
import Success from './Success'

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const submitForm = ()=>{
    setFormSubmitted(true)
  }
  return (
    <div>
      {!formSubmitted ?(
         <Signup submitForm={submitForm}/>
         ) :( <Success/>
         )}
    </div>
  )
}

export default Form
