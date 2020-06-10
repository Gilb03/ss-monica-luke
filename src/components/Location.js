import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from 'lodash';


const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={15}
      defaultCenter={{ lat: 39.0976281, lng: -84.513433 }}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(marker)}
        />
      ))}
    </GoogleMap>
  ));


  export default class Location extends React.Component {
    render(){
      <div id="location" style={{ 'backgroundColor': 'white', 'textAlign': 'center' }} className="section location">
    <h2 className="title is-2">Locations</h2>
    <div className="columns">
      <div className="column">
        <div className="block">
          <h3>645 Rhode Island Street</h3>
          <h4><a class="btn btn-primary" href="https://bit.ly/2OdB3ji" target="_blank">Cincinnati Registration</a></h4>
          <a target="_blank" style={{ "color": "black" }} href="https://goo.gl/maps/eWq3GswALPq">1311 Vine St, Cincinnati, OH 45202</a>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71014.21228393703!2d-84.53633066674713!3d39.16517939131588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3fd94c8f02b%3A0x3caee5bfc65866b3!2sUnion+Hall!5e0!3m2!1sen!2sus!4v1521638612498" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
        </div>
      </div>
    </div>
    }
  }
</div>}}
