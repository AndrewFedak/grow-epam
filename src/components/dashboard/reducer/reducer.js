import {actionConstants} from './constants';
import {generateNewGoal, toggleCollapseCategory, changeGoalProperty, generateNewCriteria, generateNewCategory} from './helper';

const initialModifiersState = {
    closed: false,
    done: false
};

const filterControlsInitialState = {
    showGoalCreation: false,
    showFilters: false,
    goalCreation: {
        title: '',
        categoryId: null,
    }
}

const goalCategoriesState = {
    categories: [],
    goals: [],
    viewBy: 'groups'
}

const initialState = {
    ...filterControlsInitialState,
    ...goalCategoriesState
}

const DashboardReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionConstants.CREATE_GOAL:
            const groupOrder = state.goals.filter(goal => goal.categoryId === +payload.categoryId).length;
            const listOrder = state.goals.length + 1;
            return {
                ...state,
                goals: [...state.goals, generateNewGoal({...payload, groupOrder, listOrder})],
                categories: state.categories.map(category => {
                    if(category.id === +payload.categoryId) {
                        category.isCollapsed = false
                    }
                    return category;
                }),
                ...filterControlsInitialState
            };
        case actionConstants.TOGGLE_COLLAPSE_CATEGORY:
            return toggleCollapseCategory(state, payload)
        case actionConstants.DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter((category) => category.id !== payload)
            }
        case actionConstants.CHANGE_GOAL_STATUS:
            return {
                ...state,
                goals: state.goals.map((goal) => {
                    if(goal.id === +payload.goalId) {
                        goal = Object.assign({}, goal);
                        goal.modifiers = {
                            ...initialModifiersState,
                            [payload.status]: true
                        }
                    }
                    return goal;
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
                    if(goal.id === +payload.goalId) {
                        goal.goalDetails[payload.name] = [payload.value]
                    }
                    return goal;
                })
            }
        case actionConstants.RENAME_CRITERIA:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.id === +payload.goalId) {
                        goal = Object.assign({}, goal);
                        goal.goalDetails.successCriteria = goal.goalDetails.successCriteria.map(criteria => {
                            if(criteria.id === +payload.criteriaId) {
                                criteria.title = payload.title
                            }
                            return criteria;
                        })
                    }
                    return goal
                })
            }
        case actionConstants.DELETE_CRITERIA:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.id === +payload.goalId) {
                        goal = Object.assign({}, goal);
                        goal.goalDetails.successCriteria = goal.goalDetails.successCriteria.filter(criteria => criteria.id !== +payload.criteriaId);
                    }
                    return goal;
                })
            }
        case actionConstants.CREATE_CRITERIA:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.id === +payload.goalId) {
                        goal.goalDetails.successCriteria = [...goal.goalDetails.successCriteria, generateNewCriteria(payload.title)]
                    }
                    return goal;
                })
            }
        case actionConstants.TOGGLE_CRITERIA_COMPLETION:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.id === +payload.goalId) {
                        goal = Object.assign({}, goal);
                        goal.goalDetails.successCriteria = goal.goalDetails.successCriteria.map(criteria => {
                            if(criteria.id !== +payload.criteriaId) return criteria;
                            return {
                                ...criteria,
                                isCompleted: !criteria.isCompleted
                            }
                        })
                    }
                    return goal;
                })
            }
        case actionConstants.CREATE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, generateNewCategory(payload)]
            }
        case actionConstants.ADD_GOAL:
            return {
                ...state,
                showFilters: false,
                showGoalCreation: true
            };
        case actionConstants.DISCARD_GOAL_CREATION:
            return {
                ...state,
                ...filterControlsInitialState
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

export default DashboardReducer;