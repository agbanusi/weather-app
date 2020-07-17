if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(position) {
var lat=position.coords.latitude
var long=position.coords.longitude
//console.log(position.coords.longitude)
fetch('https://fcc-weather-api.glitch.me/api/current?lon='+long+'&lat='+lat)
.then(response=>response.json())
.then(
  data=>{
  class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      temp_change:true
    }
    this.convert=this.convert.bind(this)
    this.toggle=this.toggle.bind(this)
  }
  toggle(){
    this.setState({
      temp_change:!this.state.temp_change
    })
  }
  convert(temp){
    
    if(this.state.temp_change){
      
      return temp+'°C'
    }
    else{
      return +((9*temp/5)+32).toFixed(2) +'°F'
    }
  }
  render() {
      //var weather_data=JSON.stringify(data)
      var pic=data.weather[0].icon
      const loc=data.sys.country
      //console.log(data)
      return (
      <div>
      <h1>A simple Weather App</h1>
      <h4>{loc}</h4>
      <div className='show'>
      <h3>{this.convert(data.main.temp)}</h3>
      <button onClick={this.toggle}> Change unit </button>
      </div>
      <h4>{data.weather[0].main}</h4>
      <img src={pic} />
      </div>
      );
      }
    }
  ReactDOM.render(<Main />, document.getElementById('root'))
  })
});
}
