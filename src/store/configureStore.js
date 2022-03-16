import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';
//import reducer  from './bugs';
import reducer  from './projects';

export default function() {
    return configureStore({ reducer })
} 