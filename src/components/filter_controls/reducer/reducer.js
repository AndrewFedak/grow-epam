import {actionConstants} from './constants';

const initialState = {
    showGoalCreation: false,
    showFilters: false,
    goalCreation: {
        title: '',
        categoryId: null
    },
    viewBy: 'groups'
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
            return initialState;
        case actionConstants.TOGGLE_FILTERS:
            return {
                ...state,
                showGoalCreation: false,
                showFilters: !state.showFilters
            };
        case actionConstants.CHANGE_GOAL_TITLE:
            return {
                ...state,
                goalCreation: {
                    ...state.goalCreation,
                    title: action.payload
                },
            };
        case actionConstants.CHANGE_GOAL_CATEGORY:
            return {
                ...state,
                goalCreation: {
                    ...state.goalCreation,
                    categoryId: action.payload
                },
            };
        case actionConstants.CHANGE_VIEW:
            return {
                ...state,
                viewBy: action.payload
            }
        default:
            return state
    }
};

export default GoalCreationReducer;