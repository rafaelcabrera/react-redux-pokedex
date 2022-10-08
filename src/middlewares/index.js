//recibe un estado y lo  loguea
export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);

}