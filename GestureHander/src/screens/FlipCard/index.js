import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComp from './components/CardComp';
import { useSharedValue } from 'react-native-reanimated';


const LENGTH_CARD  = 3;

export default function FlipCard() {

  const firstCard = useSharedValue(0);
  const secondCard = useSharedValue(1);
  const thirdCard = useSharedValue(2);

  const [indexOK, setIndexOK]  = React.useState(true);

  const [listIndexCard, setListIndexCard]  = React.useState([0 ,1 ,2]);

  const changeIndexCard = (index) =>{
    console.log(index);
    let listTam = [];
    for (let i=0; i < LENGTH_CARD; i++){
        if ( listIndexCard[i] - 1 < 0 ) {
          listTam.push(2)
        }
        else {
          listTam.push(listIndexCard[i]  - 1)
        }
    }
    // console.log(listTam);
    setListIndexCard(listTam)
    console.log('========================, ',listTam)
  }

  return (
    <View style={{flex: 1, backgroundColor:'black'}}>
        <SafeAreaView/>
        
        <CardComp color={'blue'} 
          cardId = {2}
          listIndexCard = {listIndexCard}
          changeIndexCard={changeIndexCard}
        />

        <CardComp color={'green'} 
          cardId = {1}
          listIndexCard = {listIndexCard}
          changeIndexCard={changeIndexCard}
        />  

        <CardComp color={'pink'} 
          cardId = {0}
          listIndexCard = {listIndexCard}
          changeIndexCard={changeIndexCard}
        />
    </View>
  )
}

const styles = StyleSheet.create({

})
