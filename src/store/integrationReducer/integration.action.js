import {INTEGRATIONS_LOADING, INTEGRATIONS_ERROR, INTEGRATIONS_SUCCESS} from './integration.types';
import axios from 'axios';

export const getIngegrationAPI =  ()=> async (dispatch)=> {
  dispatch({type: INTEGRATIONS_LOADING});
  try {
    const res = await axios.get('http://localhost:8080/integrations');
    dispatch({type: INTEGRATIONS_SUCCESS, payload: res.data});
  } catch {
    dispatch({type: INTEGRATIONS_ERROR});
  }
};

export const queryIngegrationAPI =  (query)=> async (dispatch)=> {
  dispatch({type: INTEGRATIONS_LOADING});
  try {
    const res = await axios.get(`http://localhost:8080/integrations?q=${query}`);
    dispatch({type: INTEGRATIONS_SUCCESS, payload: res.data});
  } catch {
    dispatch({type: INTEGRATIONS_ERROR});
  }
};



