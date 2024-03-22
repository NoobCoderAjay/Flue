// import React, { useState } from "react";
// import { FlatList, View, StyleSheet, Text, Dimensions } from "react-native";
// import FirstScreen from "./firstScreen";
// import SecondScreen from "./secondScreen";
// import ThirdScreen from "./thirdScreen";
// import FourthScreen from "./fourthScreen";

// const { width: screenWidth } = Dimensions.get("window");

// const Carousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const SCREENS = React.useMemo(
//     () => [
//       { component: <FirstScreen />, key: "1" },
//       { component: <SecondScreen />, key: "2" },
//       { component: <ThirdScreen />, key: "3" },
//       { component: <FourthScreen />, key: "4" },
//     ],
//     [activeIndex]
//   );

//   const renderItem = ({ item }: { item: any }) => {
//     return <View style={styles.item}>{item.component}</View>;
//   };

//   const renderPagination = () => {
//     return (
//       <View style={styles.pagination}>
//         {SCREENS.map((_, index) => (
//           <View
//             key={index}
//             style={[styles.dot, index === activeIndex && styles.activeDot]}
//           />
//         ))}
//       </View>
//     );
//   };

//   const onViewableItemsChanged = ({ viewableItems }: any) => {
//     if (viewableItems && viewableItems.length > 0) {
//       setActiveIndex(viewableItems[0].index || 0);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={SCREENS}
//         renderItem={renderItem}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onViewableItemsChanged={onViewableItemsChanged}
//         viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
//       />
//       {renderPagination()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     width: screenWidth,
//   },
//   pagination: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     bottom: 60,
//     left: 0,
//     right: 0,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#ccc",
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: "#000",
//   },
// });

// export default Carousel;
