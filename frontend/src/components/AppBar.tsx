
const AppBar = () => {
  return (
    <div className="flex border border-slate-200 justify-between px-5">
        <div className="p-2">
        Write
        </div> 
        <div >
        { <div className="relative  inline-flex items-center justify-center w-4 h-4 overflow-hidden
         bg-gray-100 rounded-full dark:bg-gray-600 p-3.5">
    <span className="font-medium text-gray-600
     dark:text-gray-300">{}</span>
        </div>
}
        </div>
    </div>
  )
}

export default AppBar