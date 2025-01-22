import Task1 from "./components/day2/task1";
import Task2 from "./components/day2/task2";
import Task3 from "./components/day2/task3";
import Task4 from "./components/day2/task4";
import Task5 from "./components/day2/task5";
import Task6 from "./components/day2/task6";
import Task7 from "./components/day2/task7";
import Task8 from "./components/day2/task8";
import Task9 from "./components/day2/task9";
import Task10 from "./components/day2/task10";
import Task11 from "./components/day2/task11";
import image from "./components/img/img.jpg"

function App() {
    const Task7Click = () => {
      alert("Task7 button clicked!");
    };
  return (
    <div className="App">
      <Task1 /> <hr />
      <Task2 /> <hr />
      <Task3 /> <hr />
      <Task4 /> <hr />
      <Task5 name="Amro" />
      <hr />
      <Task6 label="Click Me" />
      <hr />
      <Task7 PN="labtob" price="$999" description="---" />
      <hr />
      <Task8 username="amro" email="amro@orange.com" age="27" />
      <hr />
      <Task9
        avatar={
          <img
            src={image}
            alt="Amro"
            style={{ width: "100px", height: "100px", borderRadius: "30px" }}
          />
        }
        name="amro"
        email="amro@orange.com"
      />{" "}
      <hr />
      <Task10 hLink="Home" aLink="About" ctLink="Contant" /> <hr />
      <Task11 label="Click Me" onClick={Task7Click} /> <hr />
    </div>
  );
}

export default App;
