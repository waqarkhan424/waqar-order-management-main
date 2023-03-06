import React, { useState, useEffect } from "react";
import MealCard from "../components/MealCard";
import Categories from "../components/Categories";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
////////////////////////////////////////////////////////////

import { app } from "../firebase";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firestore = getFirestore(app);

////////////////////////////////////////////////////////////
const Menu = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  ///////////////////////////////////////////////////////////
  const itemsRef = collection(firestore, "items");

  const q = async (category) => {
    let itemsQuery = query(itemsRef);

    if (category != "all") {
      itemsQuery = query(itemsRef, where("category", "==", category));
    }
    const querySnapshot = await getDocs(itemsQuery);

    setItems(querySnapshot.docs.map((doc) => doc.data()));
  };

  const handleCategoryChange = (newCategory) => {
    q(newCategory);
  };
  //////////////////////////////////////////////////////////////
  useEffect(() => {
    q("all");
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [items]);
  //////////////////////////////////////////////////////////////////
  return (
    <section className="menu section">
      <div className="title">
        <h2>our menu </h2>
        <div className="underline"></div>
      </div>
      <Categories onChange={handleCategoryChange} />;
      {loading ? (
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={150} color="secondary" />
        </Box>
      ) : (
        items.map((item) => {
          return <MealCard key={item.id} {...item} />;
        })
      )}
    </section>
  );
};

export default Menu;
