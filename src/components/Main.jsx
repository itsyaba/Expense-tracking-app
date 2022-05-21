import React from 'react'
// import Datas from '../data.json'


function Main() {
  // console.log(Datas[0])
  const Datas = require('../data.json')
  const amu = Datas.map((amount) => amount.amount)


  return (
    <main>
      <h2 className="detail-spending">Spending - Last 7 days</h2>
      <div className="charts">
        {Datas.map((item) => (
          <div className="lists" key={item.amount}>
            <p className="bar" key={item.day}>
              {item.day}
            </p>
            <p
              className="chart__line"
              style={{
                height: `${item.amount * 2}px`,
                backgroundColor: `${item.amount < 50 ? "#EC755D" : "#76b5bc"}`,
              }}
            >
              <span className="item_span">${item.amount}</span>
            </p>
          </div>
        ))}
        <div className="main__line"></div>
      </div>
      <hr />

      <div className="total">
        <div className="total-container-one">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className="total-container-two">
          <h4> +2.4%</h4>
          <p>from last month</p>
        </div>
      </div>
    </main>
  );

}

export default Main