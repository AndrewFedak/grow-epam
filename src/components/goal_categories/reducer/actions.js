import {actionConstants} from './constants';

const toggleCollapseCategory = (categoryId) => (dispatch) => {
    dispatch({type: actionConstants.TOGGLE_COLLAPSE_CATEGORY, payload: categoryId})
}

const changeGoalStatus = (goalId, status) => (dispatch) => {
    dispatch({type: actionConstants.CHANGE_GOAL_STATUS, payload: {goalId, status}})
};

const deleteGoal = (goalId) => (dispatch) => {
    dispatch({type: actionConstants.DELETE_GOAL, payload: {goalId}})
}

const renameGoal = (goalId, title) => (dispatch) => {
    dispatch({type: actionConstants.RENAME_GOAL, payload: {goalId, title}})
}

const changeTimestamp = (goalId, name, value) => (dispatch) => {
    dispatch({type: actionConstants.CHANGE_TIMESTAMP, payload: {goalId, name, value}})
}

const renameCriteria = (goalId, criteriaId, title) => (dispatch) => {
    dispatch({type: actionConstants.RENAME_CRITERIA, payload: {goalId, criteriaId, title}})
}

const deleteCriteria = (goalId, criteriaId) => (dispatch) => {
    dispatch({type: actionConstants.DELETE_CRITERIA, payload: {goalId, criteriaId}})
}

const createCriteria = (goalId, title) => (dispatch) => {
    dispatch({type: actionConstants.CREATE_CRITERIA, payload: {goalId, title}})
}

const toggleCriteriaСompletion = (goalId, criteriaId) => (dispatch) => {
    dispatch({type: actionConstants.TOGGLE_CRITERIA_COMPLETION, payload: {goalId, criteriaId}})
}

export {
    renameGoal,
    deleteGoal,
    toggleCollapseCategory,
    changeGoalStatus,
    changeTimestamp,
    renameCriteria,
    deleteCriteria,
    createCriteria,
    toggleCriteriaСompletion
}