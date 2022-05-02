

import BudgetIncome from './BudgetIncome'
import BudgetExpenses from './BudgetExpenses'

import useBudgetData from '../global'

function BudgetList() {

    const {
        listIncome,
        listExpenses
    } = useBudgetData();

    return (
        <div className="container clearfix">
            
            <BudgetIncome listData={listIncome} />
            <BudgetExpenses listData={listExpenses} />
            
        </div>
    )
}

export default BudgetList