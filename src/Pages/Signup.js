import React, { useState } from "react";
import signup from "../Assets/login.jpg";
import { BiShowAlt, BiHide } from "react-icons/bi";
import bgImage from "../Assets/nightfall.jpg";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import {imagetobase64} from '../utility/imagetobase64'
import { toast } from "react-hot-toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowconfirmPassword((preve) => !preve);
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
  const handleUpload = async(e)=>{
    const data = await imagetobase64(e.target.files[0])
   // console.log(data)
    
    setData((preve)=>{
        return{
            ...preve,
            image :  data
        }
    })
  }
  console.log(process.env.REACT_APP_SERVER_DORMIN)
 const handleSubmit = async(e)=>{
    e.preventDefault()
    const {username,email,password,confirmPassword} = data
    if(username && email && password && confirmPassword){
        if(password===confirmPassword){
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/signup`,{
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
            })
            
            const Resdata = await fetchData.json()
            console.log(Resdata)
            toast("Successfull")
            alert("Signup was succesful")
            navigate("/login")
        }
        else{
            toast("password and confirm password not equal")
            alert("password and confirm password not equal")
        }
    }
    else{
      alert("Enter missing Fields")
       toast("Enter required Fields")
    }
 }

  return (
    <div
      className="bg-cover bg-center h-screen p-3 md:p-4 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-sm m-auto flex items-center flex-col  p-2 bg-white rounded-lg">
        {/* <h1 className='text-center text-2xl font-serif'>Login</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-xl shadow-md m-auto relative">
          <img src={data.image ? data.image : signup} className="w-full " />
          <label htmlFor="profileImage">
          <div className="absolute bg-slate-500 w-full text-center bottom-0 h-1/3 cursor-pointer">
            <p className="text-black">Upload</p>
          </div>
          <input type={"file"} id="profileImage" accept="image/*" className="hidden" onSubmit={handleUpload}/>
          </label>
          
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
              placeholder="*******"
              className="w-full bg-slate-300  outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex items-center px-2 py-2 bg-slate-300 w-full mt-2 mb-2 rounded-xl outline-blue-500">
            <span>
              <HiLockClosed className="text-xl" />
            </span>
            <input
              type={showconfirmPassword ? "text" : "confirmPassword"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-300  outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowConfirmPassword}>
              {showconfirmPassword ? <BiShowAlt /> : <BiHide />}
            </span>
          </div>
          <button type="submit" className="max-w-[120px] w-full bg-black text-blue-500 hover:bg-red-900 text-center py-2 m-auto font-medium rounded mt-2">
            Submit
          </button>
        </form>
        <p>
          Already Have an Account ?{" "}
          <Link to={"/login"} className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
