import React, {useState} from "react";
import styled from "styled-components";
import {Card} from "./index.js";


const CarouselForMain = ({card}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex === card.length - 1 ? 0 : prevIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? card.length - 1 : prevIndex - 1);
    };

    const visibleCards = card.slice(currentIndex, currentIndex + 3).concat(currentIndex + 3 > card.length ? card.slice(0, (currentIndex + 3) % card.length) : []);

    return (<CarouselWrapper>
        <Button className="prev" onClick={handlePrev}>
            ‹
        </Button>
        <div className='cardsContainer'>
            {visibleCards.map((card) => (<div className='cardWrapper' key={card.id}>
                <Card {...card} />
            </div>))}
        </div>
        <Button className="next" onClick={handleNext}>
            ›
        </Button>
    </CarouselWrapper>);
};

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1540px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 50px;
  padding-inline: 10px;

  @media (max-width: 1052px) {
    display: none;
  }

  .cardsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
  }


  .cardWrapper {
    transition: transform 0.3s ease, opacity 0.3s ease, z-index 0.3s ease;
    opacity: 1;
    transform: scale(1);
  }
`
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
    scale: 102%;
    background-color: #fbcc0d;
    box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 1rem;
  }

`;

export default CarouselForMain;
