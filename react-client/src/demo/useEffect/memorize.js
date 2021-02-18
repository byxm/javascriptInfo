import React, { useState, useEffect } from "react";

function HooksMemory() {
  console.log('HookMemory')
  const [name, setName] = useState("");

  useEffect(() => {
    setName(name => name + 'aaa');
    setName(name => name + 'bbb');
    setName(name => name + 'ccc');
  }, []);

  console.log('name', name);

  return (
    <div key="click">
      <p>{name}</p>
    </div>
  );
}

export default HooksMemory;
