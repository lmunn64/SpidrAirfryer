import { useState } from 'react'
import './App.css'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [cost, setCost] = useState('')
  const [code, setCode] = useState('')

  // Validation functions
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // function to set the format of the phone while typing
  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)
    if (match) {
      return !match[2] ? match[1] : `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`
    }
    return value
  }

  // function to set the format of the pin while typing
  const formatPIN = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 16)
    const match = cleaned.match(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/)
    if (match) {
      const parts = [match[1], match[2], match[3], match[4]].filter(Boolean)
      return parts.join('-')
    }
    return value
  }

  const handlePhoneChange = (e: { target: { value: string } }) => {
    const formatted = formatPhone(e.target.value)
    if (formatted !== phone) {
      setPhone(formatted)
    }
  }

  const handleCodeChange = (e: { target: { value: string } }) => {
    const formatted = formatPIN(e.target.value)
    if (formatted !== code) {
      setCode(formatted)
    }
  }

  const submit = () => {
    
    // validation before submit
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address')
      return
    }
    
    if (phone.replace(/\D/g, '').length !== 10) {
      alert('Please enter a valid 10-digit phone number')
      return
    }
    
    if (code.replace(/\D/g, '').length !== 16) {
      alert('Please enter a valid 16-digit PIN in format ####-####-####-####')
      return
    }

    if(firstName.length == 0){
      alert('Please enter your First Name')
      return
    }

    if(lastName.length == 0){
      alert('Please enter your First Name')
      return
    }
    // print an object of all the form fields
    console.log({ firstName, lastName, email, phone, cost, code })
  }
  return (
    <>
      <ParticlesBackground />
      <div className = "form-container">
        <h1 className='form-title'>Air Fryer</h1>
        <h5 className = 'form-subtitle'>Fill out this form to express interest in our new air fryer by guessing it's price!</h5>
        <div className='form-row'>
          <div>
            <label className='input-label'>First Name</label>
            <input 
              className='form-text'
              type='text' 
              id='first-name-input' 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className='input-label'>Last Name</label>
            <input 
              type='text' 
              className='form-text'
              id='last-name-input' 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className='form-row'>
          <div>
            <label className='input-label'>Email</label>
            <input 
              type='email' 
              className='form-text'
              id='email-input' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderColor: email && !isValidEmail(email) ? 'red' : undefined
              }}
            />
          </div>
          <div>
            <label className='input-label'>Phone</label>
            <input 
              type='tel'   
              className='form-text'
              id='phone-input' 
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(123) 456-7890"
            />
          </div>
        </div>
        <div className='form-row'>
          <div>
            <label className='input-label'>Super Secret Spidr PIN</label>
            <input 
              type='text' 
              className='form-text'
              id='code-input' 
              value={code}
              onChange={handleCodeChange}
              placeholder="####-####-####-####"
              maxLength={19}
            />
          </div>
        </div>
     
        <div className='form-row'>
          <div>
            <label className='input-label'>Guess the Price</label>
            <input 
              type='text' 
              className='form-text'
              id='cost-input' 
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="$99.99"
            />
          </div>
        </div>
       
        <button className='submit-button' onClick={submit}>Submit</button>
      </div>
    </>
  )
}

export default App
