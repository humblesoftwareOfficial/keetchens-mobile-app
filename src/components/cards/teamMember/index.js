import { View, Text } from 'react-native'
import React from 'react'
import { TEAM_MEMBER_CARD_STYLE } from '../../../styling/cards'
import MemberInfos from './MemberInfos'

export default function TeamMember({ data}) {
  return (
    <View style={TEAM_MEMBER_CARD_STYLE.container}>
      <MemberInfos user={data}/>
    </View>
  )
}