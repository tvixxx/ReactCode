var TweetBox = React.createClass({

  getInitialState: function(){
    return {
      text: "",
      photoAdded: false
    };
  },
  
  handleChange: function(event){
    this.setState({ text: event.target.value });
  },
  
  togglePhoto: function(event){
    this.setState({ photoAdded: !this.state.photoAdded })
  },
  
  overflowAlert: function(event){
    var beforeOverflowText;
    var overflowText;

    if (this.state.photoAdded) {
    
        beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
        overflowText = this.state.text.substring(140 - 23);
    } else {
    
        beforeOverflowText = this.state.text.substring(140 - 10, 140);
        overflowText = this.state.text.substring(140);
    }
    

    if ( this.remainingCharacters() < 0 ){
        
      return (
        <div className="alert alert-warning">
            <strong>Ops! Too Long:</strong>
            &nbsp;...<span className="bg-success">{ beforeOverflowText }</span>
            <strong className="bg-danger">{ overflowText }</strong>
        </div>
      );
    } else {
      return "";
    }
 
  },
  
  remainingCharacters: function(){
    if (this.state.photoAdded) {
      return (140 - 23 - this.state.text.length);
    } else {
      return (140 - this.state.text.length);
    }
  },
  
  render: function() {
    return (
      <div className="well clearfix">
        { this.overflowAlert() }
        <textarea className="form-control"
                  onChange={this.handleChange}>
        </textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <button className="btn btn-primary pull-right"
                disabled={ this.remainingCharacters() === 140 }>Tweet
        </button>
        <button  className="btn btn-default pull-right"
            onClick={ this.togglePhoto }>
            { this.state.photoAdded ? '✓ Photo Added' : 'Add Photo' }
      </button>
      </div>
    );
  }
  
});

ReactDOM.render(
  <TweetBox />,
  document.getElementById("container")
);
