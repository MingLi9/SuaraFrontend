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