import React from 'react';
import './style.css';

class Favourites extends React.Component {

  getSrcSet = (artworkUrl100) => 
  {
    var artworkUrl = artworkUrl100.replace('100x100bb.jpg', '');

    var artwork1x = artworkUrl + '200x200bb.jpg 1x';
    var artwork2x = artworkUrl + '400x400bb.jpg 2x';
    var artwork4x = artworkUrl + '800x800bb.jpg 4x';
    var artwork8x = artworkUrl + '1600x1600bb.jpg 8x';

    return artwork1x + ", " + artwork2x + ", " + artwork4x + ", " + artwork8x;
  }

  // uses parent class function from router.js
  delete(list) {
      this
          .props
          .delete(list);
  }

  render() {
      return (
          <div className="favourites">
                { this.props.favourites
                  .map((result, index) => <div key={index}>
                   <div className="album-container">
                      <div className="image-container">
                        <img className="img-responsive" srcSet={this.getSrcSet(result.artworkUrl100)} alt={result.collectionName} />
                        <div className="top-left"> { result.kind } </div>
                      <div className="album-text">
                        <h5 className="name">
                          { result.trackName } </h5>
                      <div className="description">
                        <button className="delButton" onClick={() => this.delete(index)}>X</button>
                        <p> { result.artistName }</p>
                      </div>
                      </div>
                      </div>
                    </div>
                </div>)}
          </div>
      );
  }
}

export default Favourites;