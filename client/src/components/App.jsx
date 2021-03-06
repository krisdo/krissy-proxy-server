import React from 'react';
import Topbar from './Topbar.jsx';
import StickyNav from './StickyNav.jsx';
import { Container, Grid } from 'semantic-ui-react';
// import Footer from './Footer.jsx';
// import InformationStatic from './InformationStatic.jsx';
class AirBrb extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Topbar />
        <Container className={'container-photos'} style={{ justifyContent: 'center', paddingBottom: '48px' }}>
          <Grid
            col={1}
            style={{
              paddingTop: '34px',
              paddingBottom: '0px',
              justifyContent: 'center',
            }}
          >
            <Grid.Row id={'photos'} style={{ padding: '0px' }} />
          </Grid>
          </Container>
       
        <StickyNav id={'nav'} />
        {/* <InformationStatic />
        <Footer /> */}
 
      </div>
    );
  }
}

export default AirBrb;
