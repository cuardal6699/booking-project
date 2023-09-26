import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Header = () => {
  const [pressed, setPressed] = useState("stays");

  const data = [
    { key: "stays", icon: "bed-outline", label: "Stays", family: "Ionicons" },
    {
      key: "flights",
      icon: "airplane-outline",
      label: "Flights",
      family: "Ionicons",
    },
    {
      key: "carRental",
      icon: "car-outline",
      label: "Car Rental",
      family: "Ionicons",
    },
    { key: "taxi", icon: "uber", label: "Taxi", family: "Fontisto" },
  ];

  const renderItem = ({ item }) => {
    const IconComponent = item.family === "Ionicons" ? Ionicons : Fontisto;

    return (
      <TouchableHighlight
        onPress={() => setPressed(item.key)}
        underlayColor="transparent"
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: pressed === item.key ? "white" : "transparent",
          borderWidth: 2,
          borderRadius: 25,
          padding: 10,
          marginRight: 8,
          gap: 8,
          backgroundColor: pressed === item.key ? "white" : "transparent",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconComponent
            name={item.icon}
            size={24}
            color={pressed === item.key ? "#003580" : "white"}
          />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: pressed === item.key ? "#003580" : "white",
              fontSize: 15,
            }}
          >
            {item.label}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      style={{
        backgroundColor: "#003580",
        padding: 16,
      }}
    />
  );
};

export default Header;

const styles = StyleSheet.create({});
