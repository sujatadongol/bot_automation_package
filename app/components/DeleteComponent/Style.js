import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  content: {
    // width: '325px',
    textAlign: 'center !important',
    overflow: 'hidden',
    // paddingTop: '20px !important',
    // paddingBottom: '6px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '25.6px',
    color: '#666666',
    borderBottom: 'none',
    paddingTop: '30px !important',
  },
  text: {
    // paddingTop: '0 !important',
    paddingRight: '10px',
    paddingLeft: '10px',
    fontSize: '14.2222px',
    color: '#878787',
  },
  cancelBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '15px',
  },
}));
