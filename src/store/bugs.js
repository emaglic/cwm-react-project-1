import { createAction, createReducer } from '@reduxjs/toolkit'

let lastId = 0;

export const bugAdded = createAction('bugAdded');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');


export default createReducer([], {
    // key: value
    // actions: functions
    [bugAdded.type]: (bugs, action) => {
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },
    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        bugs[index].resolved = true;
    },
    [bugRemoved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        bugs.splice(index, 1);
    }
})
