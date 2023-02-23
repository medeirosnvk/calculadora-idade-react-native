import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultAge from "./resultAge";
import styles from "./style";

export default function Form() {

const [date, setDate] = useState(null)
const [month, setMonth] = useState(null)
const [year, setYear] = useState(null)
const [messageAge, setMessageAge] = useState("Preencha o dia, mês e ano do seu nascimento.") 
const [age, setAge] = useState(null) 
const [textButton, setTextButton] = useState("Calcular")

function ageCalculator() {
    var d1 = date;
    var m1 = month;
    var y1 = year;

    const today = new Date();

    var d2 = today.getDate();
    var m2 = today.getMonth() + 1;
    var y2 = today.getFullYear();
    var daysWithinMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(d1 > d2){
        d2 = d2 + daysWithinMonths[m2 - 1];
        m2 = m2 - 1;
      }
      if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
      }
      var d = d2 - d1;
      var m = m2 - m1;
      var y = y2 - y1;

    return setAge(''+y+' Anos '+m+' Meses '+d+' Dias');
}

function ageValidation() {
    if(date != null && month != null && year != null) {
        setDate(null)
        setMonth(null)
        setYear(null)
        setTextButton("Calcular novamente")
        setMessageAge("Você tem:")
        ageCalculator()
        return
    }
    setAge(null)
    setTextButton("Calcular")
    setMessageAge("Preencha o dia, mês e ano do seu nascimento.")
}

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.textHeightWeight}>Dia</Text>
                <TextInput 
                    style={styles.inputs}
                    onChangeText={setDate}
                    value={date}
                    placeholder="ex: dd"
                    keyboardType="numeric"
                />

                <Text style={styles.textHeightWeight}>Mês</Text>
                <TextInput 
                    style={styles.inputs}
                    onChangeText={setMonth}
                    value={month}
                    placeholder="ex: mm"
                    keyboardType="numeric"
                />

                <Text style={styles.textHeightWeight}>Ano</Text>
                <TextInput 
                    style={styles.inputs}
                    onChangeText={setYear}
                    value={year}
                    placeholder="ex: aaaa"
                    keyboardType="numeric"
                />
                
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => ageValidation()}
                    >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultAge messageResultAge={messageAge} ResultAge={age}/>
        </View>
    );
}

