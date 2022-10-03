import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [totalGoal, setTotalGoal] = useState(["Dummy 1", "Dummy 2"]);

  function addGoal(goalInput) {
    setTotalGoal((currentTotalGoal) => [...currentTotalGoal, goalInput]);
  }

  function removeGoal(id) {
    setTotalGoal((currentTotalGoal) => {
      return currentTotalGoal.filter((goal, index) => index != id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={totalGoal}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={(info) => {
            return (
              <GoalItem
                text={info.item}
                id={info.index}
                onDelete={removeGoal}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 7,
  },
});
