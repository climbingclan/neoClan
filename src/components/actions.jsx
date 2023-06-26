export const setSelectedRow = (row) => ({
    type: 'SET_SELECTED_ROW',
    payload: row,
});

export const setGridData = (data) => ({
    type: 'SET_GRID_DATA',
    payload: data,
});

export const setAPIData = (apiData) => ({
    type: 'SET_API_DATA',
    payload: apiData,
});
