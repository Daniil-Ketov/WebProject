import React, {useState} from "react";
import "./Modal.css"
import {fadeInLeft} from 'react-animations';
import styled, { keyframes } from 'styled-components';

import {fadeOutRight} from 'react-animations';
const FadeInLeft = styled.div`animation: 1s ${keyframes`${fadeInLeft}`} `;

const Modal = ({active,setActive,children})=> {
    return (

            <div className={active ? "modal-suc act " : "modal-suc hidden"} onClick={() => setActive(false)} >
                 <FadeInLeft>
                    <div className="content" onClick={e => e.stopPropagation()}>
                       <div id="butt"><button className="btn-close btn-close-white pb-3" onClick={() => setActive(false)}></button></div>
                        {children}
                    </div>
                </FadeInLeft>
            </div>
        )




}
export default Modal;