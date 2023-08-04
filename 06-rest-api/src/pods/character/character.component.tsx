import React from 'react';
import { Character } from './character.vm';
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  character: Character;
  onBack: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onBack } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <CardMedia
          image={character.image}
          title={character.name}
          style={{ height: 0, paddingTop: '56.25%' }}
        />
        <Typography variant="body1">
          <p>
            <b>Status: </b>
            {character.status}
          </p>
          <p>
            <b>Gender: </b>
            {character.gender}
          </p>
          <p>
            <b>Origin: </b>
            {character.origin.name}
          </p>
          <p>
            <b>Location: </b>
            {character.location.name}
          </p>
          <p>
            <b>Created: </b>
            {character.created}
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onBack()}>
          <ArrowBackIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
