import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var searchBoxDescriber = {
  display: 'inlineBlock',
  fontSize: 24,
  fontFamily: 'arial',
  float: 'left',
  margin: '10px 5px 8px 10px'  
}

var mediaInputStyle={
  width: 230,
  display: 'inlineBlock',
  lineHeight: '17px'
}

export default class MediaSearchInput extends React.Component {
   render() {
     return (
        <label style = {searchBoxDescriber}> Media Search: <input  type="text" onChange={this.props.handleSearchInputChange} style={mediaInputStyle} placeholder="ex: Ghostbusters"></input>
        </label>  
     )
   }
}