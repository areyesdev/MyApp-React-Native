import { API_HOST } from '../utils/constants';

export async function getPokemonApi(endpointUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
