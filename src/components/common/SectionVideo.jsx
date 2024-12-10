import React from 'react';
import styled from "styled-components";

const SectionVideo = () => {
    return (
        <Wrapper>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ytdey0x7C-8?si=w0K_D2z-n_Ewqcyr?controls=0&rel=0&showinfo=0&iv_load_policy=3"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Wrapper>
    );
};
const Wrapper = styled.div`
width: 100%;
  
  height: 700px;
  background-color: #333e4d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  position: relative;
  iframe{
    padding: 30px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 0;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
    background-attachment: fixed;
  }
`

export default SectionVideo;