export const setAccessToken = (token) => {
    return {
        type: 'ACCESSTOKEN',
        payload: token
    };
};

export const resetAccessToken = () => {
    return {
        type: 'RESETACCESSTOKEN'
    }
}

export const setRole = (role) => {
    return {
        type: role,
        payload: role
    }
}

export const resetRole = () => {
    return{
        type: 'resetRole'
    }
}