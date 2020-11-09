export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after developing........
    //token: "BQCC3hytI8o0me8VtL69FSPhl1eOD1P69175vcFho76Kzo1QMV1xr7WnGB-hlssqirqBN2FTkpiPa_wbmAlvcNIxmTyBqwt0iU5_yOfiTQfn9KiO2-urXc9CFK5SOF9tFZaf-r-3L9K-MxmxV3dJmkNkhBk7uJY_hu5W8KOB0PgfbQTK_u7f",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;