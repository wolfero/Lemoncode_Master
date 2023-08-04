import { Character } from './character.api-model';
import { mockCharacterCollection } from './character.mock-data';

const apiURL = 'https://rickandmortyapi.com/api'

export const getCharacter = async (id: string): Promise<Character> => {
  // return mockCharacterCollection.find((character) => character.id.toString() === id);
  return await fetch(apiURL + '/character/' + id).then(response => response.json())
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
