import {actionConstants} from './constants';
import {generateNewGoal, toggleCollapseCategory, changeGoalProperty, generateNewCriteria, generateNewCategory} from './helper';

const initialState = {
    categories: [],
    goals: []
}

const initialModifiresState = {
    closed: false,
    done: false
};

const GoalCategoriesReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionConstants.CREATE_GOAL:
            const groupOrder = state.goals.filter(goal => goal.categoryId === +payload.categoryId).length;
            const listOrder = state.goals.length + 1;
            return {
                ...state,
                goals: [...state.goals, generateNewGoal({...payload, groupOrder, listOrder})],
                categories: state.categories.map(category => {
                    if(category.id !== +payload.categoryId) return category;
                    return {...category, isCollapsed: false}
                })
            };
        case actionConstants.TOGGLE_COLLAPSE_CATEGORY:
            return toggleCollapseCategory(state, payload)
        case actionConstants.CHANGE_GOAL_STATUS:
            return {
                ...state,
                goals: state.goals.map((goal) => {
                    if(goal.id !== +payload.goalId) return goal
                    return {
                        ...goal,
                        modifiers: {
                            ...initialModifiresState,
                            [payload.status]: true
                        }
                    }
                    
                })
            };
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
        case actionConstants.CREATE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, generateNewCategory(payload)]
            }
        default:
            return state
    }
};

export default GoalCategoriesReducer;