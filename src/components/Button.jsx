import React from 'react';

function Button(props) {
    return (  
        <button class="btn flex flex-col justify-center font-bold text-lg text-center text-base-100 bg-gradient-to-r from-secondary to-primary border-4 border-base-100 hover:border-primary hover:text-primary hover:from-transparent hover:to-transparent duration-500 px-7 py-7">{props.action}</button>
    );
}

export default Button;