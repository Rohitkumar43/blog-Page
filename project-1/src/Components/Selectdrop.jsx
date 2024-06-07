import React , {useId} from 'react';
// import { useId } from 'react';
// HERE WE WRITE A SPECIAL FXN FOR THE SELCT COMPONENTS
function Selectdrop({
    option,
    label,
    className,
    ...props
} , ref) {
    // for selsct we need dropdown option
    const id = useId();
    
    return(
        <div className="w-full">
            {label && <label htmlFor={id} className=''></label>}
            <select id={id} {...props} ref={ref}
            className= {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50
            duration-200 border border-gray-200 ${className}`}>
                {/* // now we make the option for the select element */}
            {options?.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
            </select>
        </div>
        
    )
}


export default React.forwardRef(Selectdrop);