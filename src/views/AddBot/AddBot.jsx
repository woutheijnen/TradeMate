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
  constructor(props) {
    super(props);
    this.state = {
      botType: 0
    };
  }

  render() {
    const { classes } = this.props;
    const { botType } = this.state;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button
            className={classes.botType}
            color={botType === 1 ? "info" : "primary"}
            size="lg"
            variant="contained"
            onClick={e => this.setState({ botType: 1 })}
          >
            <span className={classes.buttonLabel}>
              Trader bot
              <br />
              <span className={classes.buttonCaption}>
                Increases your stack by trading.
                <br />
                You can have multiple trader bots.
              </span>
            </span>
          </Button>
          <Button
            className={classes.botType}
            color={botType === 2 ? "info" : "primary"}
            size="lg"
            variant="contained"
            onClick={e => this.setState({ botType: 2 })}
          >
            <span className={classes.buttonLabel}>
              Download bot
              <br />
              <span className={classes.buttonCaption}>
                Fetches price data and keeps it up-to-date.
                <br />
                Limited to one. Required for trader and research bots.
              </span>
            </span>
          </Button>
          <Button
            className={classes.botType}
            color={botType === 3 ? "info" : "primary"}
            size="lg"
            variant="contained"
            onClick={e => this.setState({ botType: 3 })}
          >
            <span className={classes.buttonLabel}>
              Research bot
              <br />
              <span className={classes.buttonCaption}>
                Tries new strategies to find a better one.
                <br />
                Limited to one. Trader bot can connect to it.
              </span>
            </span>
          </Button>
        </GridItem>
      </GridContainer>
    );
  }
}

AddBot.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(addBotStyle)(AddBot);
