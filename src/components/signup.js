import React, {useState} from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import {Textarea} from "./Textarea";
import axios from "axios";
import Modal from "./Modal";
import './Modal.css';


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

const [modal,setModal] = useState(undefined);
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
        const data = {
            records: [
                {
                    fields:{
                        firstName: values.firstName,
                        phoneNum: values.phone,
                        email: values.email,
                        comments: values.comments
                    },
                },
            ],
        };
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
                setModal(true);
            })
            .catch((e)=> {
               setErrorModal(true);
            });
      }}
    >
      {formik => (
          <Form>
              {modal &&  <Modal setActive={setModal} active={modal}>Информация отправлена </Modal>}
              {errorModal && <Modal setActive={setErrorModal} active={errorModal}> Произошла ошибка, попробуйте позднее </Modal>}
            <TextField className="userInfo mb-2" placeholder="Ваше имя"  name="firstName" type="text" onInput={nameStore}/>
            <TextField className="userInfo mb-2" placeholder="Телефон" name="phoneNum" type="text" onInput={phoneStore}/>
            <TextField className="userInfo mb-2" placeholder="E-mail" name="email" type="email" onInput={mailStore}/>
              <Textarea placeholder="Ваш комментарий" name="comments"  id="comments"  onInput={textStore} />
              <div id="confirmation">
                  <input required={true} type="checkbox" id="checker" value="yes" name="checker" className="custom_check"/>
                  <label for="checker"> Отправляя заявку, я даю согласие на <a href=""> обработку своих персональных данных.*</a></label>
              </div>
            <button id="submit" type="submit">Свяжитесь с нами</button>
          </Form>

      )}
    </Formik>

  )
}
