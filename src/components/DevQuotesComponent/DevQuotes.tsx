import { Typography, makeStyles } from '@material-ui/core';
import { quotes } from '../../quotes';
import { Quotes } from '../../types';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
}));

export type DevQuoteOptions = {
  extraQuotes?: Quotes;
};

export const DevQuote = (options: DevQuoteOptions) => {
  const { extraQuotes } = options;
  const allQuotes = [...quotes, ...(extraQuotes ?? [])];
  const classes = useStyles();
  const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];

  return (
    <footer className={classes.footer}>
      <Typography variant="h6">{randomQuote.text}</Typography>
      <Typography variant="subtitle2">{randomQuote.author}</Typography>
    </footer>
  );
};
