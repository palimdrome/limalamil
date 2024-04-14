import React from 'react';

function ButtonSmall(props) {
    return (  
        <button class="btn flex flex-col justify-center font-bold text-base text-center text-base-100 bg-gradient-to-r from-secondary to-primary border-2 border-base-100 hover:border-primary hover:text-primary hover:from-transparent hover:to-transparent duration-500 px-5">{props.action}</button>
    );
}

export default ButtonSmall;