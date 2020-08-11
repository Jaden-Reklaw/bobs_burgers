//Used to store Employees returned from the server
const Employees = (state = [], action) => {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return action.payload;
        default:
            return state;
    }
}

export default Employees;