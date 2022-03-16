import { createSlice, createAction, createReducer } from '@reduxjs/toolkit'

let lastId = 0;

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (projects, action) => {
            projects.push({
                id: ++lastId,
                description: action.payload.description,
                complete: false
            })
        },
        projectCompleted: (projects, action) => {
            let index = projects.findIndex(project => project.id === action.payload.id);
            projects[index].complete = true;
        },
        projectRemoved: (projects, action) => {
            let index = projects.findIndex(project => project.id === action.payload.id)
            projects.slice(index, 1);
        }
    }
})

export const { projectAdded, projectCompleted, projectRemoved } = slice.actions;
export default slice.reducer