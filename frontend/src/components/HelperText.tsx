import { Link } from "react-router-dom"

const HelperText = ({text,link}:{text:string,link:string}) => {
  return (
    <div className="text-slate-500 text-center font-medium">
        {text} <Link className="underline" to={`/${link}`}>{link[0].toUpperCase()+link.slice(1)}</Link>
    </div>
  )
}

export default HelperText