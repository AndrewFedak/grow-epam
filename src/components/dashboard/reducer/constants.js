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
    name: 'Label 1'
   },
   {
    backgroundColor: 'yellow',
    name: 'Label 2'
   },
   {
    backgroundColor: 'limegreen',
    name: 'Label 3'
   }, 
   {
    backgroundColor: 'turquoise',
    name: 'Label 4'
   }
];

export const goalStatuses = [
   {
    className: 'planned',
    name: 'Planned',
    stateLabel: 'planned'
   },
   {
    className: 'in-progress',
    name: 'In progress',
    stateLabel: 'inProgress'
   },
   {
    className: 'done',
    name: 'Done',
    stateLabel: 'done'
   },
   {
    className: 'canceled',
    name: 'Canceled',
    stateLabel: 'canceled'
   }
];

 export const moreActions = [
   {
    name: 'Edit name',
    action: 'EDIT_GOAL_NAME'
   },
   {
    name: 'Add action item',
    action: 'ADD_ACTION_ITEM'
   },
   {
    name: 'Archive',
    action: 'ARCHIVE_GOAL'
   },
   {
    name: 'Delete',
    action: 'DELETE_GOAL'
   }
]

export const viewByOptions = [
   {
       name: 'Free list',
       stateLabel: 'freeList'
   },
   {
       name: 'Groups',
       stateLabel: 'groups'
   }
]