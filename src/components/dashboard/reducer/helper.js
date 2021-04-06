import {goalStatuses, labels, moreActions} from './constants';

const generateNewGoal = ({groupOrder, listOrder, title, categoryId}) => ({
    title,
    categoryId,
    groupOrder,
    listOrder,
    actionItems: [],
    label: labels[3],
    modifiers: {
        closed: false,
        done: false
    },
    id: Date.now(),
    goalDetails: {
        start: '',
        deadline: '',
        finish: '',
        successCriteria: [],
        attachments: []
    }
});

const generateNewCriteria = (title) => ({
    title,
    isCompleted: false,
    id: Date.now()
})

const generateNewCategory = (name) => ({
    name,
    isCollapsed: true,
    id: Date.now()
})

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

const changeGoalProperty = (state, payload, propName) => {
    const {goals} = state;
    return {
        ...state,
        goals: goals.map((goal) => {
            if(goal.id === +payload.goalId) {
                goal[propName] = payload[propName]
            }
            return goal
        })
    };
};

const getGoalHeaderConfig = (goal, actions) => {
    const {label, modifiers} = goal;
    return [
        {
            actionsType: 'labelSelect',
            backgroundColor: label.backgroundColor,
            options: labels,
            className: 'labels',
            type: 'multiselect'
        },
        {
            actionsType: 'statusSelect',
            options: goalStatuses,
            selectedOption: goalStatuses.find((option) => modifiers[option.stateLabel]) || goalStatuses[0],
            className: 'status',
            type: 'select'
        },
        {
            actionsType: 'moreActions',
            backgroundColor: 'transparent',
            options: moreActions,
            className: 'menu',
            type: 'menu'
        }
    ].map((select) => ({...select, onAction: actions[select.actionsType]}))
}

export {
    generateNewGoal,
    toggleCollapseCategory,
    getGoalHeaderConfig,
    changeGoalProperty,
    generateNewCriteria,
    generateNewCategory
}