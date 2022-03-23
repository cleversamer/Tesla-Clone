import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Section from "./Section";
import carsList from "../carInfo.json";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carsList);
  }, []);

  return (
    <Container>
      {cars &&
        cars.map(
          ({ id, title, description, image, leftBtnText, rightBtnText }) => (
            <Section
              key={id}
              title={title}
              description={description}
              backgroundImg={image}
              leftBtnText={leftBtnText}
              rightBtnText={rightBtnText}
            />
          )
        )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
