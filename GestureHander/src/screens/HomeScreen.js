import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native';

const {width, height}  =Dimensions.get('window')

const listScreen = [
    {
        name: "BallScreen",
        title: 'Ball Move',
        image: require("../assets/images/main/ball.jpg"),
    },
    {
        name: "BoxDecay",
        title: 'Box Decay',
        image: require("../assets/images/main/boxdecay.jpg"),
    },
    {
        name: "BallScreen",
        title: 'Flip Card',
        image: require("../assets/images/main/flipcard.jpg"),
    },
    {
        name: "BallScreen",
        title: 'Ball Move',
        image: require("../assets/images/main/ball.jpg"),
    },
    {
        name: "BallScreen",
        title: 'Ball Move',
        image: require("../assets/images/main/boxdecay.jpg"),
    },
    {
        name: "BallScreen",
        title: 'Ball Move',
        image: require("../assets/images/main/ball.jpg"),
    },
    {
        name: "BallScreen",
        title: 'Ball Move',
        image: require("../assets/images/main/flipcard.jpg"),
    },
];

export default function HomeScreen() {

    const navigation = useNavigation();

  return (
    <View style={{flex: 1 }}>
        {/* ============================================================ */}
        <SafeAreaView/>
        
        {/* ============================================================ */}
        <View style={{}}>
            <FlatList
                data={listScreen}
                numColumns={2}
                ListHeaderComponent={()=>{
                    return(
                        <View style={{paddingLeft: 30, paddingTop: 40, paddingBottom: 16}}>
                            <Text style={{color:'#000', fontFamily: 'Montserrat-Bold', fontSize: 30}}>DEV BEAR</Text>
                        </View>
                    )
                }}
                ListFooterComponent={()=>{
                    return <View style={{height: 30}}/>
                }}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index})=>{
                    return(
                    <MotiView 
                        from={{ opacity: 0, translateY: 40 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        delay={index* 100}
                        exit={{ opacity: 0 }}
                        // style={{backgroundColor:'white'}}
                    >
                        <Pressable onPress={()=> navigation.navigate(item.name)} style={[styles.itemScreenContainer,{marginLeft: index %2 === 0? 16: 10}]}>
                            <Image source={item.image}
                                resizeMode='cover'
                                style={{width: width/2 - 21, height:width/2 - 21, borderRadius: 20}}
                            />
                            <View style={{alignItems:'center', paddingVertical: 6}}>
                                <Text style={{color:'#000', fontFamily: 'Montserrat-Bold', fontSize: 16}}>{item.title}</Text>
                            </View>
                        </Pressable>
                    </MotiView>
                    )
                }}
            />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    itemScreenContainer:{
        width: width/2 - 21,
        // height: 30,
        backgroundColor:'#FFF',
        overflow:'hidden',
        marginBottom: 14,
        borderRadius:  20,
        shadowColor: '#000',  shadowOffset: { width: 10, height: 1 },  shadowOpacity: 0.8, shadowRadius: 2,  elevation: 5,
        // paddingRight:
    }
})