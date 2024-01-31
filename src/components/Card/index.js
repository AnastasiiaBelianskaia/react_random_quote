import React from "react";
import { Button, Card as CardMui, CardContent, Typography, Box, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
  },
  title: {
    color: ({color}) => color,
  }
});

function Card(props) {
  const {color, quote, author, onClick} = props
  const classes = useStyles({color});

  return (
    <CardMui className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h4" id='text'>
        {quote}
        </Typography>
        <Typography className={classes.title} variant="h6" color="textSecondary" id='author'>
        - {author}
        </Typography>
      </CardContent>
      <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
      >
        <Button component={Link} variant="contained" color="default" id='tweet-quote' href="twitter.com/intent/tweet">Tweet</Button>
        <Button id='new-quote' onClick={onClick} variant="contained" color="default">
          Another Quote!
        </Button>
      </Box>
    </CardMui>
  )
}

export default Card;