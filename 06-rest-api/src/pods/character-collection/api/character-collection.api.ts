import { CharacterEntityApi, ResponseApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const apiURL = 'https://rickandmortyapi.com/api'

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response: ResponseApi = await fetch(apiURL + '/character').then(response => response.json())
  return response.results;
};
