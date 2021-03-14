import {actionConstants} from './constants';
import {generateNewGoal, toggleCollapseCategory, changeGoalProperty, generateNewCriteria} from './helper';

const initialState = {
    categories: [
        {
            name: 'Unsorted',
            isCollapsed: true,
            id: Date.now()
        },
        {
            name: 'React.js',
            isCollapsed: true,
            id: Date.now()+1
        }
    ],
    goals: [],
    viewBy: 'groups'
}

const GoalCategoriesReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionConstants.CREATE_GOAL:
            const groupOrder = state.goals.filter(goal => goal.categoryId === +payload.categoryId).length;
            const listOrder = state.goals.length + 1;
            return {
                ...state,
                goals: [...state.goals, generateNewGoal({...payload, groupOrder, listOrder})], //payload = {categoryId, title}
                categories: state.categories.map(category => {
                    if(category.id !== +payload.categoryId) return category;
                    return {...category, isCollapsed: false}
                })
            };
        case actionConstants.TOGGLE_COLLAPSE_CATEGORY:
            return toggleCollapseCategory(state, payload)
        case actionConstants.CHANGE_GOAL_STATUS:
            return changeGoalProperty(state, payload, 'status')
        case actionConstants.DELETE_GOAL:
            return {
                ...state,
                goals: state.goals.filter(goal => goal.id !== +payload.goalId)
            }
        case actionConstants.RENAME_GOAL:
            return changeGoalProperty(state, payload, 'title')
        case actionConstants.CHANGE_TIMESTAMP:
            return {
                ...state,
                goals: state.goals.map(goal => {
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
        case actionConstants.RENAME_CRITERIA:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.id !== +payload.goalId) return goal;
                    return {
                        ...goal,
                        goalDetails: {
                            ...goal.goalDetails,
                            successCriteria: goal.goalDetails.successCriteria.map(criteria => {
                                if(criteria.id !== +payload.criteriaId) return criteria;
                                return {
                                    ...criteria,
                                    title: payload.title
                                }
                            })
                        }
                    }
                })
            }
        case actionConstants.DELETE_CRITERIA:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.id !== +payload.goalId) return goal;
                    return {
                        ...goal,
                        goalDetails: {
                            ...goal.goalDetails,
                            successCriteria: goal.goalDetails.successCriteria.filter(criteria => criteria.id !== +payload.criteriaId)
                        }
                    }
                })
            }
        case actionConstants.CREATE_CRITERIA:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.id !== +payload.goalId) return goal;
                    return {
                        ...goal,
                        goalDetails: {
                            ...goal.goalDetails,
                            successCriteria: [...goal.goalDetails.successCriteria, generateNewCriteria(payload.title)]
                        }
                    }
                })
            }
        case actionConstants.TOGGLE_CRITERIA_COMPLETION:
            console.log('toggled')
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.id !== +payload.goalId) return goal;
                    return {
                        ...goal,
                        goalDetails: {
                            ...goal.goalDetails,
                            successCriteria: goal.goalDetails.successCriteria.map(criteria => {
                                if(criteria.id !== +payload.criteriaId) return criteria;
                                return {
                                    ...criteria,
                                    isCompleted: !criteria.isCompleted
                                }
                            })
                        }
                    }
                })
            }
        default:
            return state
    }
};

export default GoalCategoriesReducer;