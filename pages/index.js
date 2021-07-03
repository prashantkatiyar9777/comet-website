import Image from 'next/image';
import TextField from '@material-ui/core/TextField';
import { Play } from 'react-feather';
import orbit from '../public/orbit.png'
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/navbar';

const useStyles = makeStyles((theme) => {
  return {
    taglineGrid: {
      marginTop: '5em'
    },
    semiBold: {
      fontWeight: 600
    },
    tagline: {
      lineHeight: '150%'
    },
    helperText: {
      color: theme.palette.primary.light
    },
    circle: {
      borderRadius: '50%',
      boxShadow: '0px 11.4667px 11.4667px rgba(54, 151, 253, 0.15)',
      width: '43px',
      height: '43px',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textBox: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: '10px',
          borderColor: theme.palette.primary.main,
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.primary.dark,
        },
      },
    },
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth='lg'>
        <Navbar />
        <br />
        <Grid container direction='row' alignItems='center' justify='space-between' className={classes.taglineGrid} spacing={5}>
          <Grid item lg={6} md={6} xd={12}>
            <Grid container direction='column' spacing={4}>
              <Grid item>
                <Typography variant='h2' className={classes.tagline} align='left'> 
                  We are the <span className={classes.semiBold}>builders</span> of <span className={classes.semiBold}>Data Economy</span> for the <span className={classes.semiBold}>students</span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' align='justify'>
                  Our vision is to make the best use of the data with its analytics, security, and monetization which goes hand-in-hand. 
                </Typography>
              </Grid>
              <Grid item className={classes.textBox}>
                <FormControl>
                  <Typography variant="body1" display="block" gutterBottom color='primary'>
                    Join Us
                  </Typography>
                  <Grid container direction='row' spacing={3} alignItems='center'>
                    <Grid item>
                      <TextField variant='outlined' label='Email'/>
                    </Grid>
                    <Grid item >
                      <ButtonBase>
                        <div className={classes.circle}>
                          <Play color='#0D81FD'/>
                        </div>
                      </ButtonBase>
                    </Grid>
                  </Grid>
                  <FormHelperText className={classes.helperText}>We will be right back to you</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid item lg={6} md={6} xd={12}>
            <Image src={orbit} alt='orbit' width={568.94} height={581}/>
          </Grid>
        </Grid>
        <br />
        <Grid container direction='column' alignItems='center' justify='center' spacing={5}> 
          <Grid item>
            <Typography variant='h3' color='primary'>
              Our Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6' align='center'>
            To make the best use of the data with its analytics, security, and monetization which goes hand-in-hand. 
            Currently focusing on the EdTech Sector(one of the most affected sectors in COVID-19 pandemic), we are making the platforms for the students to connect, collaborate and compete with each other, enhancing a student data economy. We leverage the power of AI in the form of Analytics and the power of Blockchain in the form of decentralized data and its security.
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container direction='column' alignItems='center' justify='center' spacing={5}>
          <Grid item>
            <Typography variant='h3' color='primary'>
              Recognized by
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
