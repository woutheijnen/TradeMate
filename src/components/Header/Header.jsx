import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// Components
import HeaderLinks from "./HeaderLinks.jsx";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import { AppBar, Hidden, IconButton, Toolbar, Typography } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

import headerStyle from "assets/jss/material-dashboard-react/components/headerStyle.jsx";

function Header({ ...props }) {
  const { classes, color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Typography className={classes.title}>Initializing data</Typography>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton color="inherit" aria-label="open drawer" onClick={props.handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
