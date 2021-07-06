import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Linkedin, Twitter, Instagram, Facebook } from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => {
    return {
      footer: {
        backgroundColor: '#000000',
        marginTop: '10em'
      },
      footerText: {
        color: '#FFFFFF'
      },
      line: {
        color: '#FFFFFF',
      },
      instagram: { 
        background: '#f09433', 
        background: '-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        background: '-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', 
        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#f09433\', endColorstr=\'#bc1888\',GradientType=1 )',
      }
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
    <div className={classes.footer}>
        <Container maxWidth='lg'>
          <Grid container direction='row' justify='space-around' alignItems='baseline' spacing={10}>
            <Grid item>
              <Typography variant='h4' className={classes.footerText}>
                Be the part of
              </Typography>
              <Typography variant='h4' className={classes.footerText}>
                Revolutionary <span style={{ color: '#0D81FD'}}>Data</span> 
              </Typography>
              <Typography variant='h4' color='primary'>
                Economy
              </Typography>
              <br />
              <Grid container direction='row' justify='flex-start' alignItems='center' spacing={4}>
                <Grid item>
                  <Link href='https://www.linkedin.com/company/cometlabs/' color='inherit'>
                    <Linkedin color='#0077B5'/>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='https://www.instagram.com/cometlabs/' color='inherit'>
                    <Instagram className={classes.instagram}/>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='https://www.facebook.com/cometlabs.in' color='inherit'>
                    <Facebook color='#4267B2'/>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='https://twitter.com/cometlabs_ai' color='inherit'>
                    <Twitter color='#1DA1F2'/>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='body1' className={classes.footerText}>
                About
              </Typography>
              <Typography variant='body1' className={classes.footerText}>
                Blog
              </Typography>
              <Typography variant='body1' className={classes.footerText}>
                Refund Policy
              </Typography>
              <Typography variant='body1' className={classes.footerText}>
                Careers
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' className={classes.footerText}>
                Help
              </Typography>
              <Typography variant='body1' className={classes.footerText}>
                Privacy Policy
              </Typography>
              <Typography variant='body1' className={classes.footerText}>
                Code of Conduct
              </Typography>
              <Typography variant='body1' className={classes.footerText}>
                Contact Us
              </Typography>
            </Grid>
          </Grid>
          <br />
          <hr className={classes.line}/>
          <br />
          <Grid container direction='row' justify='space-between' alignItems='center'>
            <Grid item>
              <Image src='/logo_name.png' alt='Logo Name' width={181.01} height={50} />
            </Grid>
            <Grid item>
              <Typography variant='body1' className={classes.footerText}>
                © 2021, COMETLABS IT SOLUTIONS PVT. LTD.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
 
export default Footer;