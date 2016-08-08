var App = React.createClass({

  getInitialState: function(){
    return {
      bgColor: "orangered"
    }
  },
  
  getDefaultProps: function(){
    return {
      greeting: 'Hello World!'
    }
  },
  
  handleColorChange: function(color){
    this.setState({ bgColor: color });
  },
  
  updateBackgroundColor: function(){
    var body = document.querySelector('body');
    body.style.background = this.state.bgColor;
  },
  
  componentDidMount: function(){
    this.updateBackgroundColor();
  },
  
  componentDidUpdate: function(){
    this.updateBackgroundColor();
  },
  
  render: function(){
    return (
      <div className="background-picker">
        <h1>{this.props.greeting}</h1>
        <label> What color?
          <ColorPicker value={this.state.bgColor} onColorChange={this.handleColorChange}/>
        </label>
      </div>
    );
  }
  
});

var ColorPicker = React.createClass({

 	propTypes: {
    value: React.PropTypes.string.isRequired,
    onColorChange: React.PropTypes.func
  },
  
   handleChange: function(e) {
    e.preventDefault();
    var color = e.target.value
    
    // если тому, кто нас (ColorPicker) отобразит, захочется узнать,
    // когда изменился цвет, дайте ему знать
    if (this.props.onColorChange)
      this.props.onColorChange(color);
  },
  
  render: function() {
    return (
      <select value={this.props.value} onChange={this.handleChange}>
        <option value="orangered">orangered</option>
        <option value="teal">teal</option>
        <option value="orange">orange</option>
        <option value="indigo">indigo</option>
        <option value="red">red</option>
      </select>
    )
  }
  
});

ReactDOM.render(<App/>, document.querySelector('#app'));
