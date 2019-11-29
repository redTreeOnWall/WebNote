import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { CSSTransition ,TransitionGroup} from "react-transition-group";
import {useState} from "react"
import "./css.css";
import Ani from "../compoment/Ani";



var x = false;
function TestAni() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
        {inProp &&  <CSSTransition in={inProp} timeout={500} classNames="ani-item">
            <div>
            {"I'll receive my-node-* classes"}
            </div>
        </CSSTransition>
        }

      {x = !x}
      <button type="button" onClick={() => setInProp(x)}>
        Click to Enter
      </button>
    </div>
  );
}

var e  =React.createElement;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "180px",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function  Album ()  {

    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar color="default" position="fixed">
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Album layout
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}

            <Ani></Ani>

            <TestAni></TestAni>
            <br/>
            <br/>
            <br/>
            <br/>

            <HttpLoader>
              <Grid container spacing={4}>
                {cards.map(card => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      {/* <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                        /> */}
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to
                          describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Button> this is load Btn</Button>
            </HttpLoader>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
}

class HttpLoader extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      isFinished: false,
      data: "null",
      ani:"ani"
    };
    console.log(p);
  }
  componentDidMount() {

    var update =()=>{
        this.setState({isFinished:!this.state.isFinished})
        console.log("update:"+this.state.isFinished);
        setTimeout(update,3000)
    }

    this.setState({isFinished:false})
    setTimeout(() => {
      fetch("/")
        .then(res => res.text())
        .then(d => {
            this.setState({ isFinished: true, data: d })
            update();
        });
    }, 2000);

  }

  render() {
      return(
        <div>
        <CSSTransition
          in={this.state.isFinished}
          timeout={500}
          classNames="ani-item"
        >
          {this.props.children[0]}
        </CSSTransition>

        {/* <CSSTransition
          in={!this.state.isFinished}
          timeout={200}
          classNames="ani-item"
        >
          {this.props.children[1]}
        </CSSTransition> */}

        </div>
      );
  }
}



