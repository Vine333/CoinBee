import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Carousel = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // Центральная карточка

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <CarouselWrapper>
            <Button className="prev" onClick={handlePrev}>
                ‹
            </Button>
            <CardsContainer>
                {cards.map((card, index) => {
                    let positionClass = "";

                    // Определяем, какая карточка будет центральной, и какие будут боковыми
                    if (index === currentIndex) positionClass = "center";
                    else if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) positionClass = "prev";
                    else if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) positionClass = "next";
                    else positionClass = "hidden";

                    return (
                        <CardWrapper className={positionClass} key={card.title}>
                            <Card {...card} />
                        </CardWrapper>
                    );
                })}
            </CardsContainer>
            <Button className="next" onClick={handleNext}>
                ›
            </Button>
        </CarouselWrapper>
    );
};

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  overflow: hidden;
  height: 450px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  transition: transform 0.3s ease;
`;

const CardWrapper = styled.div`
  position: absolute;
  transition: transform 0.3s ease, opacity 0.3s ease, z-index 0.3s ease;
  opacity: 0;

  &.center {
    transform: scale(1.2) translateY(-20px);
    z-index: 3;
    opacity: 1;
  }

  &.prev {
    transform: scale(0.9) translateX(-80%) translateY(10px);
    z-index: 2;
    opacity: 1;
  }

  &.next {
    transform: scale(0.9) translateX(80%) translateY(10px);
    z-index: 2;
    opacity: 1;
  }

  &.hidden {
    transform: scale(0.8) translateY(20px);
    z-index: 1;
    opacity: 0;
  }
`;

const Button = styled.button`
  flex: 0 0 auto;
  color: black;
  border: none;
  background-color: rgba(251, 204, 13, 0.4);
  opacity: 80%;
  border-radius: 50%;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 8;

  &:hover {
    scale: 110%;
    background-color: #fbcc0d;
    box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);
  }
`;

export default Carousel;
