import { ChangeEvent, useState } from "react"
import Button from "../components/Button"
import FormTitle from "../components/FormTitle"
import HelperText from "../components/HelperText"
import Input from "../components/Input"
import { signinType } from "@mumin00/common"
import {BACKEND_URL} from "../../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Signin = () => {


    const [input,setInput] = useState<signinType>({
        username:"",
        password:""
    })
    const navigate = useNavigate()
    const sendRequest = async ()=>{
        try
        {
            const response = await axios.post(`${BACKEND_URL}/v1/api/users/signin`,input)
        const jwt = response.data
        console.log(jwt.token)
        localStorage.setItem('blog-token',jwt.token)
        navigate('/blogs')
        }
        catch(e)
        {
            console.log(e)
        }
    }
  return (

    <div className="grid grid-cols-1 ">
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className=" w-[24rem]">
            <FormTitle title="Login"/>
            <HelperText text="Don't have an account." link="signup"/>
            <Input  label="Username" placeholder="steve" onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                setInput(c => ({
                    ...c,
                    username: e.target.value
                }
                ))
            }}/>
           
            <Input label="Password" type={"password"}placeholder="*******" onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                setInput(c => ({
                    ...c,
                    password: e.target.value
                }
                ))
            }}/>
            <Button text={"Sign In"} sendRequest = {sendRequest}/>
            </div>
        </div>
        <div className="hidden lg:block">
        </div>
    </div>
  )
}

export default Signin