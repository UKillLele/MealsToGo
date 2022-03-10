import React, { useState } from "react";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";

const { Accordion, Icon, Item } = List;

export const RestaurantDetails = ({ route }) => {
  const {
    params: { restaurant },
  } = route;
  const [breakfastExpanded, setBreakfastExpanded] = useState(true);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const handleBreakfastPress = () => setBreakfastExpanded(!breakfastExpanded);
  const handleLunchPress = () => setLunchExpanded(!lunchExpanded);
  const handleDinnerPress = () => setDinnerExpanded(!dinnerExpanded);
  const handleDrinksPress = () => setDrinksExpanded(!drinksExpanded);
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Accordion
          title="Breakfast"
          left={(props) => <Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={handleBreakfastPress}
        >
          <Item title="Omlette" />
          <Item title="French Toast" />
          <Item title="English Muffin" />
          <Item title="Breakfast Tacos" />
        </Accordion>
        <Accordion
          title="Lunch"
          left={(props) => <Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={handleLunchPress}
        >
          <Item title="Burger with fries" />
          <Item title="Grilled Cheese Sandwich" />
          <Item title="Club Sandwich" />
        </Accordion>
        <Accordion
          title="Dinner"
          left={(props) => <Icon {...props} icon="taco" />}
          expanded={dinnerExpanded}
          onPress={handleDinnerPress}
        >
          <Item title="Tacos" />
          <Item title="Nachos" />
          <Item title="Taquitos" />
          <Item title="Enchiladas" />
          <Item title="Taco Salad" />
        </Accordion>
        <Accordion
          title="Drinks"
          left={(props) => <Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={handleDrinksPress}
        >
          <Item title="Soda" />
          <Item title="Tea" />
          <Item title="Coffee" />
          <Item title="Water" />
        </Accordion>
      </ScrollView>
    </>
  );
};
