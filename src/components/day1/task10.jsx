function InlinningT() {
  const students = ["student1", "student2", "student3", "student4"];
  return (
    <ul>
      {students.map((student) => (
        <li style={{backgroundColor:"orange" , color:"white" , width:"100px" , margin:"10px"}}>{student}</li>
      ))}
    </ul>
  );
}

export default InlinningT;
