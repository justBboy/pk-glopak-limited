import { SET_PAGE } from "./actions"


export const initialState = {
   page: "", 
}


const reducer = (state=initialState, action) => {
    switch (action.type){
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
    }
}

export default reducer