import React, { useState } from "react";
import signup from "../Assets/login.jpg";
import { BiShowAlt, BiHide } from "react-icons/bi";
import bgImage from "../Assets/bg2.jpg";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'
import {useDispatch, useSelector} from 'react-redux'
import {loginRedux} from '../redux/userSlice'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const userData = useSelector(state => state.user )
  const dispatch = useDispatch()

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e)=>{
    const {name,value}=e.target
    setData((preve)=>{
        return{
                ...preve,
                [name] : value
        }
    })

  }
  console.log(process.env.REACT_APP_SERVER_DORMIN)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {username,email,password} = data
    if(username && email && password){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/login`,{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    
    const Resdata = await fetchData.json()
    console.log(Resdata)
    toast(Resdata.message)
    alert("Login Succesful")
            if(Resdata.alert){
              dispatch(loginRedux(Resdata))
              setTimeout(()=>{
                navigate("/")
              },1000)
            }
            console.log(userData)
    }
    else{
        alert("Enter required fields")
    }
 }

  return (
    <div
      className="bg-cover bg-center h-screen p-3 md:p-4 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-sm m-auto flex items-center flex-col  p-2 bg-white rounded-lg">
        {/* <h1 className='text-center text-2xl font-serif'>Login</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-xl ">
          <img src={signup} className="w-full " />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="username">UserName</label>
          <div className="flex items-center w-full mt-2 mb-2 bg-slate-300 px-2 py-2 rounded-xl outline-blue-500">
            <span>
              <FaUserTie className="text-xl flex" />
            </span>
            <input
              type="username"
              id=""
              name="username"
              placeholder="johnDoe12"
              className="w-full bg-slate-300 outline-none "
              value={data.username}
              onChange={handleOnChange}
            />
          </div>
          <label htmlFor="email">Email</label>
          <div className="flex items-center px-2 py-2 bg-slate-300 w-full mt-2 mb-2 rounded-xl outline-blue-500">
            <span>
              <MdEmail className="text-xl flex " />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johnDoe@gmail.com"
              className=" w-full bg-slate-300 outline-none"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="flex items-center px-2 py-2 bg-slate-300 w-full mt-2 mb-2 rounded-xl outline-blue-500">
            <span>
              <HiLockClosed className="text-xl" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-300  outline-none"
              placeholder="******"
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </span>
          </div>
          <button className="max-w-[120px] w-full bg-black text-blue-500 hover:bg-red-900 text-center py-2 m-auto font-medium rounded mt-2">
            LOGIN
          </button>
        </form>
        <p>
          Don't Have an Account ?{" "}
          <Link to={"/signup"} className="text-blue-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
