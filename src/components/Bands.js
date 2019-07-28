import React,{Component} from 'react';

class Bands extends Component{
  render(){
    return(
      <div>
        <ul>
          {this.props.bands.map(band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default Bands
