import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import Title from '../../components/Title';
import styles from './styles';

const RecipeDetails = ({ route }) => {
  const {item} = route?.params || {}; 
  const nutrition = item?.nutrition;
  const instructions = item?.instructions || [];
  delete nutrition?.updated_at;
  const nutKeys = Object.keys(nutrition || {});

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Image style={styles.image} source={{ uri: item?.thumbnail_url }}/>
            <Title style={{marginBottom:32}} text={item?.name}/>

            {nutKeys.map(key => (
                <View key={key} style={styles.row}>
                    <Text style={styles.key}>{key}</Text>
                    <Text style={styles.value}>{nutrition[key]}</Text>
                </View>
            ))}
            <Title style={{marginTop:32, marginBottom: 16}} text="Instructions"/>
            {instructions.map((instruction, index) => (
                <View key={instruction?.id} style={styles.instructionRow}>
                    <Text style={styles.index}>{index+1}</Text>
                    <Text style={styles.instructionText}>{instruction?.display_text}</Text>
                </View>
            ))}

            {!instructions?.length ? (
                <Text style={styles.value}>No instructions Found!!!</Text>
            ): null}
        </ScrollView>
        
    </SafeAreaView>
  )
}

export default React.memo(RecipeDetails);