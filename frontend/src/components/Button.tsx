
const Button = ({text,sendRequest}:{text:string,sendRequest:()=>void}) => {
  return (
    <button onClick={sendRequest} className="m-2 w-full bg-black text-white flex justify-center p-1 rounded-md">
        {text}
    </button>
  )
}

export default Button