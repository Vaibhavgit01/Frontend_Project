import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../Components/firebase'
import { setDoc, doc } from 'firebase/firestore'
const Register = () => {
  ///usesate getting 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    ///button submit after data is clear in input fields
    setName("")
    setEmail("")
    setPassword("")

    // setUserData({ name: "", email: "", password: "" });
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log("User created successfully:", user);
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: user.email,
        });
      }
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMsg("❌ " + (error.message || "Something went wrong during login."));
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);

    }



  }
  return (
    <div className='flex flex-col justify-center items-center md:h-screen pt-0 pb-8 bg-[url("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg")]  bg-cover relative'>
      {showSuccess && (
        <div className="fixed top-10  bg-green-400 text-white px-6 py-3 rounded-xl animate-bounce z-50 ">
          You are successfully logged in ✅
        </div>
      )}
      {errorMsg && (
        <div className="absolute top-4 bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded-lg shadow-sm">
          {errorMsg}
        </div>
      )}



      <div className="flex flex-col items-center bg-white/50 backdrop-blur-none shadow-sm md:shadow-md mb-4 px-6 py-5 rounded-2xl w-80 md:w-110 md:h-120 md:px-10 md:py-5">
        <h1 className='text-xl md:text-3xl font-semibold text-blue-800'>CREATE NEW ACCOUNT</h1>
        <form className='flex flex-col gap-4.5 md:gap-5  w-full mt-5 p-2' onSubmit={handleSubmit}>

          <label htmlFor="Name" className='text-xl font-semibold'>Name</label>
          <input className='border-2 border-blue-400 rounded-xl w-65 h-10 px-3 text-black md:w-88 md:h-10 md:px-4 md:mx-2 focus:outline-none' type="text"
            placeholder='Enter Your Name'
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }} />
          <label htmlFor="email" className='text-xl font-semibold' >E-Mail</label>
          <input className='border-2 border-blue-400 rounded-xl w-65 h-10 px-3 text-black md:w-88 md:h-10 md:px-4 md:mx-2 focus:outline-none' type="email"
            placeholder='Enter your Email'
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            } />
          <label htmlFor="password" className='text-xl font-semibold'>Password</label>
          <input className='border-2 border-blue-400 rounded-xl w-65 h-10 px-3 text-black md:w-88 md:h-10 md:px-4 md:mx-2 focus:outline-none'
            type="password"
            placeholder='Enter your Password'
            required
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)} />

          <button type="submit" className='flex flex-col justify-center items-center bg-orange-400 text-white p-2 mt-2  text-[19px] md:text-xl font-semibold rounded-2xl cursor-pointer w-65 md:w-88 transition-all duration-300 ease-in-out hover:bg-orange-600 active:scale-95 active:bg-orange-700 ' >Submit</button>
        </form>
      </div>
      <p className='text-lg font-semibold text-white md:text-2xl'>
        Already have an account ? {""}
        <Link to="/Login" className='text-blue-600 font-semibold animate-pulse inline-block'>   Login</Link>

      </p>
    </div>
  )
}

export default Register  