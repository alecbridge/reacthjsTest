
  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import $ from 'jquery';
  import MediaSearchInput from './MediaSearchInput.jsx';
  import MediaSubmit from './MediaSubmit.jsx';
  import MediaFetcher from './MediaFetcher.jsx';

  class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      searchQueryValue: ''
    };
  }
  handleSubmitClick(e) {
    this.setState({query: this.state.searchQueryValue }
    )};
  
  handleSearchInputChange(e) {
    this.setState({ searchQueryValue: e.target.value})
  }
  
  render() {
    return (
      <div>
        <MediaSearchInput handleSearchInputChange={this.handleSearchInputChange.bind(this)} />
        <MediaSubmit handleSubmitClick={this.handleSubmitClick.bind(this)} />
        <MediaFetcher query={this.state.query}/>
      </div>
    )
  }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
