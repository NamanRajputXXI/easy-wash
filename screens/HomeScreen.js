import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(cart);
  const navigation = useNavigation();
  const product = useSelector((state) => state.product.product);
  console.log("product array", product);
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = () => {
      services.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#F0F0F0", flex: 1, marginTop: 35 }}
      >
        {/* Location and Profile */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Entypo name="location-pin" size={30} color="#fd5c63" />
          <View style={{ fontSize: 18, fontWeight: "600" }}>
            <Text>Home</Text>
            <Text>Delhi, west delhi- 110059</Text>
          </View>

          <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
            <Entypo
              style={{ width: 40, height: 40, borderRadius: 20 }}
              name="login"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
        {/* search bar */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#C0C0C0",
            borderRadius: 7,
          }}
        >
          <TextInput placeholder="search for items" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>
        {/* image carousel */}
        <Carousel />
        {/* services */}
        <Services />
        {/* Render all the products */}
        {product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
      </ScrollView>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            padding: 10,
            marginBottom: 40,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | $ {total}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              extra changes might apply
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("PickUp")}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Procced to pickup
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
