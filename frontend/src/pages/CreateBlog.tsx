import  { useMemo, useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
// TypeScript users only add this code
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import axios from 'axios'
import { BACKEND_URL } from '../../config'
import {  useNavigate } from 'react-router-dom'
type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
const CreateBlog = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const publishBlog = async ()=>{
        console.log(input, localStorage.getItem('content'))
        await axios.post(`${BACKEND_URL}/v1/api/blogs/create`,
        {
            title:input,
            content:localStorage.getItem('content')
        },
        {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('blog-token')}`
            }
        })

        navigate('/blogs')
    }
    const initialValue =useMemo(
        () => {
            const stringified = localStorage.getItem('content')
          return stringified ? JSON.parse(stringified) : [
            {
              type: 'paragraph',
              children: [{ text: 'A line of text in a paragraph.' }],
            },
          ]
        },
        []
        
      )

    const [editor] = useState(() => withReact(createEditor()))
        return (
          // Add the editable component inside the context.
          <div className='flex flex-col items-center justify-center gap-5'>
           <div className='max-w-3xl w-screen' >
    <label  className="block mb-2 text-md font-medium text-gray-900">Title</label>
    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-slate-500 rounded-lg  text-xs " onChange={(e)=>{
        setInput(e.target.value)
    }} />
</div>

            <div className='max-w-3xl w-screen outline outline-1 rounded-md outline-slate-500'>
          <Slate editor={editor} initialValue={initialValue} onChange={value => {
        const isAstChange = editor.operations.some(
          op => 'set_selection' !== op.type
        )
        if (isAstChange) {
          // Save the value to Local Storage.
          const content = JSON.stringify(value)
          localStorage.setItem('content', content)
        }
      }}>

            <Editable
            autoFocus
            className='h-[60vh] outline outline-1 outline-slate-500 rounded-md p-3'
            />
              </Slate>
          </div>
          <button className='bg-green-600 text-white p-3 rounded-lg' onClick={publishBlog}>Publish Blog</button>
          </div>
        )
      }
  


export default CreateBlog