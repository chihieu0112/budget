import { useSelector } from 'react-redux'

function useBudgetData() {
    const listData = useSelector((state) => state.listData)

    const listIncome = listData.filter((item) => {
        return item.amount > 0
    })

    const listExpenses = listData.filter((item) => {
        return item.amount < 0
    })

    return {
        listIncome,
        listExpenses
    }
}

export default useBudgetData;

