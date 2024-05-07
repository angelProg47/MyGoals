import { StatusBar } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goals, setGoals] = useState([])
  function handleInputGoal(enteredText){
    console.log(enteredText)
    setEnteredGoalText(enteredText)
  }

function handleAddGoal() {
  console.log (enteredGoalText)
  setGoals(()=>[...goals, {text: enteredGoalText, key: Math.random().toString()}])
}

  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
        placeholder='Your Goal!'
        oneChangeText={handleInputGoal} />
        <Button
        title='Add Goal'
        color={'#FFF636'}
        onPress={handleAddGoal}
        />
        <View style={styles.goalsContiner}>
          <FlatList
          data={goals}
          renderItem={ (itemData) => {

            <View style={styles.goalsItem}>
              <Text style={styles.goalsText}>

              </Text>
              </View>
          }}
          >

          </FlatList>
        </View>
      </View>
    </View>
    )
  }
    const styles = StyleSheet.create({
      container:{
        flex: 1,
        paddingTop: 50,
        paddingHorizontal:20
      },
  
      imnputContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomColor: '#FFF980'
      },
      btGoal:{
        borderRadius: 20,
        backgraundColor: '#F8FF6E',
      },
      textImput:{
        borderWith: 1,
        borderColor: '#ffffff',
        width: '80%',
        marginRight: 3,
        padding: 8,
        borderRadius: 5
      },
      goalsContiner: {
        flex: 5,
      },
      goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#8576FF',
        color: 'white'
      },
      goalsText: {
        color: 'white'
      }
  

    }
    );