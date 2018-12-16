import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Button from "../../components/CustomButtons/Button";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";

// Style
import addBotStyle from "../../assets/jss/material-dashboard-react/views/addBotStyle";

class AddBot extends Component {
  render() {
    const { classes } = this.props;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button className={classes.botType} color="primary" size="lg" variant="contained">
            <span className={classes.buttonLabel}>
              Trader bot
              <br />
              <span className={classes.buttonCaption}>
                Increases your stack by trading.
                <br />
                You can have multiple of these.
              </span>
            </span>
          </Button>
          <Button className={classes.botType} color="primary" size="lg" variant="contained">
            <span className={classes.buttonLabel}>
              Download bot
              <br />
              <span className={classes.buttonCaption}>
                Fetches price data and keeps it up-to-date.
                <br />
                You can use only one, required for trader and research bots.
              </span>
            </span>
          </Button>
          <Button className={classes.botType} color="primary" size="lg" variant="contained">
            <span className={classes.buttonLabel}>
              Research bot
              <br />
              <span className={classes.buttonCaption}>
                Tries new strategy to find a better one.
                <br />
                You can use only one, trader bot can connect to this.
              </span>
            </span>
          </Button>
        </GridItem>
      </GridContainer>
    );
  }
}

AddBot.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(addBotStyle)(AddBot);
