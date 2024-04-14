import React from 'react';

function Heading(props) {
    var number = props.number;
    var title = props.title;

    return ( 
        <h2 class="text-3xl font-bold self-start">
            <span class="text-primary font-firacode">{number}</span>
            <span> {title}</span>
        </h2>
     );
}

export default Heading;