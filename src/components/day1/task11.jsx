import React from 'react'

export default function task11() {
  const numbers =[1,2,3,4,5]
  return (
    <ul>
      {numbers.map((number) => (
        <li>
          <span style={{ backgroundColor: "yellow", padding: "2px" }}>
            Doubled
          </span>
          number {number} is
          {number * 2}
        </li>
      ))}
    </ul>
  );
}
