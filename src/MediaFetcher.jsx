import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaList from './MediaList.jsx';

//Pulls Data from omdb, keep at top
const omdb = function omdb(query) {
  return $.ajax({
    url: "http://www.omdbapi.com/",

    // The name of the callback parameter, as specified by the YQL service
    jsonp: "callback",

    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",

    // Tell YQL what we want and that we want JSON
    data: Object.assign({}, { r: "json" }, query)
  })
};

export default class MediaFetcher extends React.Component {
constructor(props){
    super(props);
    this.state = {
      media: []
    };
    this.getMedia(this.props.query);
  }
  getMedia(query) {
    
    omdb({s: query}).then((response) => {
      if (response && response.Response === "True") {
        //console.log(response);
        this.setState({ media: response.Search });
        //console.log(this.state);
      } else if (response && response.Response === "False") {
        // No media was found
      } else {
        console.error('Unknown error connecting to omdbapi.');
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.query !== nextProps.query) {
      this.getMedia(nextProps.query);
    } 
  }
  render() {
    return (
      <div>
        <MediaList media={this.state.media} />
      </div>
    )
  }
}