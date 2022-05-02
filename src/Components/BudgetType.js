import cls from 'classnames'
import { useSelector } from 'react-redux'
// import {useState} from 'react'

function BudgetType({
  type,
}) {

  let budgetTypeClass = cls('clearfix', {
    'budget__income': type === 'inc',
    'budget__expenses': type === 'exp',
  })

  const listData = useSelector((state) => state.listData)

  let totalIncome = listData.filter((item) => item.amount > 0).reduce((prev, cur) => prev + cur.amount, 0)

  let totalExpenses = listData.filter((item) => item.amount < 0).reduce((prev, cur) => prev + cur.amount, 0)

  return (
    <div className={budgetTypeClass}>
      <div className="budget__income--text">{type === 'inc' ? 'Income' : 'Expenses'}</div>
      <div className="right">
        <div className="budget__income--value">{type === 'inc' ? totalIncome : totalExpenses}</div>
      </div>
    </div>
  )
}

export default BudgetType