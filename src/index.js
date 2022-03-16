
import configureStore from './store/configureStore';

import * as bugActions  from './store/bugs';
import * as projectActions from './store/projects'

const store = configureStore();

store.subscribe(() => {
    console.log("Store Changed: ", store.getState())
})

store.dispatch(bugActions.bugAdded({ description: 'Bug1' }));
store.dispatch(bugActions.bugResolved({ id: 1 })); 

store.dispatch(projectActions.projectAdded({ description: 'Project1' }));
store.dispatch(projectActions.projectCompleted({ id: 1 })); 
