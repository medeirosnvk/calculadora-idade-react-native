import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 10,
        padding: 20,
    },
    textHeightWeight: {
        color: '#20232a',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
        paddingLeft: 20,
    },
    inputs: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#61dafb",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator: {
        fontSize: 16,
        color: "#000000",
    },
})

export default styles