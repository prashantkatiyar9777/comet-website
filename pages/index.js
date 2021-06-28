import Head from 'next/head'
import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from '../components/navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  middle: {
    flexGrow: 0.5,
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth='lg'>
        <Navbar />
      </Container>
    </div>
  );
}
