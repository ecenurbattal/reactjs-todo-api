import React from 'react'

const Button = ({text,onClick,...restProps}) => {
    return (
        <button style={{...restProps}} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
