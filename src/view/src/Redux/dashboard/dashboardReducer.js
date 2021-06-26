import { 
    UPDATE_SCHEDULE_REQUEST,
    UPDATE_SCHEDULE_SUCCESS,
    UPDATE_SCHEDULE_ERROR, 
    HANDLE_SCHEDULE
} from "./dashboardTypes"

const initialState = {
    schedule: null,
    error: null
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        case HANDLE_SCHEDULE:
            return {
                ...state,
                schedule: action.payload.schedule
            }
            
        case UPDATE_SCHEDULE_REQUEST:
            return {
                ...state,
                error: null
            } 

        case UPDATE_SCHEDULE_SUCCESS:
            return {
                ...state,
                error: null,
            }
        
        case UPDATE_SCHEDULE_ERROR:
            return {
                ...state,
                error: action.payload.error
            }

        default:
            return state
    }
}

export default dashboardReducer