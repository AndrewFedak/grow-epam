import {goalStatuses, labels} from './constants';

const generateNewGoal = (title) => ({
    title,
    actionItems: [],
    labelColor: labels[3],
    status: goalStatuses[0],
    id: Date.now(),
    isCollapsed: true,
    goalDetails: {
        start: '',
        deadline: '',
        finish: '',
        successCriteria: [],
        attachments: []
    }
});

const appendNewGoal = (categories, newGoal) => {
    const firstCategory = categories[0];
    return [
        {
            ...firstCategory,
            goals: [...firstCategory.goals, newGoal],
            isCollapsed: false
        },
        ...categories.slice(1)
    ]
}

const toggleCollapseGoal = (state, {categoryId, goalId}) => {
    const categoryIdx = state.categories.findIndex(category => category.id === +categoryId);
    const goalIdx = state.categories[categoryIdx].goals.findIndex(goal => goal.id === +goalId);
    return {
        ...state,
        categories: [
            ...state.categories.slice(0, categoryIdx),
            {
                ...state.categories[categoryIdx],
                goals: [
                    ...state.categories[categoryIdx].goals.slice(0, goalIdx),
                    {
                        ...state.categories[categoryIdx].goals[goalIdx],
                        isCollapsed: !state.categories[categoryIdx].goals[goalIdx].isCollapsed
                    },
                    ...state.categories[categoryIdx].goals.slice(goalIdx+1),
                ]
            },
            ...state.categories.slice(categoryIdx+1),
        ]
    };
}

const toggleCollapseCategory = (state, categoryId) => {
    const categoryIdx = state.categories.findIndex(category => category.id === +categoryId);
    return {
        ...state,
        categories: [
            ...state.categories.slice(0, categoryIdx),
            {
                ...state.categories[categoryIdx],
                isCollapsed: !state.categories[categoryIdx].isCollapsed
            },
            ...state.categories.slice(categoryIdx+1),
        ]
    };
}

export {
    generateNewGoal,
    appendNewGoal,
    toggleCollapseGoal,
    toggleCollapseCategory
}