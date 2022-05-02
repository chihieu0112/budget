import { legacy_createStore } from 'redux'
import reducer from './reducer'


const store = legacy_createStore(reducer)


const actionAdd = {
    type: 'budget/add',
    id: 3,
    desc: 'Buy 3',
    amount: 500
}

const actionDel = {
    type: 'budget/delete',
    id: 3,
}

// Testing
// console.log('Test add', store.dispatch(actionAdd))
// console.log('Get state', store.getState())

export default store