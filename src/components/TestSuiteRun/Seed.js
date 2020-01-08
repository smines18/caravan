import React from 'react';
import {connect} from "react-redux";
import {TEST_FIXTURES} from "unchained-bitcoin";

import {
  Grid,
} from '@material-ui/core';

const bip39Phrase = TEST_FIXTURES.bip39Phrase;

class SeedBase extends React.Component {

  render() {
    return (
      <Grid container>
        <Grid item md={3}>
          <ol>
            {bip39Phrase.slice(0,6).map(this.renderSeedWord)}
          </ol>
        </Grid>
        <Grid item md={3}>
          <ol start={7}>
            {bip39Phrase.slice(6,12).map(this.renderSeedWord)}
          </ol>
        </Grid>
        <Grid item md={3}>
          <ol start={13}>
            {bip39Phrase.slice(12,18).map(this.renderSeedWord)}
          </ol>
        </Grid>
        <Grid item md={3}>
          <ol start={19}>
            {bip39Phrase.slice(18,24).map(this.renderSeedWord)}
          </ol>
        </Grid>
      </Grid>
    );
  }

  renderSeedWord(word, i) {
    return (<li key={i}><code>{word}</code></li>);
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = {
};

const Seed = connect(mapStateToProps, mapDispatchToProps)(SeedBase);

export {Seed}
