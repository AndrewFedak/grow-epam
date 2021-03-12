import {actionConstants} from './constants';
import {actionConstants as filterActionConstants} from '../../filter_controls/reducer/constants';

const createGoal = () => (dispatch, getState) => {
    dispatch({type: actionConstants.CREATE_GOAL, payload: getState().filterControls.goalTitle});
    dispatch({type: filterActionConstants.TOGGLE_ADD_GOAL});
};

export {
    createGoal
}