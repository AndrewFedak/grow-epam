export const actionConstants = {
    CREATE_GOAL: 'CREATE_GOAL',
    CREATE_CATEGORY: 'CREATE_CATEGORY',
    TOGGLE_COLLAPSE_GOAL: 'TOGGLE_COLLAPSE_GOAL',
    TOGGLE_COLLAPSE_CATEGORY: 'TOGGLE_COLLAPSE_CATEGORY',
    DELETE_CATEGORY: 'DELETE_CATEGORY',
    CHANGE_GOAL_STATUS: 'CHANGE_GOAL_STATUS',
    DELETE_GOAL: 'DELETE_GOAL',
    RENAME_GOAL: 'RENAME_GOAL',
    CHANGE_TIMESTAMP: 'CHANGE_TIMESTAMP',
    RENAME_CRITERIA: 'RENAME_CRITERIA',
    DELETE_CRITERIA: 'DELETE_CRITERIA',
    CREATE_CRITERIA: 'CREATE_CRITERIA',
    TOGGLE_CRITERIA_COMPLETION: 'TOGGLE_CRITERIA_COMPLETION',
    
    ADD_GOAL: 'ADD_GOAL',
    DISCARD_GOAL_CREATION: 'DISCARD_GOAL_CREATION',
    TOGGLE_FILTERS: 'TOGGLE_FILTERS',
    CHANGE_GOAL_TITLE: 'CHANGE_GOAL_TITLE',
    CHANGE_GOAL_CATEGORY: 'CHANGE_GOAL_CATEGORY',
    CHANGE_VIEW: 'CHANGE_VIEW',
}

export const labels = [
   {
    backgroundColor: 'red',
    optionName: 'Label 1'
   },
   {
    backgroundColor: 'yellow',
    optionName: 'Label 2'
   },
   {
    backgroundColor: 'limegreen',
    optionName: 'Label 3'
   }, 
   {
    backgroundColor: 'turquoise',
    optionName: 'Label 4'
   }
];

export const goalStatuses = [
   {
    backgroundColor: 'blue',
    optionName: 'Planned',
    selectedName: 'PLANNED',
    stateLabel: 'planned'
   },
   {
    backgroundColor: 'blue',
    optionName: 'In progress',
    selectedName: 'IN PROGRESS',
    stateLabel: 'inProgress'
   },
   {
    backgroundColor: 'green',
    optionName: 'Done',
    selectedName: 'DONE',
    stateLabel: 'done'
   },
   {
    backgroundColor: 'gray',
    optionName: 'Canceled',
    selectedName: 'CANCELED',
    stateLabel: 'canceled'
   }
];

 export const moreActions = [
   {
    optionName: 'Edit name',
    action: 'EDIT_GOAL_NAME'
   },
   {
    optionName: 'Add action item',
    action: 'ADD_ACTION_ITEM'
   },
   {
    optionName: 'Archive',
    action: 'ARCHIVE_GOAL'
   },
   {
    optionName: 'Delete',
    action: 'DELETE_GOAL'
   }
]