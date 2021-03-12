import {actionConstants} from './constants';
import {actionConstants as filterActionConstants} from '../../filter_controls/reducer/constants';

const createGoal = () => (dispatch, getState) => {
    dispatch({type: actionConstants.CREATE_GOAL, payload: getState().filterControls.goalTitle});
    dispatch({type: filterActionConstants.DISCARD_GOAL_CREATION});
};

const toggleCollapseGoal = (categoryId, goalId) => (dispatch) => {
    dispatch({type: actionConstants.TOGGLE_COLLAPSE_GOAL, payload: {categoryId, goalId}})
}

const toggleCollapseCategory = (categoryId) => (dispatch) => {
    dispatch({type: actionConstants.TOGGLE_COLLAPSE_CATEGORY, payload: categoryId})
}

export {
    createGoal,
    toggleCollapseGoal,
    toggleCollapseCategory
}