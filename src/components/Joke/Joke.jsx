import React from 'react';
import './Joke.css';

function Joke({content}) {
    return (
        <textarea disabled value={content} className='joke'/>
    );
}

export default Joke;