import axios from 'axios';
import * as env from '../../env';

export function postGenericForm(formName, data) {
  // A real API request would go here...
  const url = `${env.API_URL}/${env.API_VERSION}/${formName}`;

  axios({
    method: 'post',
    url,
    data,
  });
}
