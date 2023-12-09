import React from 'react';
import ErrorBoundary from "../ErrorBoundary";
import PlayerList from "./cyber_sport_players.json";
import { Card, CardContent, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Player({ children }) {
  return (
    <section style={{ margin: '20px' }}>
      {children}
    </section>
  );
}

function PlayerItem({ item }) {
  return (
    <Card sx={{ maxWidth: 445, backgroundColor: 'black', color: 'white' }}>
      <CardMedia
        component="img"
        height="540"
        image={item.image_src || 'default_image.jpg'}
        alt={item.player_name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.player_name}
        </Typography>
        <Accordion sx={{ backgroundColor: 'black', color: 'white' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Special Abilities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.special_abilities}</Typography>
          </AccordionDetails>
        </Accordion>
        <Typography variant="body2">
          <b>Player Rating:</b> {item.game_rating}
        </Typography>
        <Typography variant="body2">
          <b>Awards:</b> {item.award}
        </Typography>
        <Typography variant="body2">
          <b>Playing Style:</b> {item.playing_style}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Gallery() {
  return (
    <ErrorBoundary>
      <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', backgroundColor: 'gray', color: 'white' }}>
                        <Typography variant="h4" gutterBottom>
                            PLAYERS
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Checkout all your favourite players here !
                        </Typography>
                    </Paper>
      </Grid>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'black' }}>
        {PlayerList.map(item => (
          <Player key={item.id}>
            <PlayerItem item={item}/>
          </Player>
        ))}
      </div>
    </ErrorBoundary>
  );
}

export default Gallery;
