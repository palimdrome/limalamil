import React from 'react';

function Button(props) {
    return (  
        <a href={`${props.url}`}><button class="btn flex flex-col justify-center font-bold text-sm lg:text-lg md:text-base text-center text-base-100 bg-gradient-to-r from-secondary to-primary border-2 lg:border-4 md:border-3 border-base-100 hover:border-primary hover:text-primary hover:from-transparent hover:to-transparent duration-500 lg:px-7 md:px-6 lg:py-7 md:py-6">{props.action}</button></a>
    );
}

export default Button;