import { useParams } from "react-router-dom"
import BlogReadCard from "../components/BlogReadCard"
import { useBlog } from "../hooks"

const Blog = () => {
  const {id} = useParams()
  const {loading,blog} = useBlog(id||"")
  
  if(loading || !blog )
  return <div role="status" className=" mt-10  animate-pulse ">
       <div  className="grid grid-cols-12 ml-32  mx-10">
      <div className="h-screen col-span-8 mx-5" >
      <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-sm mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-2xl"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2  max-w-2xl"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-2xl mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-2xl"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2  max-w-2xl"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-2xl mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-2xl"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2  max-w-2xl"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-2xl mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-2xl"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2  max-w-2xl"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-2xl mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-2xl"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2  max-w-2xl"></div>
</div>
<div className="col-span-4">
<div className="flex items-center ">
    <div className=" bg-gray-200 rounded-full  mb-4 relative inline-flex items-center
     justify-center w-4 h-4 overflow-hidden p-2.5"></div>
    <div className="h-2 mx-2 bg-gray-200 rounded-full w-screen  mb-2.5"></div>
    
</div>
<div className="max-w-sm">
<div className="h-2 mx-2 bg-gray-200 rounded-full   mb-2.5"></div>
<div className="h-2 mx-2 bg-gray-200 rounded-full   mb-2.5"></div>

</div>
</div>
  </div>
</div>
  return (
    <div>
      <BlogReadCard blog={blog}/>
    </div>
  )
}

export default Blog