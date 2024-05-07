import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
const [goals, setGoals] = useState([])
  
  function handleAddGoal(enteredGoalText) {
    console.log(enteredGoalText)
    setGoals(()=>[...goals, {text: enteredGoalText}])
  }

  function handleDeleteGoal(){
    console.log("DELETE")
  }
  
    return (
      <View style={styles.container}>
      <GoalInput 
      onAddGoal={handleAddGoal}
    />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goals}
          renderItem={(itemData) =>{
            <GoalItem 
              itemData={itemData}
              OnDeleteItem={handleDeleteGoal}
            />
          }}
          keyExtractor={(item) => {
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    paddingTop : 50,
    paddingHorizontal: 20,
  },

  goalsContainer:{
    flex: 5,
  }

});