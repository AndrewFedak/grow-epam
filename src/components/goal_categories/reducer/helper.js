import {goalStatuses, labels, moreActions} from './constants';

const generateNewGoal = (title) => ({
    title,
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

const appendNewGoal = (categories, title) => {
    const firstCategory = categories[0];
    return [
        {
            ...firstCategory,
            goals: [...firstCategory.goals, generateNewGoal(title)],
            isCollapsed: false
        },
        ...categories.slice(1)
    ]
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

const changeGoalProperty = (state, payload, propName) => {
    return {
        ...state,
        categories: state.categories.map((category) => {
            if(category.id !== +payload.categoryId) return category;
            return {
                ...category,
                goals: category.goals.map((goal) => {
                    if(goal.id !== +payload.goalId) return goal
                    return {
                        ...goal,
                        [propName]: payload[propName]
                    }
                    
                })
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
    appendNewGoal,
    toggleCollapseCategory,
    getGoalHeaderConfig,
    changeGoalProperty
}