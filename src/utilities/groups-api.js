import sendRequest from './send-request';

const BASE_URL = '/api/groups';

export function getAll() {
  return sendRequest(BASE_URL);
}