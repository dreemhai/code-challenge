import { useState } from "react";

const Accordion = (props) => {
    const [open, setOpen] = useState(false);

    return <div onClick={()=>setOpen(!open)} className={`cursor-pointer mt-[1rem] w-full ${open ? 'border-[1px]' : 'max-h-[62px] hover:border-[rgba(59,130,246,0.5)]'} rounded-[1rem] border-white overflow-hidden`}>
       
       <div className="w-full h-[62px] bg-white text-black flex items-center justify-center relative">
        {
            props.text
        }
       </div>
        <div className={`${open? 'opacity-100' : 'opacity-0'} transition-all duration-150 p-2`}>
            {
                props.children
            }
        </div>
    </div>
}

export default Accordion;