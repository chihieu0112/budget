



import Add from './Components/Add'
import BudgetTotal from './Components/BudgetTotal'
import BudgetType from './Components/BudgetType'
import BudgetList from './Components/BudgetList'

import { useState } from 'react';


function App() {

  // let totalIncome = 0;
  // let totalExpense = 0;
  // const [totalData, setTotalData] = useState({
  //   totalIcome: 0,
  //   totalExpense: 0
  // })


  // function getListAmount(inc, exp) {
  //   setTotalData({
  //     // totalIncome: inc.listIncome.reduce((prev, cur) => prev + cur.amount, 0),
  //     // totalExpense: exp.listIncome.reduce((prev, cur) => prev + cur.amount, 0),
  //   })
  //   // totalIncome = inc.reduce((current, next) => current + next, 0)
  //   // totalExpense = exp.reduce((current, next) => current + next, 0)
  //   // console.log(inc.listIncome.reduce((prev, cur) => cur, 0))
  //   let a = inc.listIncome.reduce((prev, cur) => prev + cur.amount, 0)
  //   console.log(a)

  // }

  // console.log(totalData)

  return (
    <div className="App">
      <div>
        <div className="top">
          <div className="budget">
            <BudgetTotal />
            <BudgetType type={'inc'} />
            <BudgetType type={'exp'} />
          </div>
        </div>
        <div className="bottom">
          {/* Trường hợp dấu + */}
          <Add />
          {/* Trường hợp chọn dấu - */}
          {/* <div className="add">
            <div className="add__container">
              <select className="add__type red-focus">
                <option value="inc">+</option>
                <option value="exp" >-</option>
              </select>
              <input type="text" className="add__description red-focus" placeholder="Add description" />
              <input type="number" className="add__value red-focus" placeholder="Value" />
              <button className="add__btn red"><i className="ion-ios-checkmark-outline" /></button>
            </div>
          </div> */}
          <BudgetList />
          {/* <BudgetList getListAmount={getListAmount} /> */}
        </div>
      </div>

    </div>
  );
}

export default App;
