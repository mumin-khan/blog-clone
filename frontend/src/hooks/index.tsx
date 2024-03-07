import { useEffect,useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../../config"
import { BlogType } from "../types"
export const useBlogs = ()=>{
    const [blogs, setBlogs] = useState<BlogType[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{

        axios.get(`${BACKEND_URL}/v1/api/blogs`,
        {
            headers:{
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhYWQ3OTYwMS0xYTc2LTRiMTgtYTQ4NS1mNmZmNDJmZWMzZjYifQ.Z1mOc2JK8bGrIZfOu8_kEv0FnFcECdOXxL60UtGPzC4"
            }
        }).then((response)=>{
            console.log(response.data)
            setBlogs(response.data)
            setLoading(false)
        })
    },[])

    return {
        blogs,
        loading
    }
}

export const useBlog = (id:string)=>{
    const [blog, setBlog] = useState<BlogType>()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{

        axios.get(`${BACKEND_URL}/v1/api/blogs/${id}`,
        {
            headers:{
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhYWQ3OTYwMS0xYTc2LTRiMTgtYTQ4NS1mNmZmNDJmZWMzZjYifQ.Z1mOc2JK8bGrIZfOu8_kEv0FnFcECdOXxL60UtGPzC4"
            }
        }).then((response)=>{
            console.log(response.data)
            setBlog(response.data)
            setLoading(false)
        })
    },[id])

    return {
        blog,
        loading
    }
}