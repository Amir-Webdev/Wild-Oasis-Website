"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return <button onClick={() => setCount((cur) => cur + 1)}>{count}</button>;
}

export default Counter;
