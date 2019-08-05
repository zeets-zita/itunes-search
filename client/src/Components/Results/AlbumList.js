import React from 'react';
import axios from 'axios';
import Album from './Album';
import { withRouter } from 'react-router';
import ScrollUpButton from "react-scroll-up-button";

class AlbumList extends React.Component{
  constructor(props){
    super(props);
      this.state= {
        list: []
    }
  }

  callAPI() {
    axios.get(`/search/${this.props.match.params.name}/${this.props.match.params.type}`).then(res=> {
      this.setState({ list: res.data.results });
    });
  }

  componentWillMount() {   
    this.callAPI();
   }


  render(){
    const searchResults = this.state.list.map(result => {
      return(
        <Album
        key = {result.trackId}
        artworkUrl100 = {result.artworkUrl100}
        collectionName = {result.collectionName}
        kind = {result.kind}
        trackName = {result.trackName}
        artistName = {result.artistName}
        addFavourite = {this.props.addFavourite}
      />
      )
    });

    return(

      <div className='container'>

        <div className='results-container'>
          { searchResults }
        </div>
        <ScrollUpButton />
      </div>

    )
  }
}

export default withRouter(AlbumList);