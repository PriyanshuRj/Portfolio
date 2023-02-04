import React from 'react';
import Header from '../../components/header/Header';
import Greeting from '../../containers/greeting/Greeting';
import About from '../../containers/about/about';
import Footer from '../../components/footer/Footer';
import PropTypes from 'prop-types';

function Home(props) {
  console.log(props);
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <About theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}
Home.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func
};
export default Home;
