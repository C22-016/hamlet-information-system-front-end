import CONFIG from './config';

const API_ENDPOINT = {
  LOGIN: `${CONFIG.BASE_URL}/login`,
  LOGOUT: `${CONFIG.BASE_URL}/logout`,
  ME: `${CONFIG.BASE_URL}/me`,
  ARCHIVES: `${CONFIG.BASE_URL}/archives`,
  GET_ARCHIVE_BY_ID: (id) => `${CONFIG.BASE_URL}/archives/${id}`,
  UPDATE_ARCHIVE_BY_ID: (id) => `${CONFIG.BASE_URL}/archives/${id}`,
  DELETE_ARCHIVE: (id) => `${CONFIG.BASE_URL}/archives/${id}`,
  BROADCASTS: `${CONFIG.BASE_URL}/broadcast`,
  DELETE_ALL_BROADCASTS: `${CONFIG.BASE_URL}/broadcast`,
  DELETE_BROADCAST: (id) => `${CONFIG.BASE_URL}/broadcast/${id}`,
  EVENTS: `${CONFIG.BASE_URL}/events`,
  GET_EVENT_BY_ID: (id) => `${CONFIG.BASE_URL}/events/${id}`,
  UPDATE_EVENT_BY_ID: (id) => `${CONFIG.BASE_URL}/events/${id}`,
  DELETE_EVENT: (id) => `${CONFIG.BASE_URL}/events/${id}`,
  MESSAGES: `${CONFIG.BASE_URL}/message`,
  GET_MESSAGE_BY_ID: (id) => `${CONFIG.BASE_URL}/message/${id}`,
  UPDATE_MESSAGE_BY_ID: (id) => `${CONFIG.BASE_URL}/message/${id}`,
  DELETE_MESSAGE_BY_ID: (id) => `${CONFIG.BASE_URL}/message/${id}`,
  USERS: `${CONFIG.BASE_URL}/users`,
  GET_USER_BY_ID: (id) => `${CONFIG.BASE_URL}/users/${id}`,
  UPDATE_USER_BY_ID: (id) => `${CONFIG.BASE_URL}/users/${id}`,
  DELETE_USER: (id) => `${CONFIG.BASE_URL}/users/${id}`

};

export default API_ENDPOINT;
