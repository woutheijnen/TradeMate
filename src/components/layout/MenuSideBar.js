import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";

// Actions
import { toggleSideBar } from "../../actions/uiActions";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const drawerWidth = 280;

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  drawerPaper: {
    overflowX: "hidden",
    position: "relative",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: "rgb(11, 12, 16)",
    borderWidth: "0 1.5px 0 0",
    borderStyle: "solid",
    borderColor: "rgb(0, 51, 102)",
    zIndex: 0,
    boxSizing: "content-box",
    height: "100vh"
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: 50,
    borderWidth: "0 1.5px 0 0",
    borderStyle: "solid",
    borderColor: "rgb(0, 51, 102)",
    height: "100vh"
  },
  content: {
    width: "100%"
  },
  formRoot: {
    padding: "20px 26px",
    paddingBottom: 16
  }
});

class MenuSideBar extends Component {
  render() {
    const { classes, children, ui, toggleSideBar } = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classnames(
              classes.drawerPaper,
              !ui.sideBarExpanded && classes.drawerPaperClose
            )
          }}
          open={ui.sideBarExpanded}
        >
          <div className="icon-container" onClick={toggleSideBar}>
            {ui.sideBarExpanded && <AddIcon />}
            {!ui.sideBarExpanded && <RemoveIcon />}
          </div>
          {ui.sideBarExpanded && <div className={classes.formRoot}>hello</div>}
        </Drawer>
        <main className={classes.content}>{children}</main>
      </div>
    );
  }
}

MenuSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  ui: PropTypes.object.isRequired,
  toggleSideBar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ui: state.ui
});

export default connect(
  mapStateToProps,
  { toggleSideBar }
)(withStyles(styles)(MenuSideBar));
