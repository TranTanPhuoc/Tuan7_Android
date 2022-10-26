import { Animated, Image, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useRef } from "react";
function Screen3(){
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver:true,
              }).start();
    })
    
    return(
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.fadingContainer,{opacity: fadeAnim}]}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../assets/zalo.jpg')} style={{height:120,width:120}} />
                </View>
                <Text style={styles.fadingText}>Welcom To Zalo</Text>
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    fadingContainer: {
        padding: 20,
      },
      fadingText: {
        fontSize: 46,
        marginTop:30,
      },
    
  });
  
export default Screen3;