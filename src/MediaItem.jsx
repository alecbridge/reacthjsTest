import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

  var itemStyle ={
    display:'block',
    clear: 'left',
    marginTop: 15,
    marginLeft: 16,
    color: 'blue'
  }
  
  var gameStyle ={
    float: 'right',
    marginRight: 12,
    width: 60,
    textAlign: 'center',
    background: 'red',
    color: 'white',
    fontSize: '14',
    borderRadius: 5 
  }
   var seriesStyle ={
    float: 'right',
    marginRight: 12,
    width: 60,
    textAlign: 'center',
    background: 'blue',
    color: 'white',
    fontSize: '14', 
    borderRadius: 5  
  }
  
  var movieStyle ={
    float: 'right',
    marginRight: 12,
    width: 60,
    textAlign: 'center',
    background: 'black',
    color: 'white',
    fontSize: '14',
    borderRadius: 5  
  }

export default class MediaItem extends React.Component {
   render() {
     var typeStyle;   
   switch(this.props.type) {
    case 'movie':
        typeStyle = movieStyle;
        break;
    case 'series':
        typeStyle = seriesStyle;
        break;
    default:
        typeStyle = gameStyle;
   }   
    return (
       <div style={itemStyle}>
         <a href={"http://www.imdb.com/title/"+this.props.id+"/?ref_=fn_al_tt_1"}>{this.props.title}</a><span style={typeStyle}>{this.props.type.toUpperCase()}</span>
       </div>
     )
   }
}