import { BlogType } from "../types"

const BlogReadCard = ({blog}:{blog:BlogType}) => {
  return (
    <div className="grid grid-cols-12">
        <div className="col-span-8 flex">
            <div className="max-w-4xl ml-20">
            <div className="text-2xl font-bold mt-7" >
                {blog.title}
            </div>
            <div className="my-2 text-slate-500 text-md">
                Posted on Feb 19,2023 
            </div>
            <div className="mt-4 leading-relaxed text-slate-800 text-lg">
               {blog.content}
            </div>
        </div>
        </div>
        <div  className="col-span-4 mx-5">
        <div className="flex flex-col ">
        <div className="mt-7 font-bold">
            Author
        </div>
        <div className="flex items-center">
        <div>
        <div className="flex justify-center items-center mr-1">
            <div className="border-slate-300 bg-slate-300 border w-6 h-6  rounded-full mr-2"></div>
            </div>
        </div>
        <div>
            <div className="font-extrabold text-2xl my-2">
                {blog.author.username}
            </div>
            <div className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quisquam consequuntur eligendi, tenetur et voluptatem aut nihi.
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default BlogReadCard