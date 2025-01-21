function InlinningT() {
  const isLoggedIn = true;
  return <div>{isLoggedIn ? <p>welcome</p> : <p>login</p>}</div>;
}

export default InlinningT;
