import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

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
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("./../assets/image/logo.png")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={inputGoal}
          value={goalInput}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler}></Button>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCloseModal}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dfeaeb",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputText: {
    borderColor: "#000000",
    borderWidth: 1,
    width: "70%",
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
