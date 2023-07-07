import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { createEntityAdapter } from "@reduxjs/toolkit";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation, useRoute } from "@react-navigation/native";

const SuccessMessage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 400,
      }}
    >
      <Text style={{ padding: 100, fontSize: 20 }}>Your Order is placed</Text>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text
          style={{
            backgroundColor: "#088F8F",
            borderRadius: 8,
            paddingVertical: 12,
            paddingHorizontal: 24,
            alignItems: "center",
            justifyContent: "center",
            elevation: 2,
            color: "white",
          }}
        >
          Back to Home
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SuccessMessage;

const styles = StyleSheet.create({});
