import ClientAPI from '@flora/common/src/api/ClientAPI';

const PROD_API_URL = 'https://e-wholesale-api-5hl63at73a-as.a.run.app/v1/api';
const BASE_URL = 'http://localhost:3001/v1/api';

export const clientAPI = new ClientAPI(BASE_URL);
