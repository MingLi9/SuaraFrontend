const authReducer = (state, action) => {
    switch(action.type){
        case 'ACCESSTOKEN':
            return "Bearer " + action.payload;
        case 'RESETACCESSTOKEN':
            return "";
        default:
            return "ABC";
    }
}

export default authReducer;