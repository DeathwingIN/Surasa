import { SAVE_USERS, SAVE_USER, ADD_USER, UPDATE_USER, REMOVE_USER } from "redux/constants/User";

export const setUsers = (payload) => {
  return {
    type: SAVE_USERS,
    payload,
  };
};

export const setCurrentUser = (payload) => {
  return {
    type: SAVE_USER,
    payload,
  };
};

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};

export const removeUser = (payload) => {
  return {
    type: REMOVE_USER,
    payload,
  };
};