import Item from './Item'

function BudgetExpenses({
    listData
}) {
    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            <div className="expenses__list">
            {
                    listData.map((itemData, index) => <Item itemData={itemData} key={index} itemId={itemData.id}/>)
            }
            </div>
        </div>
    )
}

export default BudgetExpenses