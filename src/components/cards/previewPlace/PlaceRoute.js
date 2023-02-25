import { View, Text } from 'react-native'
import React from 'react'
import { PREVIEW_PLACE_CARD } from '../../../styling/cards'
import { Entypo } from '@expo/vector-icons'
import { APP_COLORS } from '../../../styling/system'

import MapboxGL from '@rnmapbox/maps';

export default function PlaceRoute({ position = null }) {
  return (
    <View style={PREVIEW_PLACE_CARD.route_container}>
      <View style={PREVIEW_PLACE_CARD.map_icon}>
        <Entypo name="map" size={24} color={APP_COLORS.PRIMARY_COLOR.color} />
      </View>
    </View>
  )
}