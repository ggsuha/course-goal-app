import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  const [goalInput, setGoalInput] = useState("");

  function inputGoal(value) {
    setGoalInput(value);
  }

  function addGoalHandler() {
    props.onAddGoal(goalInput);
    setGoalInput("");
  }

  return (
    <Modal visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={inputGoal}
          value={goalInput}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  inputText: {
    borderColor: "#000000",
    borderWidth: 1,
    width: "70%",
    paddingHorizontal: 5,
  },
});
