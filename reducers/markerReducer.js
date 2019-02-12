import { GET_MARKERS, ADD_MARKER } from '../actions/types';

const initialState = {
	markers: []
}

export default function markerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MARKERS:
      return {
        ...state,
        markers: action.payload
      };
    case ADD_MARKER:
      console.log('markerToAdd', action.payload);
      return {
        ...state,
        markerToAdd: action.payload
      }
    default:
      return state;
  }
}



// export const GET_REPOS = 'my-awesome-app/repos/LOAD';
// export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
// export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

// export default function reducer(state = { repos: [] }, action) {
//   switch (action.type) {
//     case GET_REPOS:
//       return { ...state, loading: true };
//     case GET_REPOS_SUCCESS:
//       return { ...state, loading: false, repos: action.payload.data };
//     case GET_REPOS_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: 'Error while fetching repositories'
//       };
//     default:
//       return state;
//   }
// }

// export function listRepos(user) {
//   return {
//     type: GET_REPOS,
//     payload: {
//       request: {
//         url: `/users/${user}/repos`
//       }
//     }
//   };
// }