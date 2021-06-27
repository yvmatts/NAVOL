import axios from "axios"
import {
    HANDLE_SCHEDULE, 
    UPDATE_SCHEDULE_REQUEST,
    UPDATE_SCHEDULE_SUCCESS,
    UPDATE_SCHEDULE_ERROR 
} from "./dashboardTypes"

export const handleSchedule = (schedule) => {
    return {
        type: HANDLE_SCHEDULE,
        payload: {
            schedule: schedule
        }
    }
}

export const updateScheduleRequest = () => {
    return {
        type: UPDATE_SCHEDULE_REQUEST
    }
}

export const updateScheduleSuccess = () => {
    return {
        type: UPDATE_SCHEDULE_SUCCESS
    }
}

export const updateScheduleError = (error) => {
    return {
        type: UPDATE_SCHEDULE_ERROR,
        payload: {
            error: error
        }
    }
}

export const updateSchedule = (schedule) => {
    return (dispatch) => {
        dispatch(updateScheduleRequest())
        axios.post('http://localhost:8000/dashboard/schedule', {
            schedule: JSON.stringify(schedule)
        })
        .then(function(response){
            dispatch(updateScheduleSuccess())
        })
        .catch(function(error){
            dispatch(updateScheduleError(error))
        })
    }
}

export const fetchSchedule = () => {
    return (dispatch) => {
        dispatch(updateScheduleRequest())
        axios.get('http://localhost:8000/dashboard/schedule')
        .then(function(response){
            if(response.data.error) {
                dispatch(updateScheduleError(response.data.error))
            } else {
                try {
                    dispatch(handleSchedule(JSON.parse(response.data.schedule)))
                } catch {
                    dispatch(handleSchedule([]))
                }
                dispatch(updateScheduleSuccess())
            }
        })
        .catch(function(error){
            dispatch(updateScheduleError(error))
        })
    }
}