import React, {useState} from "react";
import "./Modal.css"
import {fadeInLeft} from 'react-animations';
import styled, { keyframes } from 'styled-components';

import {fadeOutRight} from 'react-animations';
const FadeOutRight = styled.div`animation: 1s ${keyframes`${fadeOutRight}`} `;
const FadeInLeft = styled.div`animation: 1s ${keyframes`${fadeInLeft}`} `;

const Modal = ({active,setActive,children})=> {
    return (

            <div className={active ? "modal-suc act " : "modal-suc hidden"} onClick={() => setActive(false)} >
                 <FadeInLeft>
                    <div className="content" onClick={e => e.stopPropagation()}>
                        {children}
                        <button className="buttonToClose" onClick={() => setActive(false)}>ЗАКРЫТЬ</button>
                    </div>
                </FadeInLeft>
            </div>
        )




}
export default Modal;