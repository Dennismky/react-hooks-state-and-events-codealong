import React from "react";
import React, {usestate} from "react";

function Toggle() {
  const [iSon, setiSon] = useState(false);
  function handleClick() {
    setiSon((iSon) => !iSon);
  }
  return <button style= {{background: red}} onClick={handleClick}>{iSon ? "ON" : "OFF"}</button>;
}

export default Toggle;
