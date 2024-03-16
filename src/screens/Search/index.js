import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Input from '../../components/Input';
import styles from './styles';
import { RecipeContext } from '../../../App';
import Card from '../../components/Card';

const Search = ({navigation}) => {
  const {recipe} = useContext(RecipeContext);
  const [filteredRecipes,setFilteredRecipes] = useState(recipe);
  const [keyWord,setKeyword] = useState("");

  useEffect(()=> {
    if (keyWord?.length > 2) {
      const filteredItems = recipe?.filter(rec => rec?.name?.toLowerCase()?.includes(keyWord?.toLowerCase()));
      setFilteredRecipes(filteredItems);
    } else {
      setFilteredRecipes([]);
    }
    
  },[keyWord])
  return (
    <SafeAreaView style={styles.container}>
      <Input autoFocus onChangeText={setKeyword} value={keyWord} />

      <FlatList 
        data={filteredRecipes}
        numColumns={2}
        style={{flexGrow:1}}
        key={item => String(item?.id)}
        renderItem={({item,index}) => (
          <Card 
              style={index === 0 ? { marginLeft:24 } : {}}
              title={item?.name}
              onPress={()=> navigation.navigate("RecipeDetails",{item})}
              servings={item?.num_servings}
              image={item?.thumbnail_url}
              rating={item?.user_ratings}
              author={item?.credits?.length ? {name: item?.credits[0], image:item?.credits[0]?.image_url}: null}
            />
        )}
      />
    </SafeAreaView>
  )
}

export default React.memo(Search);