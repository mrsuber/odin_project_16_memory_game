export const initialState = {
  miss_score:0,
  notmiss_score:0,
  user:null
}
//selctory
export const actionTypes={
  SET_MISS:'SET_MISS',
  SET_SCORE:'SET_SCORE'
};


const reducer = (state,action) =>{
  console.log(action);
  switch (action.type){
    case actionTypes.SET_MISS:
      return{
        ...state,
        miss_score:action.miss_score,
      };
      case actionTypes.SET_SCORE:
        return{
          ...state,
          notmiss_score:action.notmiss_score,
        };
    default:
      return state;
  }
}

export default reducer
