import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import all reducers here 
import { footerReducer } from './footerReducer/footer.reducer';
import { integrationsReducer } from './integrationReducer/integration.reducer';

const rootReducer = combineReducers({    
    integration: integrationsReducer,
    footer: footerReducer,    
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
