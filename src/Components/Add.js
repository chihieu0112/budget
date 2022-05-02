import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {BsFillCheckCircleFill} from 'react-icons/bs'

function Add() {

    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [addType, setAddType] = useState('inc');

    const addOrEdit = useSelector(state => state.addOrEdit)
    const editData = useSelector(state => state.editData)

    const dispatch = useDispatch();

    useEffect(() => {
        if (editData.id) {
            setDesc(editData.desc)
            setAmount(editData.amount)
            setAddType(editData.addType)
        }
    }, [editData.id])

    const handleBtn = () => {

        if (addOrEdit === 'add') {
            dispatch({
                type: 'budget/add',
                id: uuidv4(),
                addType,
                desc,
                amount
            })
        } else {
            dispatch({
                type: 'budget/submitEdit',
                id: editData.id,
                addType,
                desc,
                amount,
                addOrEdit: 'add'
            })
        }
    }

    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleAddType = (e) => {
        e.target.value === 'inc' ? setAddType('inc') : setAddType('exp')
    }

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    return (
        <div className="add">
            <div className="add__container">
                <select className="add__type" onChange={handleAddType} value={addType}>
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input
                    type="text"
                    className="add__description"
                    placeholder="Add description"
                    onChange={handleDesc}
                    value={desc}
                />
                <input
                    type="number" className="add__value" placeholder="Value"
                    onChange={handleAmount} value={amount} />
                <button className="add__btn" onClick={handleBtn}><BsFillCheckCircleFill /></button>
            </div>
        </div>
    )
}

export default Add