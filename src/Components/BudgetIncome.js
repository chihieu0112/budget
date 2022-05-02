import Item from './Item'

function BudgetIncome({
    listData
}) {
    return (
        <div className="income">
            <h2 className="icome__title">Income</h2>
            <div className="income__list">
                {
                    listData.map((itemData, index) => <Item itemData={itemData} key={index} itemId={itemData.id}/>)
                }
            </div>
        </div>
    )
}

export default BudgetIncome