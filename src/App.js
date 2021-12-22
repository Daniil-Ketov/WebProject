import React, {useState} from "react";
import './App.css';
import Modal from "./components/Modal";
import {Signup} from "./components/signup";
import ReviewSlider from "./components/reviewSlider";
import PartnersSlider1 from "./components/partnersSlider1";
import PartnersSlider2 from "./components/partnersSlider2";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';




function App() {
    const [modalActive,setModalActive] = useState(undefined);
    return (
        <body>
            <header>
                <nav class="navbar navbar-expand-md">
                    <div class="container">
                        <div>
                            <h1>Logo</h1>
                        </div>
                        <ul class="menu nav navbar-nav">
                            <li class="nav-item px-2">
                                <a href="./support">Поддержка Drupal</a>
                            </li>
                            <li class="nav-item dropdown px-2">
                                <a href="./admin">Администрирование</a>
                                <ul>

                                </ul>
                            </li>
                            <li class="nav-item nav-item px-2">
                                <a href="./promotion">Продвижение</a>
                            </li>
                            <li class="nav-item px-2">
                                <a href="./seo">Реклама</a>
                            </li>
                            <li class="nav-item dropdown px-2">
                                <a href="./about">О нас</a>
                                <ul>

                                </ul>
                            </li>
                            <li class="nav-item px-2">
                                <a href="./projects">Проекты</a>
                            </li>
                            <li class="nav-item px-2">
                                <a href="./contacts">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    <div class="row row-cols-md-2">
                        <div>
                            <h1>text</h1>
                        </div>
                        <div class="row row-cols-md-2">
                            <div>
                                1
                            </div>
                            <div>
                                2
                            </div>
                            <div>
                                3
                            </div>
                            <div>
                                4
                            </div>
                            <div>
                                5
                            </div>
                            <div>
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main class="container-fluid justify-content-center g-0">
                <div class="services container">
                    <div>
                        <h1>text</h1>
                    </div>
                    <div class="row row-cols-md-4">
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                        <div>
                            5
                        </div>
                        <div>
                            6
                        </div>
                        <div>
                            7
                        </div>
                        <div>
                            8
                        </div>
                    </div>
                </div>
                <div class="support container">
                    <div>
                        <h1>text</h1>
                    </div>
                    <div class="row row-cols-md-4">
                        <div>
                            01
                        </div>
                        <div>
                            02
                        </div>
                        <div>
                            03
                        </div>
                        <div>
                            04
                        </div>
                        <div>
                            05
                        </div>
                        <div>
                            06
                        </div>
                        <div>
                            07
                        </div>
                        <div>
                            08
                        </div>
                    </div>
                </div>
                <div class="expert container">
                    <div class="row row-cols-md-2">
                        <div>
                            <h1>text</h1>
                        </div>
                        <div class="row row-cols-md-2">
                            <div>
                                1
                            </div>
                            <div>
                                2
                            </div>
                            <div>
                                3
                            </div>
                            <div>
                                4
                            </div>
                        </div>
                    </div>
                </div>
                <div class="plans container">
                    <div>
                        <h1>text</h1>
                    </div>
                    <div class="row row-cols-md-3">
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                    </div>
                    <div>
                        small text
                    </div>
                </div>
                <div class="cases container">
                    <div>
                        <h1>text</h1>
                    </div>
                    <div class="row row-cols-md-3">
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                    </div>
                </div>
                <div class="team container">
                    <div>
                        <h1>text</h1>
                    </div>
                    <div class="row row-cols-md-3">
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                        <div>
                            5
                        </div>
                    </div>
                </div>
                <div class="articles container">
                    <div>
                        <h1>text</h1>
                    </div>
                    <div class="row row-cols-md-2">
                        <div class="row-md-3">
                            <div>
                                1
                            </div>
                            <div>
                                2
                            </div>
                        </div>
                        <div class="row-md-6">
                            <div>
                                1
                            </div>
                            <div class="row row-cols-md-2">
                                <div>
                                    2
                                </div>
                                <div>
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="reviews container">
                    <div>
                        <h1>text</h1>
                    </div>
                   <div>
                       <ReviewSlider></ReviewSlider>
                   </div>
                </div>
                    <PartnersSlider1></PartnersSlider1>
                    <PartnersSlider2></PartnersSlider2>
                <div class="faq container">
                    <div>
                        <h1>text</h1>
                    </div>
                    <div>
                        <ol>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                        </ol>
                    </div>
                </div>
            </main>
            <footer>
                <div class="feedback container">
                    <div class="row row-cols-md-2">
                        <div>
                            <h1>text</h1>
                        </div>
                        <div class="webform">
                            <Link to="/modal"> <button onClick={()=> setModalActive(true)}>СВЯЗЬ С НАМИ</button> </Link>
                            {/* eslint-disable-next-line no-restricted-globals */}
                            {!modalActive && history.back()}
                            <Routes>
                                <Route path="/modal" element={<Modal active={modalActive} setActive={setModalActive}>
                                    <Signup/>
                                </Modal>}/>
                            </Routes>

                        </div>
                    </div>
                </div>
            </footer>
        </body>
    );
}


export default App;
