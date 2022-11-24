import {CHANGE_USER} from './userType';

export function changeUser(payload) {
    return {
      type: CHANGE_USER,
      payload
    };
  }