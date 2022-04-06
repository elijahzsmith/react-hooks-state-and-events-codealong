import React, { useState } from "react";

function Toggle() {
  const [isOn, setOnOff] = useState(false)

  function handleToggle() {
    setOnOff((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white";

  return <button onClick={handleToggle} style={{ background: color }} >{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
