import React from 'react';
import styled from "styled-components";

const SectionVideo = () => {
    return (<Wrapper>
        <div className='containerVideo'>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ytdey0x7C-8?si=w0K_D2z-n_Ewqcyr?controls=0&rel=0&showinfo=0&iv_load_policy=3"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    </Wrapper>);
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #333e4d;
  display: flex;
  justify-content: center;
  align-items: center;

  .containerVideo {
    position: relative;
    max-width: 1540px;
    width: 100%;
    height: 700px;
    padding: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
`;

export default SectionVideo;
