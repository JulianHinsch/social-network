import { REACTIONS, CREATE_REACTION, DELETE_REACTION, setReactions } from '../../actions/reactions.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import apiRoot from '../../../utils/apiRoot';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case CREATE_REACTION: 
            next(apiRequest({ 
                data: action.payload, 
                method: 'POST', 
                url: '/api/reactions', 
                feature: REACTIONS
            }));
            break;
        case DELETE_REACTION:
            next(apiRequest({ 
                method: 'DELETE', 
                url: `/api/reactions/${action.payload.id}`,
                feature: REACTIONS 
            }));
            break;              
        case `${REACTIONS} API_SUCCESS`:
            next(setReactions({
                //books: action.payload.items, normalizeKey: 'id'
            }))
            break; 
        case `${REACTIONS} API_ERROR`:
            next(setReactions({

            }))
            break;
        default:
            break;
    }
}
    