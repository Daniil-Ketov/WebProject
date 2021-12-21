import React from "react";
import "./Modal.css"





const Modal = ({active,setActive,children})=> {

    
    return (
        <div className={active ? "modal-suc act":"modal-suc"} onClick={()=> setActive(false)}>
            <div className="content" onClick={e=>e.stopPropagation()}>
                {children}
                <button className="buttonToClose" onClick={() => setActive(false)}>ЗАКРЫТЬ</button>
            </div>
        </div>
    )
}
export default Modal;