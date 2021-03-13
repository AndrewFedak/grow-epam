import {actionConstants} from './constants';
import {appendNewGoal, toggleCollapseCategory, changeGoalProperty} from './helper';

const initialState = {
    categories: [
        {
            categoryName: 'Unsorted',
            isCollapsed: true,
            goals: [],
            id: Date.now()
        }
    ],
}

const GoalCategoriesReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionConstants.CREATE_GOAL:
            return {
                ...state,
                categories: appendNewGoal(state.categories, payload)
            };
        case actionConstants.TOGGLE_COLLAPSE_CATEGORY:
            return toggleCollapseCategory(state, payload)
        case actionConstants.CHANGE_GOAL_STATUS:
            return changeGoalProperty(state, payload, 'status')
        case actionConstants.DELETE_GOAL:
            return {
                ...state,
                categories: state.categories.map((category) => {
                    if(category.id !== +payload.categoryId) return category;
                    return {
                        ...category,
                        goals: category.goals.filter(goal => goal.id !== +payload.goalId)
                    }
                })
            }
        case actionConstants.RENAME_GOAL:
            return changeGoalProperty(state, payload, 'title')
        case actionConstants.CHANGE_TIMESTAMP:
            return {
                ...state,
                categories: state.categories.map((category) => {
                    if(category.id !== +payload.categoryId) return category;
                    return {
                        ...category,
                        goals: category.goals.map(goal => {
                            if(goal.id !== +payload.goalId) return goal;
                            return {
                                ...goal,
                                goalDetails: {
                                    ...goal.goalDetails,
                                    [payload.name]: [payload.value]
                                }
                            }
                        })
                    }
                })
            }
        default:
            return state
    }
};

export default GoalCategoriesReducer;