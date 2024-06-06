import React , {useId} from 'react';

// BY THE USE OF THE FORWARD.REF

const Input = React.forwardRef(function Input({
    label,
    type="text",


    className = '',
    ...props
}, ref ){
    const id = useId();
    // return(
    //     {label && <label className='inline-block pr-2 ml-2' htmlFor={id}>{label}</label>}
    //     <div>
    //         hello
    //     </div>
    // )
    
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