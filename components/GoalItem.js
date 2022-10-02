import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalView}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalView: {
    backgroundColor: "gray",
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  goalText: {
    color: "white",
  },
});
