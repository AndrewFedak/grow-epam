import {actionConstants, goalStatuses, labelColors} from './constants';

const generateNewGoal = (title) => ({
    title,
    actionItems: [],
    labelColor: labelColors[3],
    status: goalStatuses['Planned'],
    id: Date.now()
});

const appendNewGoal = (categories, newGoal) => {
    const [categoryName, value] = Object.entries(categories)[0];
    return {
        ...categories,
        [categoryName]: {
            ...categories[categoryName],
            goals: [...value.goals, newGoal],
            isCollapsed: false
        }
    }
}

const initialState = {
    categories: {
        'Unsorted': {
            isCollapsed: true,
            goals: [],
            id: Date.now()
        }
    }
}

const GoalCategoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionConstants.CREATE_GOAL:
            const newGoal = generateNewGoal(action.payload);
            return {
                ...state,
                categories: appendNewGoal(state.categories, newGoal)
            };
        default:
            return state
    }
};

export default GoalCategoriesReducer;