//recibe un estado y lo  loguea
export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);

}

//independientemente de los pokemos que lleguen quiero agregar uno nuevo, propio y personalizado.
export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{name:'Rafa'}, ...actionInfo.action.payload];
    const updatedActionInfo = {
        ...actionInfo,
    action: {...actionInfo.action, payload: featured},
};
    next(updatedActionInfo);
};