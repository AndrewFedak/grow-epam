import {actionConstants} from './constants';

const addGoal = () => (dispatch) => dispatch({type: actionConstants.ADD_GOAL});

const discardGoalCreation = () => (dispatch) => dispatch({type: actionConstants.DISCARD_GOAL_CREATION});

const toggleFilters = () => (dispatch) => dispatch({type: actionConstants.TOGGLE_FILTERS});

const changeGoalTitle = (title) => (dispatch) => dispatch({type: actionConstants.CHANGE_GOAL_TITLE, payload: title})

export {
    addGoal,
    discardGoalCreation,
    toggleFilters,
    changeGoalTitle
};