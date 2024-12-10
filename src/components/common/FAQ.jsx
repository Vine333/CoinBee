import React, { useState } from 'react';
import styled from "styled-components";

const FAQ = ({ items, __i}) => {

    const [openId, setOpenId] = useState(null);

    const clickHandler = (id) => {
        if (openId === id) {
            setOpenId(null);
            return;
        }
        setOpenId(id);
    }

    return (
        <Wrapper>
            <div className="column">
                <ul className="accordion">
                    {items.slice(0, 5).map((accordionItem, id) => (
                        <li className="accordionItems" key={id}>
                            <button
                                className={`accordionHeader ${openId === id ? 'active' : ''}`}
                                onClick={() => clickHandler(id)}
                            >
                                {accordionItem.title[__i]} {/* Используем перевод */}
                                <span className={`accordionArrow ${openId === id ? 'active' : ''}`} >▲</span>
                            </button>
                            {openId === id && (
                                <div className="accordionCollapse open">
                                    <div className="accordionBody"
                                         dangerouslySetInnerHTML={{ __html: accordionItem.description[__i] }} />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="column">
                <ul className="accordion">
                    {items.slice(5, 9).map((accordionItem, id) => (
                        <li className="accordionItems" key={id}>
                            <button
                                className={`accordionHeader ${openId === id + 5 ? 'active' : ''}`}
                                onClick={() => clickHandler(id + 5)}
                            >
                                {accordionItem.title[__i]} {/* Используем перевод */}
                                <span className={`accordionArrow ${openId === id + 5 ? 'active' : ''}`} >▲</span>
                            </button>
                            {openId === id + 5 && (
                                <div className="accordionCollapse open">
                                    <div className="accordionBody"
                                         dangerouslySetInnerHTML={{ __html: accordionItem.description[__i] }} />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 30px;
  .column {
    width: 48%;
  }

  .accordion {
    list-style-type: none;
    margin: 16px;
    padding: 0;
  }

  .accordionItems {
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 25px;
  }

  .accordionHeader {
    position: relative;
    width: 100%;
    padding: 20px 60px 20px 30px;
    background-color: white;
    border: 1px solid black;
    border-radius: 25px;
    font-size: 22px;
    text-align: left;
    cursor: pointer;
    color: black;
    transition: background-color 0.3s ease;
  }

  .accordionCollapse {
    transform: scaleY(0);
    transform-origin: top;
    overflow: hidden;
    transition: transform 10ms ease-in-out, padding 0.8s ease;
    padding: 0;
  }

  .accordionCollapse.open {
    transform: scaleY(1);
  }

  .accordionBody {
    padding: 30px 60px 30px 30px;
    background-color: #333e4d;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    font-size: 20px;
    color: white;
    a {
      color: #eecc0d;
    }
  }

  .accordionArrow {
    position: absolute;
    top: 50%;
    color: lightgrey;
    right: 20px;
    display: block;
    width: 20px;
    height: 20px;
    border-top-color: black;
    transform: translateY(-50%) rotate(0deg);
    transition: transform 0.15s ease-in-out;
  }

  .accordionHeader.active .accordionArrow {
    transform: translateY(-50%) rotate(180deg);
  }

  .accordionArrow.active {
    transform: translateY(-50%) rotate(180deg);
    color:#eecc0d ;
  }

  .accordionHeader.active {
    background-color: #333e4d;
    color: #eecc0d;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .accordionBody.active-p {
    background-color: #333e4d;
    color: #fbc826;
  }
`;

export default FAQ;
