import { useState } from "react";

function InputDecimal(props) {
  const [input, setInput] = useState("");
  const [start, setStart] = useState(0);

  const change = (e) => {
    setStart(e.target.selectionStart);
    let val = e.target.value;
    val = val.replace(/([^0-9.]+)/, "");
    val = val.replace(/^(0|\.)/, "");
    const match = /(\d{0,7})[^.]*((?:\.\d{0,2})?)/g.exec(val);
    const value = match[1] + match[2];
    e.target.value = value;
    setInput(value);
    if (val.length > 0) {
      e.target.value = Number(value).toFixed(2);
      e.target.setSelectionRange(start, start);
      setInput(Number(value).toFixed(2));
    }
  };

  return (
    <div>
      <label>
        {props.title}
        <input
          type="text"
          className="effect-1"
          onChange={change}
          value={input}
          {...props}
        />
        <span className="focus-border"></span>
      </label>
    </div>
  );
}

export default InputDecimal;
