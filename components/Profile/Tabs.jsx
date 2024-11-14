import { Text, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Profiles from './Profiles';  // Default import for Profile
import Orders from './Orders';    // Default import for Orders
import COLORS from '../../constants/colors';

// Function to render scenes
const renderScene = SceneMap({
  first: Profiles,
  second: Orders,

});

// Default export of the Tabs component
const Tabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",  // Corrected key
      title: "BURGER",
    },
    {
      key: "second", // Corrected key
      title: "DRINKS",
    },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{ backgroundColor: COLORS.black}}
      activeColor={COLORS.darkred}
      inactiveColor={COLORS.black}
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...styles.text }}>{route.title}</Text>  // Corrected "styles" to "style"
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
};

// Default export statement for Tabs
export default Tabs;

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});