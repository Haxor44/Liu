import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Rating from '../Rating'

const RecipeCard = ({ title, style, author, rating, time,image,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        <View style={styles.row}>
          <View style={{flex:1}}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Rating rating={rating}/>
          </View>
            <Image style={styles.image} source={{ uri: image}} />
        </View>

        
         
      
      {author ? (
         <View style={[styles.row,{justifyContent:"space-between", marginTop:8}]}>
          <Image source={{ uri: author?.image }} style={styles.authorImage}/>
          <Text style={styles.footerText}>By {author?.name}</Text>
       </View>
      ): <View/>}
      {time ? (
            <View style={styles.row}>
              <Image source={require("../../../assets/timer.png")} style={styles.authorImage}/>
              <Text style={styles.timerIcon}>{time}</Text>
          </View>
        ) :<View/>}
    </TouchableOpacity>
    
  )
}

export default React.memo(RecipeCard)