import { CharacterEntityApi, ResponseApi } from './character-collection.api-model';

const apiURL = 'https://rickandmortyapi.com/api'
const serverApiUrl = 'http://localhost:3000';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  // const response: ResponseApi = await fetch(apiURL + '/character').then(response => response.json())
  // return response.results;
  return await fetch(serverApiUrl + '/characters').then(response => response.json())
};

export const saveBestSentence = async (character: CharacterEntityApi): Promise<boolean> => {
  const response = await fetch(serverApiUrl + '/characters/' + character.id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character.bestSentences)
  });

  return await response.json();
};