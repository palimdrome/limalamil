import React from 'react';

function Heading(props) {
    var number = props.number;
    var title = props.title;

    return ( 
        <h2 class="flex flex-row items-end self-start w-8/9 md:w-1/2 lg:w-1/2">
            <span className="text-primary text-base md:text-lg lg:text-lg font-extralight align-bottom">{number}</span>
            <span className="text-base-content text-lg md:text-2xl lg:text-3xl font-bold grow-0 shrink basis-auto mx-4">{title}</span>
            <span className="grow shrink basis-auto">
                <div className="w-full border-none h-0.25 bg-base-100 m-4" />
            </span>
        </h2>
     );
}

export default Heading;