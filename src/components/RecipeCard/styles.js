import { StyleSheet,Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:colors.white,
        padding:10,
        width:width * 0.8,
        marginVertical:32,
        marginRight:16,
        marginBottom:32,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:4,
        },
        shadowOpacity:0.32,
        shadowRadius:5.46,
        elevation:9,
    },
    title:{
        fontSize:16,
        color:colors.grey,
        fontWeight:"bold",
        flex:1
    },

    row:{
        flexDirection:"row",
    },
    footerText:{
        color:colors.lightGrey2,
        fontSize:11,
    },
    authorImage:{
        width:25,
        height:25,
        marginRight:8,
        borderRadius:20,
        backgroundColor:colors.lightGrey
    },
    timerIcon:{
        width:17,
        height:17,
        marginRight:8,
    },
    image:{
        width:80,
        height:80,
        borderRadius:50,
        marginTop:-40
    }
});

export default styles;