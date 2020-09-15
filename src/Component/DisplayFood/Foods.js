import React, { useState, useEffect, useContext } from 'react';
import { Button, Container } from '@material-ui/core';
import allFoods from '../fakeData';
import FoodsItem from './FoodsItem';
import { ContextElement } from '../../App';
import { Link } from 'react-router-dom';


const Foods = () => {
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(true);
    const [dinner, setDinner] = useState(false);
    const [foods, setFoods] = useState([]);
    const [category, setCategory] = useState('lunch');
  

    const generalF = (boolean1,boolean2,boolean3, category) => {
         setBreakfast(boolean1);
         setLunch(boolean2);
         setDinner(boolean3);
         setCategory(category);
    }

    useEffect(()=> {
        const selected = allFoods.filter(f => f.tag === category);
        setFoods(selected);
    },[category]);
   
  const [selectedFood, setSelectedFood] = useContext(ContextElement);
 

  return (
    <div style={{ textAlign: "center", margin: "100px 0" }}>
      <Container>
        <Button
          onClick={() => generalF(true, false, false, "breakfast")}
          color={breakfast ? "secondary" : ""}
        >
          Breakfast
        </Button>
        <Button
          onClick={() => generalF(false, true, false, "lunch")}
          color={lunch ? "secondary" : ""}
        >
          Lunch
        </Button>
        <Button
          onClick={() => generalF(false, false, true, "dinner")}
          color={dinner ? "secondary" : ""}
        >
          Dinner
        </Button>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {foods.map((f) => (
            <FoodsItem food={f}></FoodsItem>
          ))}
        </div>
        <Link to='/checkout'>
         <Button variant="contained" color="secondary" disabled = {selectedFood.length < 1}>
          Checkout your food
        </Button></Link>
      </Container>
    </div>
  );
};

export default Foods;