import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import LottieView from 'lottie-react-native';

interface Props {
    message: string;
 }
  
  const Alert: React.FC<Props> = ({ message }) => {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      if (message) {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      }
    }, [message]);
  
    if (!show) {
      return null;
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          {/* <LottieView source={require('./animation.json')} autoPlay loop style={styles.animation} /> */}
          <Text style={styles.alertText}>{message}</Text>
          {/* <Icon name="times" size={20} style={styles.closeIcon} onPress={() => setShow(false)} /> */}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 100,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    alertContainer: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    animation: {
      width: 60,
      height: 60,
      marginRight: 10
    },
    alertText: {
      flex: 1,
      fontSize: 16,
      color: '#333'
    },
    closeIcon: {
      color: '#999'
    }
  });

  export default Alert;
