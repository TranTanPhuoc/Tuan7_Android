import { Animated, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useRef } from "react";
function Screen1(){
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver:true,
              }).start();
    })
    
    return(
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.fadingContainer,{opacity: fadeAnim}]}>
                <Text style={styles.fadingText}>Welcom To Animation React Native</Text>
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
        backgroundColor: "powderblue"
      },
      fadingText: {
        fontSize: 28
      },
    
  });
  
export default Screen1;