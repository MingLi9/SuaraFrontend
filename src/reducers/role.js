const roleReducer = (state, action) => {
    switch(action.type){
        case 'Admin':
            return "Admin";
        case 'Creator':
            return "Creator";
        case 'User':
            return "User";
        case 'resetRole':
            return "";
        default:
            return "";
    }
}

export default roleReducer;