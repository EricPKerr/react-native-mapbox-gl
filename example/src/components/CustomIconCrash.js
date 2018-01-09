import React from 'react';
import { Text } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import BaseExamplePropTypes from './common/BaseExamplePropTypes';
import Page from './common/Page';
import Bubble from './common/Bubble';

import sheet from '../styles/sheet';

import images from '../assets';

const styles = MapboxGL.StyleSheet.create({
  icon: {
    iconImage: images['example'],
    iconAllowOverlap: true,
    iconSize: 0.5,
  },
});

const POINT = [-73.970895, 40.723279];

class CustomIconCrash extends React.Component {
  static propTypes = {
    ...BaseExamplePropTypes,
  };

  constructor (props) {
    super(props);

    this.state = {
    };
  }

  render () {
    return (
      <MapboxGL.MapView
          zoomLevel={9}
          ref={(c) => this._map = c}
          centerCoordinate={POINT}
          style={sheet.matchParent}>

          <MapboxGL.ShapeSource id='symbolLocationSource' shape={{
            "type": "Point",
            "coordinates": POINT
          }}>
            <MapboxGL.SymbolLayer
              id='symbolLocationSymbols'
              style={styles.icon}
            />
          </MapboxGL.ShapeSource>

      </MapboxGL.MapView>
    );
  }
}

export default CustomIconCrash;
