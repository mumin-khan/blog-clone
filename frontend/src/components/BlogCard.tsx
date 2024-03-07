import { Link } from "react-router-dom"
import { BlogType } from "../types"

const BlogCard = ({blog}:{blog:BlogType}) => {
  return (
    // <div className="mt-5 flex ">
    <Link to={`/blog/${blog.id}`}>
    <div className="mt-10 max-w-lg cursor-pointer" >
        <div className="flex ">
        <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden
         bg-gray-100 rounded-full dark:bg-gray-600 p-3.5">
    <span className="font-medium text-gray-600
     dark:text-gray-300">{blog.author.username[0].toUpperCase()}</span>
        </div>
            <div className="mx-2 font-semibold">{blog.author.username}</div>
            <div className="flex justify-center items-center">
            <div className="border-slate-500 bg-slate-500 border w-1 h-1  rounded"></div>
            </div>
            <div className="mx-2 text-slate-500">Feb 19, 2024</div>
        </div>
        <div className="mt-3 font-bold text-xl">
            {blog.title}
        </div>
        <div className="mt-3 text-base leading-normal">
       {
        blog.content.slice(0,100)
       } ...
        </div>
        <div className="mt-3 border border-slate-300 bg-slate-300 w-full"></div>

    </div>
    </Link>
  )
}

export default BlogCard