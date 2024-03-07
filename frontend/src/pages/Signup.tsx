import { ChangeEvent, useState } from "react"
import Button from "../components/Button"
import FormTitle from "../components/FormTitle"
import HelperText from "../components/HelperText"
import Input from "../components/Input"
import Qoute from "../components/Qoute"
import { sigupType } from "@mumin00/common"
import {BACKEND_URL} from "../../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Signup = () => {


    const [input,setInput] = useState<sigupType>({
        username:"",
        email:"",
        password:""
    })
    const navigate = useNavigate()
    const sendRequest = async ()=>{
        try
        {
            const response = await axios.post(`${BACKEND_URL}/v1/api/users/signup`,input)
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

    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className=" w-[24rem]">
            <FormTitle title="Create an account"/>
            <HelperText text="Already have an account." link="signin"/>
            <Input  label="Username" placeholder="steve" onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                setInput(c => ({
                    ...c,
                    username: e.target.value
                }
                ))
            }}/>
            <Input label="Email" placeholder="abc@d.com" onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                setInput(c => ({
                    ...c,
                    email: e.target.value
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
            <Button text={"Sign Up"} sendRequest = {sendRequest}/>
            </div>
        </div>
        <div className="hidden lg:block">
        <Qoute/>
        </div>
    </div>
  )
}

export default Signup