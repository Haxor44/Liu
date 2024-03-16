import { View,TouchableOpacity, Text, SafeAreaView, Image, FlatList } from 'react-native';
import React, { useContext, useEffect,useState } from 'react';
import styles from './styles';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Categories from '../../components/Categories';
import RecipeCard from '../../components/RecipeCard';
import Card from '../../components/Card';
import { HealthyRecipeContext, RecipeContext } from '../../../App';

const Home = ({ navigation }) => {

  const [tags,setTags] = useState([]);
  const [selectedTag,setSelectedTag] = useState();
  const [filteredRecipes,setFilteredRecipes] = useState(recipe);
  const {recipe} = useContext(RecipeContext);
  const {healthyRecipe} = useContext(HealthyRecipeContext);

  useEffect(() => {
    const tagsList = [];

    recipe?.forEach(rec => {
        rec?.tags?.forEach(tag => {
            if (!tagsList?.includes(tag?.name)) {
                tagsList?.push(tag?.name)
            }
        })
    })
    setTags(tagsList)
}, [recipe])



useEffect(() => {
  if (selectedTag) {
      const filteredItems = recipe?.filter(rec => {
          const tag = rec?.tags?.find(t => t?.name === selectedTag);
          return !!tag
      })
      setFilteredRecipes(filteredItems)
  } else {
      setFilteredRecipes(recipe)
  }
}, [selectedTag, recipe])

  return (
    <SafeAreaView style={styles.container}>
        <Input pressable onPress={()=> navigation.navigate("Search")}/>
        <Title text="Featured Recipes"/>  
        <FlatList
          horizontal
          data={healthyRecipe}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item?.id)}
          style={{marginHorizontal:-24}}
          renderItem={({item,index}) => (
            <RecipeCard 
              style={index === 0 ? { marginLeft: 24 } : {}}
              title={item?.name}
              onPress={()=> navigation.navigate("RecipeDetails",{item})}
              time={item?.cook_time_minutes}
              image={item?.thumbnail_url}
              rating={item?.user_ratings?.score}
              author={item?.credits?.length 
                  ? { name: item?.credits[0]?.name, image: item?.credits[0]?.image_url } 
                  : null}
            />
          )}
        />
        
        <Categories categories={tags} selectedCategory={selectedTag} onCategoryPress={setSelectedTag}/>
        <FlatList
          horizontal
          data={filteredRecipes}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item?.id)}
          style={{marginHorizontal:-24}}
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

export default React.memo(Home);