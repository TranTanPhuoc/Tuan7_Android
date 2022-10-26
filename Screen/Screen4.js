import { Animated, Dimensions, Easing, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useRef, useState } from "react";
function Screen4(){
    const navigation = useNavigation();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const animatedValue1 = useRef(new Animated.Value(0)).current;
    const animatedValue2 = useRef(new Animated.Value(0)).current;
    const [isEnd, setisEnd] = useState(true);
    const [isRun,setRun] = useState(false);
    const hanldPressReset= ()=>{
        setRun(false);
        setisEnd(false);
        startAnimation(isEnd ? 0 : 0);
        startAnimation1(isEnd ? 0 : 0);
        startAnimation2(isEnd ? 0 : 0);
    }
    const hanldPress= ()=>{
        setRun(true);
    }
    
    const startAnimation = toValue => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }
    const startAnimation1 = toValue => {
        Animated.timing(animatedValue1, {
            toValue,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }
    const startAnimation2 = toValue => {
        Animated.timing(animatedValue2, {
            toValue,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }
    useEffect(() => {
        if(isRun){
            startAnimation(isEnd ? 1 : 1);
            startAnimation1(isEnd ? 1 : 1);
            startAnimation2(isEnd ? 1 : 1);
        }
    }, [isEnd,isRun]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Dimensions.get('window').height - 200],
        extrapolate: 'clamp',

    })
    const translateX = animatedValue2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Dimensions.get('window').width - 100],
        extrapolate: 'clamp',
    })
    return(
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.square, { transform: [{ translateY }] }]}>

            </Animated.View>
            <Animated.View style={[styles.square, { transform: [{ translateX }] }]}>

            </Animated.View>
            <Animated.View style={[styles.square, { transform: [{ translateY }] }]}>

            </Animated.View>
            
            <View style={styles.bottonContainer}>
                <TouchableOpacity style={styles.bottom} onPress={hanldPress}>
                    <Text style={{fontSize:20,}}>Run</Text>
                </TouchableOpacity>
                
                <View style={{marginTop:20,}}>
                    <TouchableOpacity style={styles.bottom} onPress={hanldPressReset}>
                        <Text style={{fontSize:20,}}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    
    bottonContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    bottom:{
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:40,
        paddingRight:40,
        backgroundColor:"#C6E2FF",
        borderRadius:20,
    },
    square: {
        width: 40,
        height: 40,
        backgroundColor: 'red',
        margin:10,
    }
  });
  
export default Screen4;