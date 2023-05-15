import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../Constants/Styles";

export default function Button({ children, style, mode, onPress }) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={[
          mode === "flat"
            ? [styles.innerContainer, { backgroundColor: "transperant" }]
            : styles.innerContainer,
        ]}
        onPress={onPress}
        android_ripple={{ color: GlobalStyles.colors.primary100 }}
      >
        <Text style={{ fontSize: 16 }}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 20,

    minWidth: 80,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary400,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});
