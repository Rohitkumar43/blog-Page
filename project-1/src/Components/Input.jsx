import React , {useId} from 'react';

// BY THE USE OF THE FORWARD.REF

const Input = React.forwardRef(function Input({
    label,
    type="text",
    className = '',
    ...props
}, ref ){
    const id = useId();
    return(
        <div className='w-full'>
            {label && <label className='inline-block pr-2 ml-2' htmlFor={id}>{label}</label>}
            <input type={text} className={`PX-3 PY-2 rounded-lg bg-white text-black outline-none
                focus: bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref} 
                {...props}
                id={id}/>
        </div>
    )
    
})

// function Input(){
//     const id = useId();
//     return(
//         <div>
//             Input
//         </div>
//     )
// }\


export default Input;