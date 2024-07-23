// apiConstants.js

// export const BASE_URL = "http://192.168.254.102:5000/api/";
export const BASE_URL = 'https://grubworm-full-dory.ngrok-free.app/api/'

// History
export const GET_HISTORY = `${BASE_URL}history/get_history_with_images`;

// Recommendation
export const SCAN_IMAGE = `${BASE_URL}recommendation/skan`;

// Users
export const REGISTER = `${BASE_URL}users/signup`;
export const LOGIN = `${BASE_URL}users/login`;
export const LOGOUT = `${BASE_URL}users/logout`;
export const GET_ONE_USER = `${BASE_URL}users/get_user`;
export const UPDATE_ONE_USER = `${BASE_URL}users/get_user/update_user`;
