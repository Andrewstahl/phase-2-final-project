import React, { useState } from "react";

// - Add a controlled form that includes:
//    A text input
//    A button with the text of “Click Me!”
//    A paragraph that has a counter that starts at 0
// - When they input text in the text field and submit it, the text input should reset. At the same time the counter should increment based on the word length.
// - The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.

export default function Counter() {

  const [formData, setFormData] = useState({
    input: "",
    counter: 0
  })

  function handleClick(e) {
    e.preventDefault()
    const textLength = formData.input.length
    setFormData({
      input: "",
      counter: formData.counter + textLength
    })
  }

  return (
    <form>
      <input 
        value={formData.input}
        onChange={(e) => setFormData({...formData, input: e.target.value})}
      >
      </input>
      <button onClick={(e) => handleClick(e)}>Click Me!</button>
      <p>{formData.counter}</p>
    </form>
  )
}