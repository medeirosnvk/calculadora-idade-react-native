import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function resultAge(props) {
    return (
        <View style={styles.boxResultAge}>
            <Text style={styles.textMessageResultAge}>{props.messageResultAge}</Text>
            <Text style={styles.textResultAge}>{props.ResultAge}</Text>
        </View>
    );
}