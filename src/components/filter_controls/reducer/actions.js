import {actionConstants} from './constants';

const addGoal = () => (dispatch) => dispatch({type: actionConstants.ADD_GOAL});

const discardGoalCreation = () => (dispatch) => dispatch({type: actionConstants.DISCARD_GOAL_CREATION});

const toggleFilters = () => (dispatch) => dispatch({type: actionConstants.TOGGLE_FILTERS});

const changeGoalTitle = (title) => (dispatch) => dispatch({type: actionConstants.CHANGE_GOAL_TITLE, payload: title})

const changeGoalCategory = (categoryId) => (dispatch) => dispatch({type: actionConstants.CHANGE_GOAL_CATEGORY, payload: +categoryId})

const createGoal = (title, categoryId) => (dispatch) => {
    dispatch({type: actionConstants.CREATE_GOAL, payload: {title, categoryId}});
    dispatch({type: actionConstants.DISCARD_GOAL_CREATION});
};

export {
    addGoal,
    discardGoalCreation,
    toggleFilters,
    changeGoalTitle,
    changeGoalCategory,
    createGoal
};