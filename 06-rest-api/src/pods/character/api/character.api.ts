import { Character } from './character.api-model';

const apiURL = 'https://rickandmortyapi.com/api';
const serverApiUrl = 'http://localhost:3000';

export const getCharacter = async (id: string): Promise<Character> => {
  // return await fetch(apiURL + '/character/' + id).then(response => response.json())
  return await fetch(serverApiUrl + '/characters/' + id).then(response => response.json())
};

export const saveBestSentence = async (id: string, bestSentences: string): Promise<Character> => {
  console.log(bestSentences)
  const response = await fetch(serverApiUrl + '/characters/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ bestSentences })
  })

  return await response.json();
};
