import {actionConstants} from './constants';
import {actionConstants as filterActionConstants} from '../../filter_controls/reducer/constants';

const createGoal = () => (dispatch, getState) => {
    dispatch({type: actionConstants.CREATE_GOAL, payload: getState().filterControls.goalTitle});
    dispatch({type: filterActionConstants.DISCARD_GOAL_CREATION});
};

const toggleCollapseCategory = (categoryId) => (dispatch) => {
    dispatch({type: actionConstants.TOGGLE_COLLAPSE_CATEGORY, payload: categoryId})
}

const changeGoalStatus = (categoryId, goalId, status) => (dispatch) => {
    dispatch({type: actionConstants.CHANGE_GOAL_STATUS, payload: {categoryId, goalId, status}})
};

const deleteGoal = (categoryId, goalId) => (dispatch) => {
    dispatch({type: actionConstants.DELETE_GOAL, payload: {categoryId, goalId}})
}

const renameGoal = (categoryId, goalId, title) => (dispatch) => {
    dispatch({type: actionConstants.RENAME_GOAL, payload: {categoryId, goalId, title}})
}

const changeTimestamp = (categoryId, goalId, name, value) => (dispatch) => {
    dispatch({type: actionConstants.CHANGE_TIMESTAMP, payload: {categoryId, goalId, name, value}})
}

export {
    createGoal,
    renameGoal,
    deleteGoal,
    toggleCollapseCategory,
    changeGoalStatus,
    changeTimestamp
}