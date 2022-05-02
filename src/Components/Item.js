import {useSelector, useDispatch} from 'react-redux'

function Item({
    itemData,
    itemId
}) {

    const {desc, amount} = itemData

    const amountFormat = amount > 0 ? `+ ${amount}` : `- ${amount * (-1)}`;

    // const listData = useSelector(state => state.listData)
    const dispatch = useDispatch();

    const handleDel = () => {
        dispatch({
            type: 'budget/delete',
            id: itemId
        })
    }

    const handleEdit = () => {
        dispatch({
            type: 'budget/sendEdit',
            id: itemId,
            desc,
            amount,
            addType: amount > 0 ? 'inc' : 'exp',
            addOrEdit: 'edit'
        })
    }

    // console.log(addType)

    return (
        <div className="item clearfix">
            <div className="item__description">{desc}</div>
            <div className="right clearfix">
                <div className="item__value">{amountFormat}</div>
                <div className="item__delete" onClick={handleDel}>
                    <button className="item__delete--btn">x</button>
                </div>
                <div className="item__delete" onClick={handleEdit}>
                    <button className="item__delete--btn edit">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Item