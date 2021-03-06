import React from "react";
import { withRouter } from "react-router-dom";

//UI
import {
  Button, Tooltip, Typography, AppBar, Card, CardHeader, IconButton, Fab,
  Avatar, ListItemText, ListItem, Drawer, Divider, Paper, Grow, Container, Menu, MenuItem
} from '@material-ui/core';
import { LinkedIn, Mail, Close, ContactSupport } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu'
// import Alert from '@material-ui/lab/Alert';
// import {Close,Share,FileCopyOutlined, Refresh} from '@material-ui/icons';\
import { withStyles } from "@material-ui/core/styles";
import { throttle } from "lodash";
import { styles } from "./UIComponents"
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up: false,
      navigation: ["About", "Quality Control", "Train the model", "Help"],
      show: false,
      anchorEl: null
    };
  }
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleClose = () => {
    this.setState({ anchorEl: null })
  };
  orderPlaced = () => {
    this.setState({ show: true })
  }
  componentDidUpdate() {
    if (this.state.show) {
      this.props.history.push("/process")
    }
  }
  toggleDrawer = open => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ up: open });
  };
  handleOnClickScroll = (content) => {
    switch (content) {
      case ("Quality Control"):
        this.props.history.push("/input");
        break;
      case ("About"):
        this.props.history.push("/about");
        break;
      case ("Train the model"):
        this.props.history.push("/train");
        break;
      case ("Help"):
        this.props.history.push("/help");
        break;
    }
  }
  render() {
    const { navigation, up, anchorEl } = this.state
    const { classes } = this.props
    const date = new Date()
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed" style={{ backgroundColor: "#333333" }}>
          <Drawer anchor="top" open={up} onClose={this.toggleDrawer(false)} style={{ color: "#333333" }}
            classes={{ paper: classes.drawer }}>
            <ListItem className={classes.topDrawer}>
              <ListItemText primary={<Typography variant="h5">Navigation</Typography>} style={{ fontWeight: "bold" }}></ListItemText>
              <Tooltip title="Close" arrow>
                <IconButton onClick={this.toggleDrawer(false)}>
                  <Close style={{ color: "#edeaea" }} />
                </IconButton>
              </Tooltip>
            </ListItem>
            {navigation.map((f, i) => (
              <ListItem button className={classes.members} key={i} style={{ paddingRight: 40 }} onClick={() => this.handleOnClickScroll(f)}>
                <ListItemText primary={<Typography variant="subtitle1">{f}</Typography>}>
                </ListItemText>
              </ListItem>
            ))}
          </Drawer>
          <div className={classes.headerText}>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" width="25px" height="25px" className={classes.logo} alt="logo"></img>
            {navigation.map((e, i) =>
              <IconButton style={{ borderRadius: 0 }} key={i} onClick={() => this.handleOnClickScroll(e)}>
                <Typography variant="body2" className={classes.appBarText}>{e}</Typography>
              </IconButton>)}
          </div>
          <div className={classes.headAvatarContainer}>
            <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color: "#edeaea" }} onClick={this.handleClick}>
              English (Default)
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>English</MenuItem>
              <MenuItem onClick={this.handleClose}>Vietnamese</MenuItem>
              <MenuItem onClick={this.handleClose}>Indonesian</MenuItem>
              <MenuItem onClick={this.handleClose}>Nepali</MenuItem>
            </Menu>
            <Button className={classes.button} style={{ margin: 0 }}>Sign in</Button>
            <MenuIcon onClick={this.toggleDrawer(true)} className={classes.menuButton} />
          </div>

        </AppBar>
        <div>
          <Grow in >
            <Container className={classes.container} maxWidth={false}>
              <img alt="Amazon-full-logo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" className={classes.containerLogo} ></img>
              <span><h2>A <span style={{ color: "#FF9900" }}>customer</span>-centric ecommerce company</h2></span>
              <br />
            </Container>
          </Grow>
          <div className={classes.featureContainer} ref={this.feature}>
            <Grow in timeout={1000} >
              <div className={classes.introMode}>
                <div className={classes.introModeChild}>
                  <Typography className={classes.headingText} align="left" variant="h5">Who are we ?</Typography>
                  <br />
                  <Typography variant="subtitle1" align="justify" paragraph>
                    We are a technology company with the operation of Jeff Bezos and founded in 1994. We are known as the world's largest online marketplace and the biggest cloud provider (Amazon Web Service – AWS).
                                    </Typography>
                </div>
                <div>
                  <img className={classes.modeDemo} src="https://image.cnbcfm.com/api/v1/image/104864793-RTX3K2U2-amazon.jpg?v=1583359990&w=1600&h=900"></img>
                </div>
                <br />
              </div>
            </Grow>
            <Grow in timeout={2000}>
              <div className={classes.introMode}>
                <div className={classes.introModeChild}>
                  <Typography className={classes.headingText} align="left" variant="h5">Our mission</Typography>
                  <br />
                  <Typography variant="subtitle1" paragraph align="justify">
                    From the first day of creation, we prouded to be a customer-centric company. We gurantee to provide you with the best experience!
                  </Typography>
                </div>
                <div>
                  <img className={classes.modeDemo} src="https://australianseller.com.au/wp-content/uploads/2018/07/amazon-customer-service-tips-670x335.jpg"></img>
                </div>

                <br />
              </div>
            </Grow>
          </div>
          <div className={classes.aboutContainer} ref={this.about}>
            <div className={classes.about}>
              <Typography align="left" variant="h5">About this page<span><IconButton onClick={() => window.location = 'https://www.linkedin.com/in/huu-khang-nguyen-bb271a184/'}><LinkedIn></LinkedIn></IconButton>
                <IconButton href="mailto:huukhang1512@gmail.com"><Mail></Mail></IconButton></span></Typography>
              <Divider />
              <br />
              <Typography align="left" variant="subtitle1">Copyright © Amazon {date.getFullYear()}<span>
              </span></Typography>
            </div>
          </div>
          <Tooltip title="Click to get support from our chatbot !" placement="left">
            <Fab variant="extended" color="primary" aria-label="add" className={classes.speedDial}>
              <ContactSupport style={{ marginRight: 1 }} />
            Chatbot
          </Fab>
          </Tooltip>
        </div>
      </div>
    )
  }
}
export default withRouter(withStyles(styles)(Input));
