import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaItem from './MediaItem.jsx'

  var listStyle ={
    backgroundColor:'gainsboro',
    height: 400,
    width: 580,
    border: '3px solid black',
    borderRadius: 20, 
    boxShadow: '7px 7px 29px 6px rgba(0,0,0,0.42)'
  }
  
  var myListDescStyle={
    float:'left',
    clear:'left',
    marginLeft: 10,
    marginBottom: 8,
    color: 'red',
    fontFamily: 'Arial',
    fontSize: 18   
  }

export default class MediaList extends React.Component {
  render() {
    return (
      <div style={listStyle}>
        <span style = {myListDescStyle}>Media List</span>
        {this.props.media.map(function(item) {
          return (
            <MediaItem title={item.Title} type={item.Type} id={item.imdbID} />
          )   
        })}
      </div>
    )
  }
}