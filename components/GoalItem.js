import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalView}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
