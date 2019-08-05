import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//import Components to be rendered here
import LandingPage from './LandingPage';
import AlbumList from './Results/AlbumList';
import Favourite from './Favourites';
import NavBar from './NavBar'


class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favourites: []
    }
  }

addFavourite = (fav) => {
  this.setState({
    favourites: [...this.state.favourites, fav]
  })
}

delete = (index) => {
  // copy current array state
  var array = [...this.state.favourites];
    array.splice(index, 1);
  // set state array to the new state
  this.setState({favourites: array})
}


render() {
    return(
    <BrowserRouter>
      <NavBar />
      <div>
        <Route component= { LandingPage } exact path='/' />
        <Route exact path='/search/:name/:type' render={() =>
            <AlbumList
              addFavourite = {this.addFavourite}
            />}
          />
          <Route exact path ='/favourites' render ={() =>
            <Favourite
            favourites={this.state.favourites} 
            delete={this.delete}
            />}
          />
      </div>
    </BrowserRouter>
    )
  }
}  
export default Router;