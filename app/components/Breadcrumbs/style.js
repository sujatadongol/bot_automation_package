import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  breadcrumbs: {
    position: 'fixed',
    zIndex: 2,
  },
  item: {
    fontSize: '14px',
    fontStyle: 'bold',
    fontWeight: 500,
    lineHeight: '16px',
    letterSpacing: '0.01em',
    color: '#727272',
  },
  link: {
    color: '#727272 !important',
    '&:hover': {
      color: '#376AF5 !important',
    },
  },
}));
