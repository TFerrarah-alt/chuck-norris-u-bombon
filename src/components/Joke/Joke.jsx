import React from 'react';
import './Joke.css';

function Joke({content}) {
    return (
        <div className='joke'>
            {content}
        </div>
    );
}

export default Joke;