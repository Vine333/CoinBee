import React, {useState} from 'react';
import styled from "styled-components";

const FAQ = ({items}) => {

    const [openId, setOpenId] = useState(null);

    const clickHandler = (id) => {
        if (openId === id) {
            setOpenId(null);
            return;
        }
        setOpenId(id);
    }

    return (<Wrapper>
        <div className='container'>
            <div className="column">
                <ul className="accordion">
                    {items.slice(0, 5).map((accordionItem, id) => (<li className="accordionItems" key={id}>
                        <button
                            className={`accordionHeader ${openId === id ? 'active' : ''}`}
                            onClick={() => clickHandler(id)}
                        >
                            {accordionItem.title}
                            <span className={`accordionArrow ${openId === id ? 'active' : ''}`}>▲</span>
                        </button>
                        {openId === id && (<div className="accordionCollapse open">
                            <div className="accordionBody"
                                 dangerouslySetInnerHTML={{__html: accordionItem.description}}/>
                        </div>)}
                    </li>))}
                </ul>
            </div>

            <div className="column">
                <ul className="accordion">
                    {items.slice(5, 9).map((accordionItem, id) => (<li className="accordionItems" key={id}>
                        <button
                            className={`accordionHeader ${openId === id + 5 ? 'active' : ''}`}
                            onClick={() => clickHandler(id + 5)}
                        >
                            {accordionItem.title}
                            <span className={`accordionArrow ${openId === id + 5 ? 'active' : ''}`}>▲</span>
                        </button>
                        {openId === id + 5 && (<div className="accordionCollapse open">
                                <div className="accordionBody"
                                     dangerouslySetInnerHTML={{__html: accordionItem.description}}/>

                            </div>

                        )}
                    </li>))}
                </ul>
            </div>
        </div>
    </Wrapper>);
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 30px;

  .container {
    display: flex;
    flex-direction: row;
    max-width: 1540px;
  }

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
    transition: transform 0.3s ease-in-out, padding 0.8s ease;
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
    display: block;
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
    color: #eecc0d;
  }

  .accordionHeader.active {
    background-color: #333e4d;
    color: #eecc0d;
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .accordionBody.active-p {
    background-color: #333e4d;
    color: #fbc826;
  }

  @media (max-width: 570px ) {
    padding: 0;
    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      padding: 0;
    }

    .accordionHeader {
      width: 100%;
    }

    .accordionArrow {
      right: 10px;
    }

  }
  @media (max-width: 480px) {
    .accordionHeader {
      font-size: 10px;
    }
  }
`;

export default FAQ;
