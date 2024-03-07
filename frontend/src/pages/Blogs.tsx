import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"
import { BlogType } from "../types"

const Blogs = () => {
    const {loading, blogs} = useBlogs()
    const arr = [1,2,3,4,5]
    if(loading)
    {    
        return <div className="flex h-screen flex-col items-center gap-4 mt-7">
             { arr.map( ()=> {
   return <div role="status" className="max-w-md w-screen animate-pulse">
    <div className="flex items-center">
    <div className=" bg-gray-200 rounded-full  mb-4 relative inline-flex items-center
     justify-center w-4 h-4 overflow-hidden p-3.5s"></div>
    <div className="h-2 mx-2 bg-gray-200 rounded-full w-[200px]  mb-2.5"></div>
    </div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[400px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-[400px]"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[400px]"></div>
</div>
    })
  }
        </div>
    }
    console.log(blogs)
  return (
    <div className="flex flex-col items-center">
    {blogs?.map((blog:BlogType)=>{
        return <BlogCard key = {blog.id } blog={blog}/>
    })}
    </div>
   
  )
}

export default Blogs