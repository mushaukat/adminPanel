import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

 
export class MapContainer extends Component {

  render(props) {
    return (
      <div>
      <p>latitude: {this.props.latitude}</p>
       <p> longitude: {this.props.longitude}</p>
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        
        
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD6lTi1CA2nwRtS0oq1DdZbzC3o56Y9CCE')
})(MapContainer)