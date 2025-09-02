import { useState } from "react";


type SubmitOptionProps = {
    onSubmit: (option: string) => void;
}

export default function SubmitOption({onSubmit}: SubmitOptionProps) {
  const [optionName, setOptionName ] = useState("");
  return (
    <div className="submit-form">
      <label htmlFor="option-name">Option Name</label>
      <input 
        type="text"
        id="option-name"
        onChange={(event) => setOptionName(event.target.value)}
      />
      <button
        onClick={() => {
        optionName ? onSubmit(optionName) : alert("Option Name is required!")
       }}
       >
        Submit
      </button>
    </div>
  )
}
