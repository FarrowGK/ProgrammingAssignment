import { GETUSERS } from './actionTypes';

const initialState = {
  users: {}
};

export const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GETUSERS:

    let data = {};

    async function getUsersFromApi() {
      try {
        let response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        let responseJson = await response.json();

        data = responseJson
        return data;
        return responseJson;
      } catch (error) {
        console.error(error);
      }
    }
    return {...state, users: data}

    default:
     return state;

  }
}
