export const initialState = {
    user:null
}
const reducer = (state,action)=>{
console.log(action);
switch(action.type){
    case "LOGIn":
    return{
        user:action.user
    }
    default:return state
}
}
export default reducer