import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      flexDirection: "column",
      borderColor: 'white',
      borderWidth: 0.6,
      justifyContent: 'center',
      alignContent:  'center',
      marginBottom: 60,
      paddingTop: 20 
    },
    inputContainer: {
      width: "80%",
      alignItems: "center",
      flexDirection: 'column'


    }
  });
  
export default styles