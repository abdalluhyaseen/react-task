import React from "react";
class Task2 extends React.Component {
  render() {
    const isLoggedIn = true;
    return <div>{isLoggedIn ? <p>Success</p> : <p>Error</p>}</div>;
  }
}

export default Task2;
