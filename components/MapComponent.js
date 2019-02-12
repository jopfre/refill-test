import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';

import MapView, { Marker, Callout } from 'react-native-maps';

class MapComponent extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    const { markers } = this.props
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          region={{
            latitude: 51.4545,
            longitude: -2.5879,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}>
          { 

            Object.keys(markers).map(function(key, index) {
              console.log(markers[key]);
              return (
                <Marker key={ key } coordinate={ markers[key].coordinates }>
                  <Callout>
                    <Text>{ markers[key].title }</Text>
                  </Callout>
                </Marker> 
              )
            })
            
          }
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

const mapStateToProps = state => ({
  markers: state.marker.markers
});

const mapDispatchToProps = dispatch => ({
  getMarkers
});

export default connect(mapStateToProps)(MapComponent);