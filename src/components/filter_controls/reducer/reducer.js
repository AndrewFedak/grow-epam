import {actionConstants} from './constants';

const initialState = {
    showGoalCreation: false,
    showFilters: false,
    goalTitle: ''
};

const GoalCreationReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionConstants.ADD_GOAL:
            return {
                ...state,
                showFilters: false,
                showGoalCreation: true
            };
        case actionConstants.DISCARD_GOAL_CREATION:
            return {
                ...state,
                goalTitle: '',
                showGoalCreation: false
            };
        case actionConstants.TOGGLE_FILTERS:
            return {
                ...state,
                showGoalCreation: false,
                showFilters: !state.showFilters
            };
        case actionConstants.CHANGE_GOAL_TITLE:
            return {
                ...state,
                goalTitle: action.payload
            };
        default:
            return state
    }
};

export default GoalCreationReducer;