function InlinningT() {
  const students = ["student1", "student2", "student3", "student4"];
  return (
    <ul>
      {students.map((student) => (
        <li>{student}</li>
      ))}
    </ul>
  );
}

export default InlinningT;
