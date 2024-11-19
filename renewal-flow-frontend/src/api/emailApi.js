import axios from 'axios';

const API_URL = 'http://localhost:5000/api/email';

export const createTemplate = (template) => axios.post(`${API_URL}/template`, template);
