import React, { useState } from 'react'

export const FocusInput = () => {

  const [text,setText] = useState("");


  function handleonclick () {
    
  }

  return (
    <div>
        <input type="text"/>
        <h2>Typing... {text}</h2>
        <button onClick={handleonclick}>Click to Focus</button>
    </div>
  )
}
