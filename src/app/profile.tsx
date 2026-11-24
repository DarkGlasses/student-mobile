import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function profile() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>My Profile</Text>
        <Text style={styles.subtitle}>Name : Sitthichok kiddee</Text>
        <Text style={styles.subtitle}>Student ID : 68319010015</Text>
        <Text style={styles.subtitle}>Major : Information Technology</Text>
        <Text style={styles.subtitle}>Special Skill : 1.Play game 2.Play Ukulele 3.Read mind</Text>
        <Pressable style={styles.button}>Contact</Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2563eb",
  },
  subtitle: {
    fontSize: 38,
    color: "#000000",
    marginTop: 8,
  },
  box: {
    backgroundColor: "#dbdbdb",
    borderRadius: 30,
    fontWeight: "medium",
    padding: 50,
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#dbdbdb",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 370,
    paddingVertical: 10,
    borderRadius: 20
  }
})