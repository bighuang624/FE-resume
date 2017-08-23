import fetch from '../utils/fetch';

export default function getExperience() {
  return fetch({
    url: 'experience',
    method: 'get',
  });
}
