import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [totalGoal, setTotalGoal] = useState(["Dummy 1", "Dummy 2"]);

  function showModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  function addGoal(goalInput) {
    setTotalGoal((currentTotalGoal) => [...currentTotalGoal, goalInput]);
    setModalVisible(false);
  }

  function removeGoal(id) {
    setTotalGoal((currentTotalGoal) => {
      return currentTotalGoal.filter((goal, index) => index != id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={showModal}></Button>
      {modalVisible && (
        <GoalInput
          visible={modalVisible}
          onAddGoal={addGoal}
          onCloseModal={closeModal}
        />
      )}
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
