import { useState } from 'react'
import './App.css'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [firstName, setFirstName] = useState('sfd')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [cost, setCost] = useState('')
  const [code, setCode] = useState('')

  const submit = () => {
    console.log(firstName)
  }
  return (
    <>
      <ParticlesBackground />
      <div className = "form-container">
        <h1 className='form-title'>Air Fryer</h1>
        <div className='form-row'>
          <input 
            className='form-text'
            type='text' 
            id='first-name-input' 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input 
            type='text' 
            className='form-text'
            id='last-name-input' 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <input 
            type='email' 
            className='form-text'
            id='email-input' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type='tel'   
            className='form-text'
            id='phone-input' 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <input 
            type='text' 
            className='form-text'

            id='cost-input' 
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
     
        <div className='form-row'>
          <input 
            type='text' 
            className='form-text'
            id='code-input' 
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
       
        <button className='submit-button' onClick={submit}>Submit</button>
      </div>
    </>
  )
}

export default App
