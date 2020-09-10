import React from "react";
import { withRouter } from "react-router-dom";

//UI
import {
    Button, Tooltip, Typography, AppBar, Card, CardHeader, IconButton,
    Avatar, ListItemText, ListItem, Drawer, Divider, Paper, Grow, Container
} from '@material-ui/core';
import { CheckCircleOutline, LinkedIn, Mail, Menu, Close } from '@material-ui/icons';
// import Alert from '@material-ui/lab/Alert';
// import {Close,Share,FileCopyOutlined, Refresh} from '@material-ui/icons';\
import { withStyles } from "@material-ui/core/styles";
import { throttle } from "lodash";
import { styles } from "./UIComponents"
class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            up: false,
            navigation: ["About", "Quality Control", "Train the model","About"],
            show: false,
        };
    }

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
        switch(content){
          case("Quality Control"):
            this.props.history.push("/input");
            break;
          case("About"):
            this.props.history.push("/about");
            break;
          case("Train the model"):
            this.props.history.push("/train");
            break;
          case("Help"):
            this.props.history.push("/help");
            break;
        }
    }
    render() {
        const { productList, navigation, up } = this.state
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
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" width="25px" height="25px" className={classes.logo} alt="logo" onClick={() => { this.props.history.push("/") }}></img>
                        {navigation.map((e, i) =>
                            <IconButton style={{ borderRadius: 0 }} key={i} onClick={() => this.handleOnClickScroll(e)}>
                                <Typography variant="body2" className={classes.appBarText}>{e}</Typography>
                            </IconButton>)}
                    </div>
                    <div className={classes.headAvatarContainer}>
                        <Button className={classes.button} style={{ margin: 0 }}>Sign in</Button>
                        <Menu onClick={this.toggleDrawer(true)} className={classes.menuButton} />
                    </div>
                </AppBar>
                <Grow in>
                    <div className={classes.mappingItemContainer}>
                        <h1 style={{ textAlign: "center", width: "100%" }}>Help</h1>
                        <Typography variant="subtitle1" align="justify" paragraph>
                            Step 1 : Click the "Quality control" button on the navigation bar
                            <br/>
                            Step 2 : Click "Place an order" on any product
                            <br/>
                            Step 3 : Wait for the model to setup, when the camera container show up, present the AirPod in front of the camera
                            <br/>
                            Step 4 : Wait for order being scan 5 times on each sides, rotated if the program ask to
                            <br/>
                            Step 5 : After finish all the steps and the scaning proccess finished, a dialog will pop up to notify the condition of the product
                    </Typography>
                    </div>
                </Grow>
            </div>
        )
    }
}
export default withRouter(withStyles(styles)(Help));

