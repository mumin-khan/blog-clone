import { ChangeEvent } from "react"

type InputType = {
    label:string,
    placeholder:string,
    type?:string
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}
const Input = ({label,placeholder,type,onChange}:InputType) => {
  return (
    <div className="m-2">
       <div className=" font-medium" >{label}</div>
        <input type ={type || "text"} className=" border mt-1 w-full border-slate-300 p-2 rounded-md font-semibold" onChange={onChange} placeholder={placeholder}/> 
    </div>
  )
}

export default Input