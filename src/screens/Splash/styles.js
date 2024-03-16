import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    background:{
        width:"100%",
        height:"100%",
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",

    },
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingVertical:60
    },
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginBottom:14
    },
    title:{
        color:colors.white,
        fontSize:18,
        textAlign:"center",
        fontWeight:"500"
    },
    bigTitle:{
        fontSize:50,
        textAlign:"center",
        fontWeight:"bold",
        color:colors.white,
        paddingHorizontal:30
    },
    subtitle:{
        color:colors.white,
        fontSize:16,
        textAlign:"center",
        marginBottom:64,
        marginTop:20
    }
})

export default styles;