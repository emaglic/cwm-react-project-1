
import configureStore from './store/configureStore';

import * as actions  from './store/bugs';

const store = configureStore();

console.log('store: ', store)

store.subscribe(() => {
    console.log("Store Changed: ", store.getState())
})

store.dispatch(actions.bugAdded({ description: 'Bug1' }));

store.dispatch(actions.bugResolved({ id: 1 }));

console.log(store.getState())