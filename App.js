import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");

  const onButtonClick = (text) =>{
    if(text == '='){
      return calculation()
    }
    console.log(text);
    setResultText(resultText + text);
  }

  const calculation = () =>{
    setCalcText(eval(resultText))
  };


  const onOperationClick = (text) =>{
    let operations = ["DEL", "AC", "+", "-", "*", "/"];
    if(text == 'AC'){
      setResultText("");
      setCalcText(0);
      return;
    }
    if(text == 'DEL'){
      return setResultText(resultText.toString().substring(0,resultText.length-1));
    }

    if(operations.includes(resultText.toString().split("").pop())) return;

  console.log(text);
    setResultText(resultText + text);
  }
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text></View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{resultText}</Text></View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=> onButtonClick(1)}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onButtonClick(2)}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onButtonClick(3)}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=> onButtonClick(4)}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onButtonClick(5)}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onButtonClick(6)}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=> onButtonClick(7)}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onButtonClick(8)}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onButtonClick(9)}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=> onButtonClick('.')}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onButtonClick(0)}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onButtonClick('=')}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
        <TouchableOpacity onPress={()=> onOperationClick('DEL')}>
              <Text style={styles.operationButton}>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onOperationClick('AC')}>
              <Text style={styles.operationButton}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onOperationClick('+')}>
              <Text style={styles.operationButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onOperationClick('-')}>
              <Text style={styles.operationButton}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onOperationClick('*')}>
              <Text style={styles.operationButton}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onOperationClick('/')}>
              <Text style={styles.operationButton}>/</Text>
            </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  result: {
    flex: 2,
    backgroundColor: 'grey',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  resultText:{
    fontSize:50,
    fontWeight:'bold',
    color:'white',
  },
  calculation: {
    flex: 1.5,
    backgroundColor: '#d6d6c2',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculationText:{
    fontSize:30,
    fontWeight:'bold',
    color:'black',
  },
  buttons:{
    flex:6,
    flexDirection:'row',
  },
  numbers:{
    flex:5.5,
    backgroundColor: '#434343',
  },
  operations:{
    flex:2,
    backgroundColor: '#636363',    
    justifyContent:'space-around',
    alignItems:'center',
  },
  row:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  number:{
    color:'white',
    fontSize:30,
  },
  operationButton:{
color:'white',
fontSize:30,
  },

});
