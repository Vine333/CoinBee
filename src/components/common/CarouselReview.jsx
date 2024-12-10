import React, { useState } from "react";
import styled from "styled-components";
import CardReview from "./CardReview.jsx";

const CarouselReview = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 3) % cards.length
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 3 + cards.length) % cards.length
        );
    };

    const getVisibleCards = () => {
        return [
            cards[currentIndex],
            cards[(currentIndex + 1) % cards.length],
            cards[(currentIndex + 2) % cards.length],
        ];
    };

    return (
        <CarouselWrapper>
            <Button className="prev" onClick={handlePrev}>
                ‹
            </Button>
            <CardsContainer>
                {getVisibleCards().map((card, index) => (
                    <CardWrapper className={`card-${index}`} key={card.name}>
                        <CardReview {...card} />
                    </CardWrapper>
                ))}
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
  max-width: 1050px;
  margin: 0 auto;
  overflow: hidden;
  height: 450px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  position: relative;
`;

const CardWrapper = styled.div`
  flex: 0 0 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  opacity: 1;
  transition: transform 0.5s ease, opacity 0.5s ease;

  &.card-0 {
    transform: translateX(-0%);
  }

  &.card-1 {
    transform: translateX(0);
  }

  &.card-2 {
    transform: translateX(0%);
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

export default CarouselReview;
