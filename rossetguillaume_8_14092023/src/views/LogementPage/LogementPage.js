import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Logements from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Error from "../../views/Error/Error";

import "./LogementPage.scss";
// import Gallery from "../Layout/Gallery";
// import RatingScale from "./RatingScale";

const HousingPage = () => {
  const { id } = useParams();
  const housing = Logements.find((housing) => housing.id === id);
  if (!housing) {
    return <Navigate to="/Error" />;
  }
  return;
};

export default HousingPage;
