import {actionConstants} from './constants';

const toggleAddGoal = () => (dispatch) => dispatch({type: actionConstants.TOGGLE_ADD_GOAL});

const toggleFilters = () => (dispatch) => dispatch({type: actionConstants.TOGGLE_FILTERS});

const changeGoalTitle = (title) => (dispatch) => dispatch({type: actionConstants.CHANGE_GOAL_TITLE, payload: title})

export {
    toggleAddGoal,
    toggleFilters,
    changeGoalTitle
};