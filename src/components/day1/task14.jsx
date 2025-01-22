import React from "react";
import { toast } from "react-toastify";
export default function task14() {
  const add = () => {
    toast("hallo");
  };

  return <button onClick={add}>hello</button>;
}
