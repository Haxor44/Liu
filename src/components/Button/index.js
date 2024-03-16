import { TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image source={require("../../../assets/arrowRight.png")} style={styles.icon}/>
    </TouchableOpacity>
  )
}

export default React.memo(Button);