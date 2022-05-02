
// import store  from "./store"

const initValue = {
    addOrEdit: 'add',
    editData: {
        
    },
    listData: [
        // {
        //     id: 1,
        //     desc: 'Buy',
        //     amount: 300
        // },
        // {
        //     id: 2,
        //     desc: 'Buy 2',
        //     amount: -400
        // },
    ]
}

function reducer(state = initValue, action) {

    switch (action.type) {
        case 'budget/add': {
            return {
                ...state,
                listData: [
                    ...state.listData,
                    {
                        id: action.id,
                        addType: action.addType,
                        desc: action.desc,
                        amount: action.addType === 'inc' ? action.amount * 1 : action.amount * (-1)
                    }
                ]
            }
        }
        case 'budget/delete': {
            return {
                ...state,
                listData: [
                    ...state.listData.filter((item) => item.id !== action.id)
                ]
            }
        }
        case 'budget/sendEdit': {
            return {
                ...state,
                addOrEdit: action.addOrEdit,
                editData: {
                    id: action.id,
                    desc: action.desc,
                    amount: action.amount,
                    addType: action.addType
                },
            }
        }
        case 'budget/submitEdit': {
            return {
                ...state,
                addOrEdit: action.addOrEdit,
                listData: [
                    ...state.listData.map((item) => {
                        if (item.id === action.id) {
                            item.desc = action.desc 
                            item.addType = action.addType
                            item.amount = action.addType === 'inc' ? action.amount * 1 : action.amount * (-1)
                        }
                        return item
                    })
                ]  
            }
        }
        
        default: return state
    }
}



export default reducer