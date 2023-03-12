import React from 'react';
import './Paragraph.css';

function Paragraph({content, align}) {
    return (
        <p style={{textAlign: align}} >
            {content}
        </p>
    );
}

export default Paragraph;