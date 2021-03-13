export const actionConstants = {
    CREATE_GOAL: 'CREATE_GOAL',
    TOGGLE_COLLAPSE_GOAL: 'TOGGLE_COLLAPSE_GOAL',
    TOGGLE_COLLAPSE_CATEGORY: 'TOGGLE_COLLAPSE_CATEGORY',
    CHANGE_GOAL_STATUS: 'CHANGE_GOAL_STATUS',
    DELETE_GOAL: 'DELETE_GOAL',
    RENAME_GOAL: 'RENAME_GOAL',
    CHANGE_TIMESTAMP: 'CHANGE_TIMESTAMP'
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
    optionName: 'Planned'
   },
   {
    backgroundColor: 'blue',
    optionName: 'In progress'
   },
   {
    backgroundColor: 'green',
    optionName: 'Done'
   },
   {
    backgroundColor: 'gray',
    optionName: 'Canceled'
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