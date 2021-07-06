import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import { useState } from 'react';
import CircleButton from '../components/circular_btn';
import * as Icon from 'react-feather';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

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

const NavBar = (props) => {
    const [status , setStatus] = useState(null);
    
    const handleOpen = (event) => {
      setStatus(event.currentTarget);
    }
    
    const handleClose = () => {
      setStatus(null);
    }

    const classes = useStyles();
    return (
    <div>
        <AppBar position="static" color='transparent' elevation={0}>
          <Toolbar>
            <Image src='/logo_comet.png' alt='Logo' width={143.01} height={50} />
            <Typography variant="h6" className={classes.title} align='right'> 
              <Hidden xsDown implementation='css'>
                <Link onClick={props.visionScroll} color='inherit'>Vision</Link>
              </Hidden>
            </Typography>
            <Typography variant="h6" className={classes.middle} align='center'>
              <Hidden xsDown implementation='css'>
                <Link onClick={props.communityScroll} color='inherit'>Community</Link>
              </Hidden>
            </Typography>
            <Typography variant="h6" className={classes.title} align='left'>
              <Hidden xsDown implementation='css'>
                <Link onClick={props.teamScroll} color='inherit'>Team</Link>
              </Hidden>
            </Typography>
            <Hidden xsDown implementation='css'>
              <Button color='primary' size='large'>
                Join COMET
              </Button>
            </Hidden>
            <Hidden smUp implementation='css'>
              <CircleButton submitType={false} clickAction={handleOpen}>
                <Icon.Menu color='#0D81FD'/>
              </CircleButton>
            </Hidden>
            <Menu
              id="fade-menu"
              anchorEl={status}
              keepMounted
              open={Boolean(status)}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => {
                handleClose();
                props.visionScroll.call();
              }}>Vision</MenuItem>
              <MenuItem onClick={() => {
                handleClose();
                props.communityScroll.call();
              }}>Community</MenuItem>
              <MenuItem onClick={() => {
                handleClose();
                props.teamScroll.call();
              }}>Team</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
    </div>
    );
}
 
export default NavBar;