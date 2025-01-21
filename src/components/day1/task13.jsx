import myimg from "../img/img.jpg";
export default function task13() {
  const cards = [
    {
      image: myimg,
      titel: "abdalluh",
      age: "27",
    },
    {
      image: myimg,
      titel: "ahmad",
      age: "25",
    },
    {
      image: myimg,
      titel: "rana",
      age: "30",
    },
    {
      image: myimg,
      titel: "rama",
      age: "22",
    },
    {
      image: myimg,
      titel: "jenan",
      age: "22",
    },
    {
      image: myimg,
      titel: "rahaf",
      age: "22",
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      {cards.map((card) => (
        <div>
          <img
            src={card.image}
            alt="error"
            style={{ width: "100px", height: "100px" }}
          />
          <h3>{card.titel}</h3>
          <p>{card.age}</p>
        </div>
      ))}
    </div>
  );
}
