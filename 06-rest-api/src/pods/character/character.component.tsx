import React, { useState } from 'react';
import { Character } from './character.vm';
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  character: Character;
  onBack: () => void;
  onSave: (bestSentences: string) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onBack, onSave } = props;
  const {
    id,
    name,
    species,
    image,
    status,
    gender,
    origin,
    location,
    created,
  } = character;
  const [bestSentences, setBestSentences] = useState('');

  return (
    <Card>
      <CardHeader title={name} subheader={species} />
      <CardContent>
        <CardMedia
          image={image}
          title={name}
          style={{ height: 0, paddingTop: '56.25%' }}
        />
        <Typography variant="body1">
          <div>
            <b>Status: </b>
            {status}
          </div>
          <div>
            <b>Gender: </b>
            {gender}
          </div>
          <div>
            <b>Origin: </b>
            {origin.name}
          </div>
          <div>
            <b>Location: </b>
            {location.name}
          </div>
          <div>
            <b>Created: </b>
            {created}
          </div>
          <div>
            <b>Best Sentence: </b>
            {character.bestSentences}
          </div>
        </Typography>
        <TextField
          label="Best Sentences"
          value={bestSentences}
          fullWidth
          onChange={(e) => setBestSentences(e.target.value)}
        />
        <Button onClick={() => onSave(bestSentences)}>Save sentence</Button>
      </CardContent>
      <CardActions>
        <IconButton onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
