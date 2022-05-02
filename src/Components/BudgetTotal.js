import { useSelector } from 'react-redux'

function BudgetTotal() {

  const listData = useSelector((state) => state.listData)

  const amountData = listData.reduce((current, next) => current + next.amount, 0)

  return (
    <>
      <div className="budget__title">
        Available Budget:
      </div>
      <div className="budget__value">{amountData >= 0 ? `+${amountData}` : amountData}</div>
    </>
  )
}

export default BudgetTotal