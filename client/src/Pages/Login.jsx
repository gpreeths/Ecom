import React from 'react'
import { useState } from 'react'
import Icons from '../Components/Icons'
import Footer from '../Components/Footer'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleLogin = async (e) => {  // for performing asyn fnutn either use asyn/ promise
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      //send login data to backend
      const response = await axios.post('http://localhost:3000/login', { // post is httpfuction to give email and pass to serve
        //awit is used to complete this process before moving to next code
        email, password
      })
console.log(response.data);

      //handle success
      const { token } = response.data //extract the jwt token- used to keep customer logged in until he logs out
      setSuccess(response.data.message)
      localStorage.setItem('token', token)// save login token in localstorge

      //redirect or take further
    }
    catch (err) {
      //handle error
      setError(
        err.response?.data?.message || 'An error occured during login '

      )
    }

  }
  return (
    <>
      <Icons />

      <div style={{
        border: "3px solid red",
        backgroundColor: "antiquewhite",
        textAlign: "center",
        height: 250,
        width: 500
      }}
      >
        <form onSubmit={handleLogin} action="">
          <div>
            <br />
            <br />
            <i className="fa-regular fa-user" />
            <label htmlFor="Name">
              <b>Enter email</b>
            </label>
            <br />
            <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <br />
          <br />
          <div>
            <i className="fa-solid fa-lock" />
            <label htmlFor="Password">
              <b>Password</b>
            </label>
            <br />
            <input type="password" name="pwd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            // style={styles.input}
            />
          </div>

          <br />
          <br />
          <div>
            <input
              type="submit"
              name="Click to submit"
              id="submit"
              style={{ color: "brown", backgroundColor: "rgb(165, 219, 201)" }}
            />
            <input
              type="Reset"
              name=""
              id="reset"
              style={{ color: "aqua", backgroundColor: "brown" }}
            />
          </div>
        </form>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </div>
      <i className="fa-solid fa-key" />
      <a href="">Forgot password</a>
      <Footer />
    </>





  )
}

export default Login