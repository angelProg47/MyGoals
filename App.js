import { useState }  from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-...'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goals, SetGoals] = useState([])

  function handleInputGoal(enteredText) {
    console.log(enteredText)
    setEnteredGoalText(enteredText)
  }

  function handleAddGoal() {
    console.log(enteredGoalText)
    SetGoals(() => [...goals, (text: enteredGoalText, key: Math.random().toString())])
  }



}