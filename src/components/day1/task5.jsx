function InlinningT() {
  const data1 = <span style={{ color: "green" }}>Orange</span>;
  const data2 = <span style={{ color: "orange" }}>Coding</span>;
  const data3 = <span style={{ color: "red" }}>Academy</span>;

  return (
    <div>
      {data1} {data2} {data3}
    </div>
  );
}

export default InlinningT;
