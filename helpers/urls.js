// apiConstants.js

// export const BASE_URL = "http://192.168.254.102:5000/api/";
// export const BASE_URL = 'https://grubworm-full-dory.ngrok-free.app/api/'
export const BASE_URL = 'https://softies-backend-production.up.railway.app/api/';

// History
export const GET_HISTORY = `${BASE_URL}history/get_history_with_images`;
export const GET_HOME_DATA = `${BASE_URL}history/get_latest_home_data`;

// Recommendation
export const SCAN_IMAGE = `${BASE_URL}recommendation/skan`;
export const GET_TYPES = `${BASE_URL}recommendation/get_types`;

// Users
export const REGISTER = `${BASE_URL}users/signup`;
export const LOGIN = `${BASE_URL}users/login`;
export const LOGOUT = `${BASE_URL}users/logout`;
export const GET_ONE_USER = `${BASE_URL}users/get_user`;
export const UPDATE_ONE_USER = `${BASE_URL}users/update_user`;

// Email
export const FORGOT_PASSWORD = `${BASE_URL}email/forgot_password`;
// export const RESET_PASSWORD = `${BASE_URL}email/reset_password`;
