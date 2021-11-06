import Image from "next/image";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { Play } from "react-feather";
import orbit from "../public/orbit.png";
import Hidden from "@material-ui/core/Hidden";
import Hexagon from "react-svg-hexagon";
import HexagonFlip from "react-svg-hexagon-flip";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircleButton from "../components/circular_btn";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { useRef, useState } from "react";
import Navbar from "../components/navbar";
import Button from "@material-ui/core/Button";
import Footer from "../components/footer";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyles = makeStyles((theme) => {
  return {
    taglineGrid: {
      marginTop: "5em",
    },
    semiBold: {
      fontWeight: 600,
    },
    tagline: {
      lineHeight: "150%",
    },
    helperText: {
      color: theme.palette.primary.light,
    },
    textBox: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderRadius: "10px",
          borderColor: theme.palette.primary.main,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.primary.dark,
        },
      },
    },
    footer: {
      backgroundColor: "#000000",
      marginTop: "10em",
    },
    footerText: {
      color: "#FFFFFF",
    },
    line: {
      color: "#FFFFFF",
    },
    instagram: {
      background: "#f09433",
      background:
        "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      background:
        "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
      background:
        "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
      filter:
        "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
    },
  };
});

export default function Home() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const visionRef = useRef(null);
  const communityRef = useRef(null);
  const teamRef = useRef(null);
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex.test(email) === false) {
      setError(true);
      return;
    } else {
      fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(email),
      });
      console.log(JSON.stringify(email));
    }
  };

  const handleClose = () => {
    setError(false);
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Navbar
          visionScroll={() => {
            scrollToRef(visionRef);
          }}
          communityScroll={() => {
            scrollToRef(communityRef);
          }}
          teamScroll={() => {
            scrollToRef(teamRef);
          }}
        />
        <br />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={10}
        >
          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
              className={classes.taglineGrid}
              spacing={5}
            >
              <Grid item lg={6} md={6} xl={6}>
                <Grid container direction="column" spacing={4}>
                  <Grid item>
                    <Typography
                      variant="h2"
                      className={classes.tagline}
                      align="left"
                    >
                      We are the{" "}
                      <span className={classes.semiBold}>builders</span> of{" "}
                      <span className={classes.semiBold}>Data Economy</span> for
                      the <span className={classes.semiBold}>students</span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" align="justify">
                      Our vision is to make the best use of the data with its
                      analytics, security, and monetization which goes
                      hand-in-hand.
                    </Typography>
                  </Grid>
                  <Grid item className={classes.textBox}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                      <FormControl fullWidth>
                        <Grid
                          container
                          direction="row"
                          spacing={3}
                          justify="flex-start"
                          alignItems="center"
                        >
                          <Grid item xs={12} sm={12} xl={6}>
                            <Typography
                              variant="body1"
                              display="block"
                              gutterBottom
                              color="primary"
                            >
                              Join Us
                            </Typography>
                            <TextField
                              fullWidth
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              variant="outlined"
                              label="Email"
                            />
                            <FormHelperText className={classes.helperText}>
                              We will be right back to you
                            </FormHelperText>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                            <Hidden
                              xsDown
                              smDown
                              mdDown
                              lgDown
                              implementation="css"
                            >
                              <CircleButton submitType={true}>
                                <Play color="#0D81FD" />
                              </CircleButton>
                            </Hidden>
                            <Hidden xlUp implementation="css">
                              <center>
                                <CircleButton submitType={true}>
                                  <Play color="#0D81FD" />
                                </CircleButton>
                              </center>
                            </Hidden>
                          </Grid>
                        </Grid>
                      </FormControl>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item lg={6} md={6} xl={6}>
                <Image src={orbit} alt="orbit" width={568.94} height={581} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item ref={visionRef}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h3" color="primary">
                  Our Vision
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" align="center">
                  To make the best use of the data with its analytics, security,
                  and monetization which goes hand-in-hand. Currently focusing
                  on the EdTech Sector(one of the most affected sectors in
                  COVID-19 pandemic), we are making the platforms for the
                  students to connect, collaborate and compete with each other,
                  enhancing a student data economy. We leverage the power of AI
                  in the form of Analytics and the power of Blockchain in the
                  form of decentralized data and its security.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h3" color="primary" align="center">
                  Recognized by
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" align="center">
                  Incubated by
                </Typography>
                <br />
                <Link href="https://newgeniedc.iiita.ac.in/" color="inherit">
                  <Image src="/iedc.png" alt="orbit" width={277} height={110} />
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="h5" align="center">
                  Powered by
                </Typography>
                <br />
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={10}
                >
                  <Grid item>
                    <Link href="https://ediindia.ac.in/" color="inherit">
                      <Image
                        src="/edii.png"
                        alt="orbit"
                        width={177}
                        height={150}
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="https://dst.gov.in/" color="inherit">
                      <Image
                        src="/dst.png"
                        alt="orbit"
                        width={177}
                        height={150}
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="https://https://www.nstedb.com/"
                      color="inherit"
                    >
                      <Image
                        src="/nstedb.jpg"
                        alt="orbit"
                        width={177}
                        height={150}
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item>
                <Typography variant="h5" align="center">
                  Recognised under
                </Typography>
                <br />
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={10}
                >
                  <Grid item>
                    <Link
                      href="https://www.startupindia.gov.in/"
                      color="inherit"
                    >
                      <Image
                        src="/SIL.svg"
                        alt="orbit"
                        width={277}
                        height={110}
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="https://dpiit.gov.in/" color="inherit">
                      <Image
                        src="/Emblem.jpeg"
                        alt="orbit"
                        width={230}
                        height={180}
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item ref={communityRef}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              spacing={5}
            >
              <Grid item>
                <Typography variant="h3" color="primary" align="center">
                  Community Support
                </Typography>
              </Grid>
              <br />
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={10}
                >
                  <Grid item>
                    <Image src="/iit.png" alt="orbit" width={177} height={97} />
                  </Grid>
                  <Grid item>
                    <Image src="/nit.png" alt="orbit" width={177} height={97} />
                  </Grid>
                  <Grid item>
                    <Image
                      src="/iiit.png"
                      alt="orbit"
                      width={177}
                      height={97}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <br />
              <Grid item>
                <Typography variant="h3" color="primary" align="center">
                  Brands that trusted us
                </Typography>
              </Grid>
              <br />
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={10}
                >
                  <Grid item align="center">
                    <Image
                      src="/cuvette/krishinetwork.svg"
                      alt="Krishi Network"
                      width={150}
                      height={50}
                    />
                    <Typography align="center">Krishi Network</Typography>
                  </Grid>
                  <Grid item align="center">
                    <Image
                      src="/cuvette/beyondinnovation.jpg"
                      alt="beyond Innovation"
                      width={50}
                      height={50}
                    />
                    <Typography align="center">Beyond Innovation</Typography>
                  </Grid>
                  <Grid item align="center">
                    <Image
                      src="/cuvette/furballstory.jpeg"
                      alt="fur ball story"
                      width={50}
                      height={50}
                    />
                    <Typography align="center">Fur Ball Story</Typography>
                  </Grid>
                  <Grid item align="center">
                    <Image
                      src="/cuvette/vysiontech.png"
                      alt="vysion tech"
                      width={120}
                      height={50}
                    />
                    <Typography align="center">Vysion Technology</Typography>
                  </Grid>

                  <Grid item align="center">
                    <Image
                      src="/cuvette/fl.svg"
                      alt="FL"
                      width={50}
                      height={50}
                    />
                    <Typography align="center">FL</Typography>
                  </Grid>
                  <Grid item align="center">
                    <Image
                      src="/cuvette/WAVE CONCEPT.png"
                      alt="WAVE CONCEPT"
                      width={50}
                      height={50}
                    />
                    <Typography align="center">Wave Concept</Typography>
                  </Grid>
                  <Grid item align="center">
                    <Image
                      src="/cuvette/ONI.png"
                      alt="ONI"
                      width={50}
                      height={50}
                    />
                    <Typography align="center">ONI</Typography>
                  </Grid>
                  <Grid item>
                    <Image
                      src="/cuvette/image 1469.png"
                      alt="orbit"
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <br />
                  <Grid item>
                    <Image
                      src="/cuvette/ZS.png"
                      alt="orbit"
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <Grid item>
                    <Image
                      src="/cuvette/FINFLUX.png"
                      alt="orbit"
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <Grid item>
                    <Image
                      src="/cuvette/VECTORISED AL.png"
                      alt="orbit"
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <Grid item>
                    <Image
                      src="/cuvette/TGH TECH.png"
                      alt="orbit"
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <Grid item>
                    <Image
                      src="/cuvette/interview.svg"
                      alt="orbit"
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <Grid item>
                    <Image
                      src="/cuvette/FUNDFINA.png"
                      alt="orbit"
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <Grid item>
                    <Image
                      src="/cuvette/M2P.svg"
                      alt="orbit"
                      width={50}
                      height={50}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item ref={teamRef}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              spacing={5}
            >
              <Grid item>
                <Typography variant="h3" color="primary">
                  Team
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={4}
                >
                  <Grid item>
                    <Link
                      href="https://www.linkedin.com/in/prashant-milan-katiyar/"
                      color="inherit"
                    >
                      <HexagonFlip>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Image
                            src="https://media-exp1.licdn.com/dms/image/C4D03AQFzybrlnU6Ksg/profile-displayphoto-shrink_400_400/0/1625140277780?e=1639008000&v=beta&t=jZyb9Xxo1vkdSrQ6cHuqevKMH85XWQx26fzDCt_r4y8"
                            alt="cto"
                            layout="fill"
                          />
                        </Hexagon>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Typography variant="h4" align="center">
                            Prashant Katiyar
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            Founder and CEO
                          </Typography>
                        </Hexagon>
                      </HexagonFlip>
                    </Link>
                  </Grid>

                  <Grid item>
                    <Link
                      href="https://www.linkedin.com/in/raghav1701/"
                      color="inherit"
                    >
                      <HexagonFlip>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Image
                            src="https://media-exp1.licdn.com/dms/image/C5103AQHn2K6skVzaUA/profile-displayphoto-shrink_800_800/0/1566123843552?e=1639008000&v=beta&t=86LWSyZVDoDeHo86xdD1NjutxToIRnFQTpVr8mhQedI"
                            alt="cto"
                            layout="fill"
                          />
                        </Hexagon>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Typography variant="h4" align="center">
                            Raghav Agrawal
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            ML Operations & App Developer
                          </Typography>
                        </Hexagon>
                      </HexagonFlip>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="https://www.linkedin.com/in/achal2702/"
                      color="inherit"
                    >
                      <HexagonFlip>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Image
                            src="https://media-exp1.licdn.com/dms/image/C4D03AQEKYIiugjEdPg/profile-displayphoto-shrink_800_800/0/1627793937725?e=1634774400&v=beta&t=GQ9nKduGOeyhDUVXv9v3O64Zi_5M9P1BNc6ADgJRAko"
                            alt="coo"
                            layout="fill"
                          />
                        </Hexagon>

                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Typography variant="h4" align="center">
                            Achalesh Lakhotiya
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            Co-Founder and COO
                          </Typography>
                        </Hexagon>
                      </HexagonFlip>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h4">Our Mentors</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={4}
                >
                  <Grid item>
                    <Link
                      href="https://www.linkedin.com/in/shubhendravikram/"
                      color="inherit"
                    >
                      <HexagonFlip>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Image
                            src="https://media-exp1.licdn.com/dms/image/C5603AQH7K9m6M5KowA/profile-displayphoto-shrink_400_400/0/1589383404605?e=1639008000&v=beta&t=PxUQ_L-Ut2GxNkbqb9QMExERNj9evpI_4gTsWA_zZRw"
                            alt="cto"
                            layout="fill"
                          />
                        </Hexagon>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Typography variant="h4" align="center">
                            Shubhendra Vikram
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            Founder and CEO @Hapramp Studios
                          </Typography>
                        </Hexagon>
                      </HexagonFlip>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="https://www.linkedin.com/in/singh-pratyush/"
                      color="inherit"
                    >
                      <HexagonFlip>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Image
                            src="https://media-exp1.licdn.com/dms/image/C5103AQGpba-LakWJpA/profile-displayphoto-shrink_400_400/0/1517456536289?e=1639008000&v=beta&t=in2GUImBsovxjGzTHSZuPcmBi6CPrirX1_f-fkfpYO0"
                            alt="cto"
                            layout="fill"
                          />
                        </Hexagon>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Typography variant="h4" align="center">
                            Pratyush Singh
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            Co-Founder and CTO @Hapramp Studios
                          </Typography>
                        </Hexagon>
                      </HexagonFlip>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="https://www.linkedin.com/in/rajatdangi/"
                      color="inherit"
                    >
                      <HexagonFlip>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Image
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQGHsKLM5X22Dg/profile-displayphoto-shrink_400_400/0/1615981849271?e=1639008000&v=beta&t=WoNEw5SAIJHkw6JqazgfwyypMxBbFYSJPUDw8SiNBUg"
                            alt="cto"
                            layout="fill"
                          />
                        </Hexagon>
                        <Hexagon
                          height={260}
                          stroke="#0D81FD"
                          strokeWidth={5}
                          radius={2}
                        >
                          <Typography variant="h4" align="center">
                            Rajat Dangi
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            Brand Strategist @Hapramp Studios
                          </Typography>
                        </Hexagon>
                      </HexagonFlip>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          open={error}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Invalid Email Given</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You are trying to give an invalid email. Please use a valid email
              id to register for our newsletter.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <br />
      </Container>
      <br />
      <Footer />
    </div>
  );
}
