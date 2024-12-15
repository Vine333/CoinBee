import React from 'react';
import styled from "styled-components";

const Card = ({image, title, price}) => {
    return (<CardWrap>
        <div className="cardImage">
            <img src={image} alt={title} style={{borderRadius: '20px', height: '180px'}}/>
        </div>
        <div className="cardContent">
            <h3 className="cardTitle">{title}</h3>
            <p className="cardDescription">{price}</p>
        </div>
    </CardWrap>);
};
const CardWrap = styled.div`

  width: 300px;
  height: 300px;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #333e4d;
  padding: 16px;

  &:hover {
    box-shadow: 0 0 2px rgba(251, 204, 13, 60%), 0 0 20px rgba(251, 204, 13, 60%);
    transform: translateY(-5px);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .cardImage img {
    width: 100%;
    height: auto;

  }

  .cardContent {
    padding: 16px;
  }

  .cardTitle {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 0 8px 0;
    color: #ffffff;
  }

  .cardDescription {
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.5;
    padding-bottom: 10px;
  }
`

export default Card;