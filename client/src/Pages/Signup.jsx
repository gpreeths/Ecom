import React from 'react'
import Icons from '../Components/Icons'
import Footer from '../Components/Footer'
import "../Pages.css"
import axios from 'axios'
import { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('')// empty string shoud b shown first, that is why'' is used-- it shud change along the user types in-- hence uses a functn seteail to change email
  // this is given as an array-- usestates returns the aray
  const [password, setPassword] = useState('')
  const [contact, setContact] = useState('')
  const [name, setName] = useState('')


  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleLogin = async (e) => {  // for performing asyn fnutn either use asyn/ promise
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      //send login data to backend
      const response = await axios.post('http://localhost:3000/Signup', { // post is httpfuction to give email and pass to serve-- link to db where data shu b stored- 
      // the responce-suc/fail is returned to reponse
        //awit is used to complete this process before moving to next code--this is given to setsuccess/seter functn
        email, password,contact,name //data to be sent to backend
      })

      //handle success
      const { token } = response.data //extract the jwt token- used to keep customer logged in until he logs out
      setSuccess('Login successful')
      localStorage.setItem('token', token)// save login token in localstorge

      //redirect or take further
    }
    catch (err) {
      //handle error--err has the error
      setError(
        err.response?.data?.message || 'An error occured during signup ' //prits either the error-- 
        // if error is not defined- the or option-'An error occured during signup ' will prin by default
      )
    }

  }
  return (
    <>
      <Icons />
      <div
        style={{
          border: "solid brown 2px",
          backgroundColor: "rgb(180, 238, 99)",
          height: 600,
          textAlign: "center"
        }}>

        <form onSubmit={handleLogin} > 
          {/* handle login is used to commniate with backen -wen submit is click this fuctn is called */}
          <div>
            <h3 style={{ color: "brown" }}>Personal Details</h3>
            <label htmlFor="Name">Name :</label>
            <input type="text"
              value={name} //jsx code-- hence in brackect-- this value is changed when user changes input in this field
              onChange={(e) => setName(e.target.value)} 
              // onchge is called when ever the input in field is chged--this fuction calls fntn setname--it has argument caled e(this varivable can be anythg  -- IT REFERS TO HE EVENT) that is event--
              required />

            <br />
            <br />
          </div>
          <div>
            <label htmlFor="Password">Password :</label>
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />

            <br />
            <br />


          </div>
          <div>
            <label htmlFor="Email">Email id :</label>
            <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <br />
            <br />
          </div>
          <div>
            <label htmlFor="Contact">Contact# :</label>
            <input type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required />
            <br />
            <br />
            <br />

          </div>
          <input
            type="submit"
            name="Submit"
            style={{
              border: "1px white",
              color: "aliceblue",
              backgroundColor: "orange"
            }}
            id="submit"
          />
        </form>
        {error && <p>{error}</p>}
        <br /><br />
        <Footer />
      </div>
    </>
  )
}

export default Signup





{/* <label htmlFor="Gender">Gender :</label>
  <input type="radio" name="Gender" defaultValue="Male" id="" />
  Male
  <input type="radio" name="Gender" defaultValue="Female" id="" />
  Female
  <br />
  <br /> */}

