import { useEffect } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const PizzaDetailScreen = () => {
    
    let flag:number = 12;
    // flag = 'Hello';

 

    function myFun(myDocument:number):number{
        console.log('I am testing JS', myDocument);

        let arr:(number|string| boolean)[] = [12,'32',false,'gh'];
        console.log(arr);
        arr.push(34);
        arr.push('34');
        arr.push('true');

        return 23;
    }

    useEffect(()=>{
        myFun(12);
    },[])

    return (
        <View>
            <Text style={{fontSize:50}}> PizzaDetailScreen </Text>    
        </View>
    )
}

export default PizzaDetailScreen;

const styles = StyleSheet.create({
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode:'contain'
    }
  });