import {actionConstants} from './constants';

const toggleCollapseCategory = (categoryId) => ({type: actionConstants.TOGGLE_COLLAPSE_CATEGORY, payload: categoryId})

const deleteCategory = (categoryId) => ({type: actionConstants.DELETE_CATEGORY, payload: categoryId})

const changeGoalStatus = (goalId, status) => ({type: actionConstants.CHANGE_GOAL_STATUS, payload: {goalId, status}})

const deleteGoal = (goalId) => ({type: actionConstants.DELETE_GOAL, payload: {goalId}})

const renameGoal = (goalId, title) => ({type: actionConstants.RENAME_GOAL, payload: {goalId, title}})

const changeTimestamp = (goalId, name, value) => ({type: actionConstants.CHANGE_TIMESTAMP, payload: {goalId, name, value}})

const renameCriteria = (goalId, criteriaId, title) => ({type: actionConstants.RENAME_CRITERIA, payload: {goalId, criteriaId, title}})

const deleteCriteria = (goalId, criteriaId) => ({type: actionConstants.DELETE_CRITERIA, payload: {goalId, criteriaId}})

const createCriteria = (goalId, title) => ({type: actionConstants.CREATE_CRITERIA, payload: {goalId, title}})

const toggleCriteriaСompletion = (goalId, criteriaId) => ({type: actionConstants.TOGGLE_CRITERIA_COMPLETION, payload: {goalId, criteriaId}})

const addGoal = () => ({type: actionConstants.ADD_GOAL});

const discardGoalCreation = () => ({type: actionConstants.DISCARD_GOAL_CREATION});

const toggleFilters = () => ({type: actionConstants.TOGGLE_FILTERS});

const changeGoalTitle = (title) => ({type: actionConstants.CHANGE_GOAL_TITLE, payload: title})

const changeGoalCategory = (categoryId) => ({type: actionConstants.CHANGE_GOAL_CATEGORY, payload: +categoryId})

const createGoal = (title, categoryId) => ({type: actionConstants.CREATE_GOAL, payload: {title, categoryId}});

const changeView = (viewBy) => ({type: actionConstants.CHANGE_VIEW, payload: viewBy})

const createCategory = (name) => ({type: actionConstants.CREATE_CATEGORY, payload: name})

export {
    renameGoal,
    deleteGoal,
    toggleCollapseCategory,
    changeGoalStatus,
    changeTimestamp,
    renameCriteria,
    deleteCriteria,
    createCriteria,
    toggleCriteriaСompletion,
    addGoal,
    discardGoalCreation,
    toggleFilters,
    changeGoalTitle,
    changeGoalCategory,
    createGoal,
    changeView,
    createCategory,
    deleteCategory
}