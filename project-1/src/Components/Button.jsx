import React from 'react';

function Button({
    children,
    type = 'button',
    text = white,
    bgColor = 'bg-gray-600',
    textColor = 'text-white',
    classname = '',
    ...props
    
    
}){
    return(
        <button className={`px-4 py-2 rounded-full ${classname} ${bgColor} ${textColor}`}>
            {children}
        </button>
        
    )
}

export default Button;