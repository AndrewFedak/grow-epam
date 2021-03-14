import {goalStatuses, labels, moreActions} from './constants';

const generateNewGoal = ({groupOrder, listOrder, title, categoryId}) => ({
    title,
    categoryId,
    groupOrder,
    listOrder,
    actionItems: [],
    label: labels[3],
    status: goalStatuses[0],
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
            if(goal.id !== +payload.goalId) return goal
            return {
                ...goal,
                [propName]: payload[propName]
            }
            
        })
    };
};

const getGoalHeaderConfig = (goal, actions) => {
    const {label, status} = goal;
    return [
        {
            selectLabel: 'labelSelect',
            selectHeader: ' ',
            backgroundColor: label.backgroundColor,
            options: labels,
            className: 'labels',
            type: 'multiselect'
        },
        {
            selectLabel: 'statusSelect',
            selectHeader: status.optionName.toUpperCase(),
            backgroundColor: status.backgroundColor,
            options: goalStatuses,
            className: 'status',
            type: 'select'
        },
        {
            selectLabel: 'moreActions',
            selectHeader: ':',
            backgroundColor: 'transparent',
            options: moreActions,
            className: 'edit',
            type: 'menu'
        }
    ].map((select) => ({...select, onAction: actions[select.selectLabel]}))
}

export {
    generateNewGoal,
    toggleCollapseCategory,
    getGoalHeaderConfig,
    changeGoalProperty,
    generateNewCriteria
}