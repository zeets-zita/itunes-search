import React from 'react';

// Components to be imported
import SearchBar from './SearchBar';


class Home extends React.Component {
  render() {
    return (
      <div className='landing-page'>
        <SearchBar />
      </div>
    );
  }
}

export default Home;
