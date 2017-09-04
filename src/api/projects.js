import fetch from '../utils/fetch';

export default function getProjects() {
  return fetch({
    url: 'projects',
    method: 'get',
  });
}
