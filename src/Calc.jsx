import React, { useRef } from "react";

function Calc() {
  const n1ref = useRef();
  const n2ref = useRef();
  function add() {
    var a = +n1ref.current.value;
    var b = +n2ref.current.value;
    alert(a + b);
  }
  function checkEnter(ev) {
    if (ev.key === "Enter") {
      n2ref.current.focus();
    }
  }
  return (
    <div className="border border-secondary border-2 m-2 p-2 rounded">
      <b>Calc</b>
      <br />
      <input
        type="text"
        ref={n1ref}
        onKeyUp={(ev) => {
          checkEnter(ev);
        }}
      />
      <br />
      <input type="text" ref={n2ref} />
      <br />
      <button
        onClick={() => {
          add();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Calc;
