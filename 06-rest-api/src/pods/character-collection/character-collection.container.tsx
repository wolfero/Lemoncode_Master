import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleData = (id: number) => {
    navigate(linkRoutes.characterData(id.toString()));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onDetails={handleData}
    />
  );
};
