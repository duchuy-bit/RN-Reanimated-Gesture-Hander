import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react';

import Animated,{ interpolate, runOnJS, useAnimatedStyle, useSharedValue, withDecay, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const {width, height}  =Dimensions.get("window");

const SIZE_HEIGHT  = 180;
const SIZE_WIDTH  = width *.8;

export default function CardComp(props) {
    const color  = props?.color;
    // const indexCard  = props?.indexCard;
    const listIndexCard = props?.listIndexCard;

    const cardId  = props?.cardId;

    // console.log(listIndexCard)

    const translationY = useSharedValue(0);
    const rotation = useSharedValue(0);

    const isRight = useSharedValue(true);

    const gesture = Gesture.Pan().runOnJS(true)
    .onBegin((event) => {
      if (listIndexCard[cardId] !==0) return;     // chỉ cho phép lướt card đầu tiên

      if ( event.x > SIZE_WIDTH / 2 ) isRight.value = true;
      else isRight.value = false;
    })
    .onUpdate((event) => {
      if (listIndexCard[cardId] !==0) return;     // chỉ cho phép lướt card đầu tiên

      translationY.value = event.translationY;
      rotation.value = event.translationY;
    })
    .onEnd((event) => {
      if (listIndexCard[cardId] !==0) return;     // chỉ cho phép lướt card đầu tiên

      runOnJS(props?.changeIndexCard(cardId));

      translationY.value = withDecay({
        velocity: event.velocityY,
        rubberBandEffect: true,
        clamp: [ 0, 0 ],
      })
      
    })
    .onFinalize((event) => {
      if (listIndexCard[cardId] !==0) return;     // chỉ cho phép lướt card đầu tiên

      rotation.value = withTiming(-1280,{
        duration: 400
      })
    });

    const styleCard = useAnimatedStyle(()=>{
        return{
            backgroundColor:color,
            height: SIZE_HEIGHT,
            width: SIZE_WIDTH,
            borderRadius: 16,
            position:'absolute',
            zIndex: withTiming(
              interpolate(listIndexCard[cardId], [0, 1, 2], [10, 9, 8])
            ),
            bottom: withTiming(150 + listIndexCard[cardId]* 25),
            alignSelf:'center',
            justifyContent:'flex-end',
            transform: [
              { translateY: translationY.value },
              { rotate: `${interpolate(rotation.value,  [0, 1280], isRight.value? [0, 6.28]: [0, -6.28])}rad`},
              { scale: withTiming(
                  interpolate(listIndexCard[cardId], [0, 1, 2], [1, 0.9, 0.8]
                ))
              }
            ]
        }
    })



  return (
    <GestureDetector  gesture={gesture}>
        <Animated.View  style={styleCard}>
          <View style={{flexDirection:'row', justifyContent:"space-evenly", alignItems:'center', width:"80%", alignSelf:'center', marginBottom: 30}}>
            <View style={{height: 65, width: 65, borderRadius: 100, backgroundColor:'black', opacity: 0.4}}/>
            <View >
              <View style={{height: 20, width:SIZE_WIDTH* .5 , backgroundColor:"#000", opacity: 0.4, marginBottom: 10, borderRadius: 10}}/>
              {/* <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>{cardId}</Text> */}
              <View style={{height: 20, width:SIZE_WIDTH* .35 , backgroundColor:"#000", opacity: 0.4, borderRadius: 10}}/>
            </View>
          </View>
        </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({})