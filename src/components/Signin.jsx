import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Signin()
{

    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const [confirmpassword,setconfirmpassword]=useState()
    const navigate=useNavigate()


    const handlesubmit=async(e)=>{
        e.preventDefault()

        try{
            const res=await axios({
                method:'post',
                url:['https://backend2-jlfc.onrender.com/api/signin'],
                withCredentials:true,
                data:{name,email,password,confirmpassword},
                headers:{}
             })
     
             if(res.data.success)
             {
                 alert('successfully registered')
                 navigate('/signup')
                 console.log(res.data)
             }
        }catch(e)
        {
            alert('there are some error')
            console.log(e.message)
            console.log(e)
        }
        


    }

    return(
        <>
        <form onSubmit={handlesubmit}>
            <div>
                Name : <input type="text" name="name" onChange={(e)=>setname(e.target.value)}/>
            </div>
            <br />
            <div>
                Email : <input type="email" name="email" onChange={((e)=>setemail(e.target.value))}/>
            </div>
            <br />
            <div>
                Password : <input type="text" name="password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <br />
            <div>
                Confirm password : <input type="text" name="confirmpassword" onChange={(e)=>setconfirmpassword(e.target.value)}/>
            </div>
            <br />
            <button>submit</button>
            <br />
            <Link to='/signup'>Are you registered?</Link>
        </form>
        </>
    )
}

export default Signin
