import React, {useState} from 'react'

function ReadMore({children, maxCharacterCount = 100}) {
    const text = children;
  
    const resultString = text.slice(0, 100);
    
    return <p>
      {resultString}
      <button>Read More</button>
    </p>
  }