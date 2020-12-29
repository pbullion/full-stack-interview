import React, { Component, Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '0px',
            margin: 0,
          }}
          fluid={true}
        >
          <h1>hello</h1>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(HomePage);
