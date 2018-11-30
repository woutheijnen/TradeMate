import React from "react";
import classNames from "classnames";

// Components
import Button from "components/CustomButtons/Button.jsx";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import { ClickAwayListener, Grow, Hidden, MenuItem, MenuList, Paper, Popper } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className={classes.buttonLink}
          >
            <Notifications className={classes.icons} />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <p onClick={this.handleClick} className={classes.linkText}>
                Notification
              </p>
            </Hidden>
          </Button>
          <Popper
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={classNames({ [classes.popperClose]: !open }) + " " + classes.pooperNav}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin: placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                        Mike John responded to your email
                      </MenuItem>
                      <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                        You have 5 new tasks
                      </MenuItem>
                      <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                        You're now friend with Andrew
                      </MenuItem>
                      <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                        Another Notification
                      </MenuItem>
                      <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                        Another One
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
