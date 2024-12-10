import React from 'react';
import styled from "styled-components";
import {Avatar} from "../../assets/SVG/Icons/index.js";

const CardReview = ({ comment, name, twitterIcon,}) => {
    return (<CardWrap>
        <div className="cardTitle">
            <div className='imgNick'>
                <div className="cardImage">
                    <Avatar/>
                </div>
                <div className='nickname'>
                    <div><a href="">{name}</a></div>
                    <div><p>@{name}com</p></div>
                </div>
            </div>
            <div><a href=""><img src={twitterIcon} width='22' height='22' alt=""/></a></div>
        </div>

        <div className="cardContent">
            <p className="cardDescription">{comment}</p>
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
  background-color: white;
  padding: 16px;

  .imgNick{
    
    display: flex;
  }
  .nickname {
    a {
      color: black;
    }
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
  }
.cardImage{
  background: lightgrey;
  border-radius: 50%;
  padding: 1px;
}
  .cardContent {
    padding: 16px;
  }

  .cardTitle {

    display: flex;
    justify-content: space-between;
    align-items: center;


  }

  .cardDescription {
    font-size: 1rem;
    color: black;
    line-height: 1.5;
  }
`

export default CardReview;