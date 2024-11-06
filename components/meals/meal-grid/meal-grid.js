import React from "react";
import classes from "./meal-grid.module.css";
import MealItem from "../meal-item/meal-item";

const MealGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealGrid;
