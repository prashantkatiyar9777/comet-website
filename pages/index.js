import Image from 'next/image';
import TextField from '@material-ui/core/TextField';
import { Play } from 'react-feather';
import orbit from '../public/orbit.png';
import iedc from '../public/iedc.png';
import edii from '../public/edii.png';
import dst from '../public/dst.png';
import nstedb from '../public/nstedb.jpg';
import iit from '../public/iit.png';
import nit from '../public/nit.png';
import iiit from '../public/iiit.png';
import Hidden from '@material-ui/core/Hidden';
import Hexagon from 'react-svg-hexagon'
import HexagonFlip from 'react-svg-hexagon-flip';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircleButton from '../components/circular_btn';
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
        <Grid container direction='column' justify='center' alignItems='center' spacing={10}>
          <Grid item>
            <Grid container direction='row' alignItems='center' justify='space-between' className={classes.taglineGrid} spacing={5}>
              <Grid item lg={6} md={6} xl={6}>
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
                    <FormControl fullWidth>
                      {/* <Box display="flex" p={1}>
                        <Box p={1} width='100%'>
                          <TextField fullWidth variant='outlined' label='Email'/>
                        </Box>
                        <Box p={1} flexShrink={1}>
                          <CircleButton>
                            <Play color='#0D81FD'/>
                          </CircleButton>
                        </Box>
                      </Box> */}
                      <Grid container direction='row' spacing={3} justify='flex-start' alignItems="center">
                        <Grid item xs={12} sm={12} xl={6}>
                          <Typography variant="body1" display="block" gutterBottom color='primary'>
                            Join Us
                          </Typography>
                          <TextField fullWidth variant='outlined' label='Email'/>
                          <FormHelperText className={classes.helperText}>We will be right back to you</FormHelperText>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                          <Hidden xsDown smDown mdDown lgDown implementation='css'>
                            <CircleButton>
                              <Play color='#0D81FD'/>
                            </CircleButton>
                          </Hidden>
                          <Hidden xlUp implementation='css'>
                            <center>
                              <CircleButton>
                                <Play color='#0D81FD'/>
                              </CircleButton>
                            </center>
                          </Hidden>
                        </Grid>
                      </Grid>
                      
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item lg={6} md={6} xd={12}>
                <Image src={orbit} alt='orbit' width={568.94} height={581}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column' alignItems='center' justify='center' spacing={3}> 
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
          </Grid>
          <Grid item>
            <Grid container direction='column' alignItems='center' justify='center' spacing={3}>
              <Grid item>
                <Typography variant='h3' color='primary' align='center'>
                  Recognized by
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' align='center'>
                  Incubated by
                </Typography>
                <br />
                <Image src={iedc} alt='orbit' width={277} height={110}/>
              </Grid>
              <Grid item>
                <Typography variant='h5' align='center'>
                  Powered by
                </Typography>
                <br />
                <Grid container direction='row' alignItems='center' justify='center' spacing={10}>
                  <Grid item>
                    <Image src={edii} alt='orbit' width={177} height={150}/>
                  </Grid>
                  <Grid item>
                    <Image src={dst} alt='orbit' width={177} height={150}/>
                  </Grid>
                  <Grid item>
                    <Image src={nstedb} alt='orbit' width={177} height={150}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column' alignItems='center' justify='center' spacing={5}>
              <Grid item>
                <Typography variant='h3' color='primary' align='center'>
                  Community Support
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction='row' alignItems='center' justify='center' spacing={10}>
                  <Grid item>
                    <Image src={iit} alt='orbit' width={177} height={97}/>
                  </Grid>
                  <Grid item>
                    <Image src={nit} alt='orbit' width={177} height={97}/>
                  </Grid>
                  <Grid item>
                    <Image src={iiit} alt='orbit' width={177} height={97}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column' alignItems='center' justify='center' spacing={5}>
              <Grid item>
                <Typography variant='h3' color='primary'>
                  Team
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction='row' alignItems='center' justify='center' spacing={4}>
                  <Grid item>
                    <HexagonFlip>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Image src='https://media-exp1.licdn.com/dms/image/C4E03AQFdayrGucPUIg/profile-displayphoto-shrink_800_800/0/1624708297738?e=1631145600&v=beta&t=UKHmuyrxFF8e3B-HUZoc1594i-_L9fXLV3AvaDvVvEM' alt='cto' layout='fill' />
                      </Hexagon>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Typography variant='h4' align='center'>
                          Tejas Agrawal
                        </Typography>
                        <Typography variant='subtitle' align='center'>
                          Co-Founder and CTO
                        </Typography>
                      </Hexagon>
                    </HexagonFlip>
                  </Grid>
                  <Grid item>
                    <HexagonFlip>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQFzybrlnU6Ksg/profile-displayphoto-shrink_800_800/0/1625140277780?e=1631145600&v=beta&t=tV7kpDoI288NTvSf8BpMy_wNL5fYMgGAxLbbUzezP14' alt='cto' layout='fill' />
                      </Hexagon>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Typography variant='h4' align='center'>
                          Prashant Katiyar
                        </Typography>
                        <Typography variant='subtitle' align='center'>
                          Founder and CEO
                        </Typography>
                      </Hexagon>
                    </HexagonFlip>  
                  </Grid>
                  <Grid item>
                    <HexagonFlip>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Image src='https://media-exp1.licdn.com/dms/image/C5103AQHn2K6skVzaUA/profile-displayphoto-shrink_800_800/0/1566123843552?e=1631145600&v=beta&t=71nvLaBUA8AYesir5b7vY1flS81Am0vu9Y1vYU7Q_Zo' alt='cto' layout='fill' />
                      </Hexagon>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Typography variant='h4' align='center'>
                          Raghav Agrawal
                        </Typography>
                        <Typography variant='subtitle' align='center'>
                          ML Operations Lead
                        </Typography>
                      </Hexagon>
                    </HexagonFlip>  
                  </Grid>
                  <Grid item>
                    <HexagonFlip>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQE6_9jxAspBSw/profile-displayphoto-shrink_800_800/0/1605426371490?e=1631145600&v=beta&t=cSZD5ermj_4hcTASSx-OT3klwFAo_xEPvwoSS6zk1vM' alt='coo' layout='fill' />
                      </Hexagon>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Typography variant='h4' align='center'>
                          Achalesh Lakhotiya
                        </Typography>
                        <Typography variant='subtitle' align='center'>
                          Co-Founder and COO
                        </Typography>
                      </Hexagon>
                    </HexagonFlip> 
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant='h4'>
                  Our Mentors
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction='row' alignItems='center' justify='center' spacing={4}>
                  <Grid item>
                    <HexagonFlip>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Image src='https://media-exp1.licdn.com/dms/image/C5603AQH7K9m6M5KowA/profile-displayphoto-shrink_800_800/0/1589383404605?e=1631145600&v=beta&t=FH9lMX4MrTyq0a6VhiU9PGN-sKRiZzsaRdiLKiTIU-c' alt='cto' layout='fill' />
                      </Hexagon>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Typography variant='h4' align='center'>
                          Shubhendra Vikram
                        </Typography>
                        <Typography variant='subtitle' align='center'>
                          Founder and CEO @Hapramp Studios
                        </Typography>
                      </Hexagon>
                    </HexagonFlip>
                  </Grid>
                  <Grid item>
                    <HexagonFlip>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Image src='https://media-exp1.licdn.com/dms/image/C5103AQGpba-LakWJpA/profile-displayphoto-shrink_800_800/0/1517456536289?e=1631145600&v=beta&t=WHicb4bJLxb3grNIH4USXMvQosloYCJdESbecTsUWzY' alt='cto' layout='fill' />
                      </Hexagon>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Typography variant='h4' align='center'>
                          Pratyush Singh
                        </Typography>
                        <Typography variant='subtitle' align='center'>
                          Co-Founder and CTO @Hapramp Studios
                        </Typography>
                      </Hexagon>
                    </HexagonFlip>  
                  </Grid>
                  <Grid item>
                    <HexagonFlip>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Image src='https://media-exp1.licdn.com/dms/image/C4E03AQGHsKLM5X22Dg/profile-displayphoto-shrink_800_800/0/1615981849271?e=1631145600&v=beta&t=mdkdrMb8d13L6hySeopj6_SKng0yfheEkrMdI5dgg_U' alt='cto' layout='fill' />
                      </Hexagon>
                      <Hexagon height={260} stroke='#0D81FD' strokeWidth={5} radius={2}>
                        <Typography variant='h4' align='center'>
                          Rajat Dangi
                        </Typography>
                        <Typography variant='subtitle' align='center'>
                          Brand Strategist @Hapramp Studios
                        </Typography>
                      </Hexagon>
                    </HexagonFlip>  
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
