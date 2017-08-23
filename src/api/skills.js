import fetch from '../utils/fetch';

export default function getSkills() {
  return fetch({
    url: 'skills',
    method: 'get',
  });
}
