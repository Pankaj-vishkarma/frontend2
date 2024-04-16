import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Signup()
{

   const [email,setemail]=useState()
   const [password,setpassword]=useState()
   const navigate=useNavigate()
  
   const handlesubmit=async(e)=>{
      e.preventDefault()
     
      try{

         const res=await axios({
            method:'post',
            url:["https://backend2-eosin.vercel.app/api/signup"],
            withCredentials:true,
            data:{email,password},
            headers:{}
    
      })

      if(res.data.success)
      {
         alert('successfully Login')
         navigate('/profile')
         console.log(res.data)
      }

      }catch(e)
      {
        alert('there are some error')
        console.log(e.message)
      }
      
   }



   return(
    <>
       <form onSubmit={handlesubmit}>
         <div>
            Email : <input type="email" name="email" onChange={(e)=>setemail(e.target.value)}/>
         </div>
         <br />
         <div>
            Password : <input type="text" name="password" onChange={(e)=>setpassword(e.target.value)}/>
         </div>
         <br />
         <button>submit</button>
         <br />
         <Link to='/'>
            new users?
         </Link>
       </form>
    </>
   )
}

export default Signup
