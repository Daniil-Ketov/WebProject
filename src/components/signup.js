import React, {useState} from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import {Textarea} from "./Textarea";
import axios from "axios";
import Modal from "./Modal";
import './Modal.css';
import './FormStyle.css'

let  check=0;


export const Signup = () => {

const textStore =(event) => {
    localStorage["Comments"] = event.target.value;
    }
const nameStore = (event) => {
    localStorage["Name"]=event.target.value;
}
const phoneStore = (event) =>{
    localStorage["Phone"]=event.target.value;

}
const mailStore = (event) => {
    localStorage["E-mail"]=event.target.value;
}

const [delay,setDelay] = useState(false);
const [modal,setModal] = useState(undefined);
const [requ,setRequ] = useState(true);
    const checkEd = () => {
        check=check+1;
        if (check ==3 ) {
            check =1;
        }
        if (check == 1) {
            setRequ(false);
        }
        if (check ==2  ) {
            setRequ(true)
        }

    }
const [errorModal,setErrorModal] = useState(undefined);
    const validate = Yup.object({
    firstName: Yup.string()
      .matches(/^([^0-9]*)$/,"Имя не содержит цифр"),
    phoneNum: Yup.string()
      .required('Номер телефона обязателен к заполнению'),
    email: Yup.string()
      .email('Неправильно введенный E-mail')
      .required('E-mail обязателен к заполнению'),
    comments: Yup.string()
  })
  return (
    <Formik
      initialValues={{
        firstName: localStorage.getItem("Name"),
        phoneNum: localStorage.getItem("Phone"),
        email: localStorage.getItem("E-mail"),
        comments: localStorage.getItem("Comments"),
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
          setDelay(true);
        await axios.post(
            'https://formcarry.com/s/JR-H-3w-HWs',
            {
                'Имя' : values.firstName,
                'Телефон -': values.phoneNum,
                'Почта -':values.email,
                'Комментарии -': values.comments
            }
        )
            .then((response)=>{
                setTimeout(() => { setModal(true); setDelay(false); }, 3000);
            })
            .catch((e)=> {
                setTimeout(() => {  setErrorModal(true); setDelay(false); }, 3000);
            });
      }}
    >
      {formik => (
          <Form>
              {modal &&  <Modal id="mod" setActive={setModal} active={modal}> <span id={"succ"}>Информация отправлена</span> </Modal>}
              {errorModal && <Modal id="mod" setActive={setErrorModal} active={errorModal}> <span id="err"> Произошла ошибка, попробуйте позднее </span></Modal>}
            <TextField className="userInfo" placeholder="Ваше имя"  name="firstName" type="text" onInput={nameStore}/>
            <TextField className="userInfo mt-2" placeholder="Телефон" name="phoneNum" type="text" onInput={phoneStore}/>
            <TextField className="userInfo mt-2" placeholder="E-mail" name="email" type="email" onInput={mailStore}/>
              <Textarea className="userInfo  mt-2" placeholder="Ваш комментарий" name="comments"  id="comments"  onInput={textStore} />
              <input  type="checkbox" id="checker" value="yes" name="checker" className="custom_check"/>
              <label onClick={() => checkEd()} id="admit" htmlFor="checker"> <input required={requ} type="checkbox" id="checker" value="yes" name="checker" className="crutch_check"/>
                  <span id="text-1">Отправляя заявку, я даю согласие на <span> </span> <a id="text-2" href="https://drupal-coder.ru/privacy-policy"> обработку своих персональных данных.* </a>   </span></label>
              <button  id="send_request"  type="submit"  disabled={delay} > СВЯЖИТЕСЬ С НАМИ </button>
          </Form>
      )}
    </Formik>

  )
}
