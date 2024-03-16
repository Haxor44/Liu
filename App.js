import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/Splash';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from "./src/screens/Search";
import Home from "./src/screens/Home";
import React,{ useState,useEffect, } from "react";
import { getRecipeList } from "./src/api";
import RecipeDetails from "./src/screens/RecipeDetails";

const Stack = createStackNavigator();
export const RecipeContext = React.createContext();
export const HealthyRecipeContext = React.createContext(); 
const BackButton = (props)=>{
  return(
    <Pressable onPress={props.onPress}>
      <Image style={styles.back} source={require("./assets/back.png")}/>
    </Pressable>
  )
}

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"#ffffff",
  }
}
export default function App() {
  const [recipe,setRecipe]= useState([]);
  const [healthyRecipe,setHealthyRecipe]= useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handleFetchRecipe(null, '15')
      setRecipe(rec)
      const healthyRec = await handleFetchRecipe('healthy', '5')
      setHealthyRecipe(healthyRec)
    })()
  }, [])


  const handleFetchRecipe= async (tags, size) => {
    try {
      const recipes = await getRecipeList(tags, size)
      //console.log(recipes);
      return recipes?.data?.results;
    } catch (e) {
      console.log('error fetching recipes :>> ', e);
    }
  }
  return (
    <HealthyRecipeContext.Provider value={{ healthyRecipe, setHealthyRecipe }}>
      <RecipeContext.Provider value={{ recipe, setRecipe }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator  screenOptions={{ headerTitleAlign:"center", headerShadowVisible:false}}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown:false }}/>
            <Stack.Screen name="Home" component={Home} options={{headerLeft:null, gestureEnabled:false}}/>
            <Stack.Screen name="Search" component={Search} options={{headerLeft:(props)=> <BackButton {...props}/>}}/>
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{headerLeft:(props)=> <BackButton {...props}/>, title:""}} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipeContext.Provider>
    </HealthyRecipeContext.Provider>
    
  );
}


const styles = StyleSheet.create({
  back:{
    width:24,
    height:24,
    margin:16,
  }
})