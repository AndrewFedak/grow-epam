import {actionConstants} from './constants';
import {appendNewGoal, generateNewGoal, toggleCollapseGoal, toggleCollapseCategory} from './helper';

const initialState = {
    categories: [
        {
            categoryName: 'Unsorted',
            isCollapsed: true,
            goals: [],
            id: Date.now()
        }
    ]
}

const GoalCategoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionConstants.CREATE_GOAL:
            const newGoal = generateNewGoal(action.payload);
            return {
                ...state,
                categories: appendNewGoal(state.categories, newGoal)
            };
        case actionConstants.TOGGLE_COLLAPSE_GOAL:
            return toggleCollapseGoal(state, action.payload)
        case actionConstants.TOGGLE_COLLAPSE_CATEGORY:
            return toggleCollapseCategory(state, action.payload)
        default:
            return state
    }
};

export default GoalCategoriesReducer;