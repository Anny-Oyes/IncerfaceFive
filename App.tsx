
import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {
  return (
    <View >
      <View style={styles.subContainer}>
        <Feather name="menu" size={30} style={styles.iconMenu} />
        <Text style={styles.titled}> Any Ecommerce </Text>
        <Feather name="shopping-cart" size={30} style={styles.iconBuy} />
      </View>

      <View style={styles.textHeader}>
        <Text style={styles.textDescription}>Shop for</Text>
        <Text style={styles.textDescriptionTwo}>AED 75 more for free shipping</Text>
      </View>

      <Text style={styles.subTitled}>My Cart</Text>

      <View style={styles.firstProduct}>
        <Image source={require("./assets/shoes.jpg")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textAldo}>Aldo</Text>
          <Text>Almond Toe</Text>
          <Text style={styles.textSize}>Size: 39 us</Text>
          <Text style={styles.textAED}>AED 45</Text>
        </View>

        <View style={styles.counter}>

          <View style={styles.counterPlus}>
            <AntDesign name="plus" size={24} style={styles.iconPlus} />

            <Text style={styles.textCounter}>1</Text>
          </View>

          <View style={styles.counterLess}>
            <AntDesign name="minus" size={24} style={styles.iconLess} />
          </View>
        </View>
      </View>

      <View style={styles.firstProduct}>
        <Image source={require("./assets/shoes.jpg")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textAldo}>Aldo</Text>
          <Text>Almond Toe</Text>
          <Text style={styles.textSize}>Size: 39 us</Text>
          <Text style={styles.textAed}>AED 50</Text>
          <Text style={styles.textAedTwo}>AED 45</Text>

          <View>
            <Text style={styles.label}>50% off</Text>
          </View>

        </View>

        <View style={styles.counter}>

          <View style={styles.counterPlus}>
            <AntDesign name="plus" size={24} style={styles.iconPlus} />

            <Text style={styles.textCounter}>1</Text>
          </View>

          <View style={styles.counterLess}>
            <AntDesign name="minus" size={24} style={styles.iconLess} />
          </View>
        </View>
      </View>

      <View style={styles.cupon}>
        <Text style={styles.textCupon}>Coupon Code</Text>

        <View style={styles.textApply}>

          <View style={styles.apply}>
            <Text style={styles.applyTwo}>APPLY</Text>
          </View>

        </View>
      </View>

      <View style={styles.invoice}>
        <View>
          <Text style={styles.textInvoice}>Subtotal:</Text>
          <Text style={styles.textInvoice}>Discount:</Text>
          <Text style={styles.textInvoice}>VAT:</Text>
          <Text style={styles.textInvoice}>Total:</Text>
        </View>

        <View style={styles.InvoiceTwo}>
          <Text style={styles.textInvoiceTwo}>AED 126.57</Text>
          <Text style={styles.textInvoiceTwo}>AED 21.31</Text>
          <Text style={styles.textInvoiceTwo}>AED 5.26</Text>
          <Text style={styles.textInvoiceTwo}>AED 125.52</Text>
        </View>

      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>
          PROCEED TO PAYMENT
        </Text>
      </View>


      <View style={styles.iconFooter}>
        <Ionicons name="md-home" size={30} style={styles.iconsFooterTwo} />
        <FontAwesome name="search" size={30} style={styles.iconsFooterTwo} />
        <FontAwesome name="star" size={30} style={styles.iconsFooterTwo} />
        <FontAwesome name="user" size={30} style={styles.iconsFooterTwo} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subContainer: {
    position: 'absolute',
    bottom: "80%",
    width: '100%',
    height: 50,
    backgroundColor: '#333333',
  },

  textHeader: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
  },

  textDescription: {
    color: "#ffffff",
    marginTop: 130,
    marginLeft: 50,
  },

  textDescriptionTwo: {
    fontWeight: "bold",
    marginLeft: 115,
    marginTop: -20,
    color: "#ffffff",
  },

  iconBuy: {
    marginTop: -15,
    alignSelf: "center",
    color: "black",
    marginLeft: 330,
  },

  iconMenu: {
    marginTop: -40,
    color: "black",
    marginLeft: 10,
  },

  titled: {
    alignSelf: "center",
    margin: -20,
    fontWeight: "bold",
  },

  subTitled: {
    alignSelf: "center",
    marginTop: 180,
    fontSize: 20,
  },

  firstProduct: {
    backgroundColor: "#f5f5f5",
    width: "82%",
    height: 130,
    marginLeft: "8%",
    marginTop: 10,
  },


  counterPlus: {
    width: 30,
    height: 30,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    color: "#a0a0a0",
    alignSelf: "center",
    alignItems: "center",
    marginTop: -85,
    marginLeft: 270,
    borderWidth: 1,
    borderColor: '#a0a0a0',
  },

  counter: {
    flexDirection: "column",
    marginLeft: -20,
    marginTop: -5,
  },

  textCounter: {
    marginTop: 10,
  },

  counterLess: {
    width: 30,
    height: 30,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    color: "#a0a0a0",
    alignSelf: "center",
    marginTop: 35,
    marginLeft: 270,
    borderWidth: 1,
    borderColor: '#a0a0a0',
  },

  iconLess: {
    marginTop: 4,
    color: "black",
    marginLeft: 2,
  },

  iconPlus: {
    marginTop: 3,
    color: "black",
  },

  image: {
    width: 80,
    height: 80,
    marginTop: 20,
    marginLeft: 10,
  },

  textContainer: {
    marginLeft: 100,
    marginTop: -78,
  },

  textAldo: {
    fontSize: 8,
    color: "#909194",
  },

  textSize: {
    fontSize: 12,
    color: "#909194",
  },

  textAED: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },

  textAed: {
    fontSize: 10,
    color: "#909194",
    textDecorationLine: "line-through",
    marginTop: 15,
  },

  textAedTwo: {
    fontSize: 14,
    color: "#ff5a5a",
    fontWeight: "bold",
    marginTop: -18,
    marginLeft: 50,
  },

  label: {
    width: 50,
    height: 15,
    textAlign: "center",
    backgroundColor: "#333333",
    marginLeft: -100,
    marginTop: -90,
    color: "#ffffff",
    fontSize: 10,
  },

  cupon: {
    backgroundColor: "#f5f5f5",
    width: "52%",
    height: 50,
    marginLeft: "8%",
    marginTop: 10,
    flexDirection: "row",
  },

  textCupon: {
    marginLeft: 12,
    color: "#909194",
    marginTop: 12,
  },

  textApply: {
    position: "absolute",
    marginLeft: "119%",
    marginTop: 2,
    height: 50,
  },

  apply: {
    borderColor: "#333333",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    width: 80,
    height: 50,
  },

  applyTwo: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 8,
  },

  invoice: {
    width: "82%",
    height: 110,
    backgroundColor: "#f5f5f5",
    marginLeft: "8%",
    marginTop: 10,
  },

  textInvoice: {
    marginTop: 5,
    marginLeft: 10,
    color: "#909194",
  },

  InvoiceTwo: {
    position: "absolute",
    marginTop: -1,
    marginLeft: 220,
  },

  textInvoiceTwo: {
    marginTop: 5,
    color: "#909194",
  },

  footer: {
    marginTop: 100,
    height: 50,
    width: "100%",
    backgroundColor: '#333333',
    bottom: "10%",
  },

  textFooter: {
    position: "absolute",
    color: "#ffffff",
    alignSelf: "center",
    marginTop: 12,
  },

  iconFooter: {
    flexDirection: "row",
    alignSelf: "center",
  },

  iconsFooterTwo: {
    marginTop: -60,
    margin: 30,
    color: "#a0a0a0",
  },

});
