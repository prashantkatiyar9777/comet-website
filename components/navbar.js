import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
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

const NavBar = () => {
    const classes = useStyles();
    return (
    <div>
        <AppBar position="static" color='transparent' elevation={0}>
          <Toolbar>
            <Image src='/logo_comet.png' alt='Logo' width={143.01} height={50} />
            <Typography variant="h6" className={classes.title} align='right'> 
              Vision
            </Typography>
            <Typography variant="h6" className={classes.middle} align='center'>
              Team
            </Typography>
            <Typography variant="h6" className={classes.title} align='left'>
              Blog
            </Typography>
            <Typography variant="h6" color='primary'> 
              Hii, Prashant
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
    );
}
 
export default NavBar;