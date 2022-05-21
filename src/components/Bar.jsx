import React from 'react'

function Bar({ Datas }) {
  const mychart = {
    backgroundColor: "red",
      };
      
  return (
    <div className="bar">
      {Datas.map((item) => (
        <div className="lists" key={item.amount}>
          <p className="bar" key={item.day}>
            {item.day}
          </p>
          <p className="chart__line" style={mychart}>
            {item.amount}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Bar