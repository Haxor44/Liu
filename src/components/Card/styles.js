import { StyleSheet,Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        borderRadius:12,
        backgroundColor:"rgba(217,217,217,0.5)",
        padding:10,
        width:width * 0.4,
        marginVertical:32,
        marginRight:16,
        marginTop:60
    },
    title:{
        fontSize:16,
        color:colors.grey,
        fontWeight:"bold",
        textAlign:"center",
        marginVertical:16
    },
    label:{
        color:colors.lightGrey2,
        fontSize:12,
        marginTop:8,
        marginBottom:4
    },
    value:{
        color:colors.grey,
        fontSize:12,
        fontWeight:"bold", 
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        marginTop:-60,
        alignSelf:"center"
    }
});

export default styles;