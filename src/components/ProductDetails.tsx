import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const product = {
  name: "Bolacha recheada bono",
  barcode: "7891000305249",
  description:
    "Esse é um exemplo de descrição do produto, que pode ser bem longa e detalhada.",
  image: require("../assets/Bono.png"),
};

const markets = [
  {
    name: "Mercado A",
    price: "R$ 2,99",
    lastUpdate: "2 horas atrás",
    image: require("../assets/Mercado.png"),
  },
  {
    name: "Mercado B",
    price: "R$ 3,25",
    lastUpdate: "1 hora atrás",
    image: require("../assets/Mercado.png"),
  },
  {
    name: "Mercado C",
    price: "R$ 3,50",
    lastUpdate: "30 minutos atrás",
    image: require("../assets/Mercado.png"),
  },
];

export default function ProductDetails() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productBarcode}>{product.barcode}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <View style={styles.marketList}>
          {markets.map((market) => (
            <View style={styles.marketItem} key={market.name}>
              <Image source={market.image} style={styles.marketImage} />
              <View style={styles.marketDetails}>
                <Text style={styles.marketName}>{market.name}</Text>
                <Text style={styles.marketPrice}>{market.price}</Text>
                <Text style={styles.marketLastUpdate}>
                  {`Última atualização: ${market.lastUpdate}`}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productBarcode: {
    fontSize: 16,
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  marketList: {
    marginTop: 16,
  },
  marketItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  marketImage: {
    width: 64,
    height: 64,
    resizeMode: "cover",
    borderRadius: 32,
    marginRight: 16,
  },
  marketDetails: {
    flex: 1,
  },
  marketName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  marketPrice: {
    fontSize: 16,
    marginBottom: 4,
  },
  marketLastUpdate: {
    fontSize: 12,
    color: "gray",
  },
});
