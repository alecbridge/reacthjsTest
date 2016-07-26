import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var mediaSubStyle={
      display: 'inlineBlock',
      float: 'right',
      position: 'absolute',
      marginTop: '16px',
      marginLeft: '12px',
      width: 100,
      fontSize: 22
    } 

export default class MediaSubmit extends React.Component {
  constructor(props){
    super(props);
    this.mediaSubStyle=mediaSubStyle 
  }

   render() {
     return (
         <input type="button" style={this.mediaSubStyle} value="Submit" onClick={this.props.handleSubmitClick}></input>
     )
   }
}
