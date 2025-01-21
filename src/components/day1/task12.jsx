export default function task11() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);
  return (
    <div>
      <div>
        <h2>Even Number</h2>
        <ul>
          {evenNumbers.map((number) => (
            <li>Even:{number}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Odd Number</h2>
        <ul>
          {oddNumbers.map((number) => (
            <li> Odd:{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
