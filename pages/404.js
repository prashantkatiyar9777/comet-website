import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => {
    return {
        taglineGrid: {
            marginTop: '5em'
        },
    }
});

const ConstructionPage = () => {
    const classes = useStyles();
    const router = useRouter();
    return (
        <div>
            <Container maxWidth='lg'>
                <Navbar 
                    visionScroll={() => {
                        router.push('/');
                    }}
                    communityScroll={() => {
                        router.push('/');
                    }}
                    teamScroll={() => {
                        router.push('/');
                    }}
                />
                <br />
                <Grid container direction='column' justify='center' alignItems='center' spacing={10}>
                    <Grid item>
                        <Grid container direction='row' alignItems='center' justify='space-between' className={classes.taglineGrid} spacing={5}>
                            <Grid item lg={6} md={6} xl={6}>
                                <Grid container direction='column' spacing={3}>
                                    <Grid item>
                                        <Typography variant='h3' align='left'> 
                                            This Page is currently under contruction.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='subtitle1' align='left' color='primary'> 
                                            We are working on this page. Please check back soon.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={6} md={6} xl={6}>
                                <Image src='/construction.gif' alt='construction' height={370} width={540}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}
 
export default ConstructionPage;