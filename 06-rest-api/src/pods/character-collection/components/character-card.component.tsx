import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onDetails: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetails } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            <div>
              <b>Status: </b>
              {character.status}
            </div>
            <div>
              <b>Best Sentences: </b>
              {character.bestSentences}
            </div>
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onDetails(character.id)}>
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
