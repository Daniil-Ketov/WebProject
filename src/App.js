import React, {useState} from "react";
import './App.css';
import Modal from "./components/Modal";
import {Signup} from "./components/signup";
import ReviewSlider from "./components/reviewSlider";
import PartnersSlider1 from "./components/partnersSlider1";
import PartnersSlider2 from "./components/partnersSlider2";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import laptop1 from "./Images/laptop_case_1.jpg"
import laptop2 from "./Images/laptop_case_2.jpg"
import monitor from "./Images/monitor_case.png"
import speed from "./Images/speed_case.jpg"
import stat from "./Images/stat_case.jpg"
import competency_1 from "./Images/competency-1.svg"
import competency_2 from "./Images/competency-2.svg"
import competency_3 from "./Images/competency-3.svg"
import competency_4 from "./Images/competency-4.svg"
import competency_5 from "./Images/competency-5.svg"
import competency_6 from "./Images/competency-6.svg"
import competency_7 from "./Images/competency-7.svg"
import competency_8 from "./Images/competency-8.svg"
import competency_20 from "./Images/competency-20.svg"
import competency_21 from "./Images/competency-21.svg"
import competency_22 from "./Images/competency-22.svg"
import support_1 from  "./Images/support1.svg"
import support_2 from  "./Images/support2.svg"
import support_3 from  "./Images/support3.svg"
import support_4 from  "./Images/support4.svg"
import support_5 from  "./Images/support5.svg"
import support_6 from  "./Images/support6.svg"
import support_7 from  "./Images/support7.svg"
import support_8 from  "./Images/support8.svg"
import telegram from "./Images/telegram_icon.png"
import youtube from "./Images/youtube_icon.png"
import vk from "./Images/vk_icon.png"
import facebook from "./Images/facebook_icon.png"
import member_1 from "./Images/IMG_2472_0.jpg"
import member_2 from "./Images/IMG_2539_0.jpg"
import member_3 from "./Images/IMG_2474_1.jpg"
import member_4 from "./Images/IMG_2522_0.jpg"
import member_5 from "./Images/IMG_9971_16.jpg"
import drupal_coder from "./Images/drupal-coder.svg"
import typing from "./components/video/video.mp4"
import cup from "./Images/cup.png"
import laptop from "./Images/laptop.png"
import $ from "jquery"





function App() {
    const [modalActive,setModalActive] = useState(undefined);
    return (
        <body>
        <div className="navbar-absolute">
            <div className="container-md">
                <nav className="navbar navbar-expand-md">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="navigation-item">
                                <a className="nav-link" href="">ПОДДЕРЖКА DRUPAL</a>
                            </li>
                            <li className="navigation-item dropdown">
                                <a className="nav-link dropdown-toggle" href="">
                                    АДМИНИСТРИРОВАНИЕ
                                </a>
                                <div className="dropdown-menu dropdown-menu-1">
                                    <a className="dropdown-item" href="">МИГРАЦИЯ</a>
                                    <a className="dropdown-item" href="">БЭКАПЫ</a>
                                    <a className="dropdown-item" href="">АУДИТ БЕЗОПАСНОСТИ</a>
                                    <a className="dropdown-item" href="">ОПТИМИЗАЦИЯ СКОРОСТИ</a>
                                    <a className="dropdown-item" href="">ПЕРЕЕЗД НА HTTPS</a>
                                </div>
                            </li>
                            <li className="navigation-item">
                                <a className="nav-link" href="">ПРОДВИЖЕНИЕ</a>
                            </li>
                            <li className="navigation-item">
                                <a className="nav-link" href="">РЕКЛАМА</a>
                            </li>
                            <li className="navigation-item dropdown">
                                <a className="nav-link dropdown-toggle" href="">О НАС</a>
                                <div className="dropdown-menu dropdown-menu-2">
                                    <a className="dropdown-item" href="">КОМАНДА</a>
                                    <a className="dropdown-item" href="">DRUPALGIVE</a>
                                    <a className="dropdown-item" href="">БЛОГ</a>
                                    <a className="dropdown-item" href="">КУРСЫ DRUPAL</a>
                                </div>
                            </li>
                            <li className="navigation-item">
                                <a className="nav-link" href="">ПРОЕКТЫ</a>
                            </li>
                            <li className="navigation-item">
                                <a className="nav-link" href="">КОНТАКТЫ</a>
                            </li>
                        </ul>
                    </div>
                    <a className="navbar-brand" href="">
                        <img className="nav-icon" src={drupal_coder} alt="Навигация"/>
                    </a>
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </div>

        <div id="main">
            <div id="react-block"></div>
            <header>
                <div id="video-block">
                    <div id="video-filter"></div>
                    <video className="video-background" autoPlay loop muted>
                        <source src={typing} type="video/mp4"/>
                    </video>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="bars-title">
                                Поддержка<br/>сайтов на Drupal
                            </h1>
                            <div className="sub-title">
                                Сопровождение и поддержка сайтов<br/>
                                на CMS Drupal любых версий и запущенности
                            </div>
                            <a href="#rates" className="rate-button">ТАРИФЫ</a>
                        </div>
                        <div className="col-md-6">
                            <div className="row redline-text-blocks">
                                <div className="col-sm-4 col-6 redline-box">
                                    <div className="redline">
                                        <div className="redline-title">
                                            #1
                                            <img src={cup} alt="#1"/>
                                        </div>
                                        <div className="redline-text">
                                            Drupal-разработчик <br/> в России по версии Рейтинга Рунета
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-6 redline-box">
                                    <div className="redline">
                                        <div className="redline-title">3+</div>
                                        <div className="redline-text">
                                            средний опыт <br/> специалистов более <br/> 3 лет
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-6 redline-box">
                                    <div className="redline">
                                        <div className="redline-title">14</div>
                                        <div className="redline-text">
                                            лет опыта в сфере Drupal
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-6 redline-box">
                                    <div className="redline">
                                        <div className="redline-title">50+</div>
                                        <div className="redline-text">
                                            модулей и тем <br/> в формате DrupalGive
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-6 redline-box">
                                    <div className="redline">
                                        <div className="redline-title">90 000+</div>
                                        <div className="redline-text">
                                            часов поддержки <br/> сайтов на Drupal
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-6 redline-box">
                                    <div className="redline">
                                        <div className="redline-title">300+</div>
                                        <div className="redline-text">
                                            Проектов <br/> на поддержке
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="competencies">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                13 лет совершенствуем <br/> компетенции в Друпал <br/> поддержке!
                            </h2>
                            <div className="competencies-top-text">
                                Разрабатываем и оптимизируем модули, расширяем <br/> функциональность сайтов, обновляем
                                дизайн
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-3 competency-unit">
                            <div className="competency-pic">
                                <img src={competency_1} alt="Компетенция-1"/>
                            </div>
                            <div className="text">
                                Добавление <br/> информации на сайт,<br/> создание новых <br/> разделов
                            </div>
                        </div>
                        <div className="col-6 col-md-3 competency-unit">
                            <div className="competency-pic">
                                <img src={competency_2} alt="Компетенция-2"/>
                            </div>
                            <div className="text">
                                Разработка <br/> и оптимизация <br/> модулей сайта
                            </div>
                        </div>
                        <div className="col-6 col-md-3 competency-unit">
                            <div className="competency-pic">
                                <img src={competency_3} alt="Компетенция-3"/>
                            </div>
                            <div className="text">
                                Интеграция с CRM, <br/> 1C, платежными <br/> системами, любыми <br/> веб-сервисами
                            </div>
                        </div>
                        <div className="col-6 col-md-3 competency-unit">
                            <div className="competency-pic">
                                <img src={competency_4} alt="Компетенция-4"/>
                            </div>
                            <div className="text">
                                Любые доработки <br/> функционала <br/> и дизайна
                            </div>
                        </div>
                        <div className="col-6 col-md-3 competency-unit">
                            <div className="competency-pic">
                                <img src={competency_5} alt="Компетенция-5"/>
                            </div>
                            <div className="text">
                                Аудит и мониторинг <br/> безопасности Drupal <br/> сайтов
                            </div>
                        </div>
                        <div className="col-6 col-md-3 competency-unit">
                            <div className="competency-pic">
                                <img src={competency_6} alt="Компетенция-6"/>
                            </div>
                            <div className="text">
                                Миграция, импорт <br/> контента и апгрейд <br/> Drupal
                            </div>
                        </div>
                        <div className="col-6 col-md-3 competency-unit">
                            <div className="competency-pic">
                                <img src={competency_7} alt="Компетенция-7"/>
                            </div>
                            <div className="text">
                                Оптимизация <br/> и ускорение <br/> Drupal-сайтов
                            </div>
                        </div>
                        <div className="col-6 col-md-3 competency-unit">
                            <div className="competency-pic">
                                <img src={competency_8} alt="Компетенция-8"/>
                            </div>
                            <div className="text">
                                Веб-маркетинг, <br/> консультации <br/> и работы по SEO
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="support">
                <h2>
                    Поддержка<br/>от Drupal-coder
                </h2>
                <div className="container ">
                    <div className="row  ">
                        <div className="col-12 col-md-6 col-lg-3 support-item ">
                            <div className="support-block m-1">
                                <div className="support-digit">01.</div>
                                <div className="support-title">Постановка задачи по Email</div>
                                <div className="text">
                                    Удобная и привычная модель постановки задач, при которой задачи фиксируются и
                                    никогда не теряются.
                                </div>
                                <div className="support-icon">
                                    <img src={support_1} alt="Постановка задачи"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 support-item">
                            <div className="support-block m-1">
                                <div className="support-digit">02.</div>
                                <div className="support-title">Система Helpdesk – отчетность, прозрачность</div>
                                <div className="text">
                                    Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете
                                    через браузер.
                                </div>
                                <div className="support-icon">
                                    <img src={support_2} alt="Система Helpdesk"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 support-item">
                            <div className="support-block m-1">
                                <div className="support-digit">03.</div>
                                <div className="support-title">Расширенная техническая поддержка</div>
                                <div className="text">
                                    Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.
                                </div>
                                <div className="support-icon">
                                    <img src={support_3} alt="Тех. поддержка"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 support-item">
                            <div className="support-block m-1">
                                <div className="support-digit">04.</div>
                                <div className="support-title">Персональный менеджер проекта</div>
                                <div className="text">
                                    Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент
                                    готов ответить на любые
                                    вопросы.
                                </div>
                                <div className="support-icon">
                                    <img src={support_4} alt="Персональный менеджер проекта"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 support-item">
                            <div className="support-block m-1">
                                <div className="support-digit">05.</div>
                                <div className="support-title">Удобные способы оплаты</div>
                                <div className="text">
                                    Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги,
                                    Paypal.
                                </div>
                                <div className="support-icon">
                                    <img src={support_5} alt="Удобные способы оплаты"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 support-item">
                            <div className="support-block m-1">
                                <div className="support-digit">06.</div>
                                <div className="support-title">Работаем с SLA и NDA</div>
                                <div className="text">
                                    Работа в рамках соглашений о конфиденциальности и об уровне качества работ.
                                </div>
                                <div className="support-icon">
                                    <img src={support_6} alt="Работаем с SLA и NDA"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 support-item">
                            <div className="support-block m-1">
                                <div className="support-digit">07.</div>
                                <div className="support-title">Штатные специалисты</div>
                                <div className="text">
                                    Надежные штатные специалисты, никаких фрилансеров.
                                </div>
                                <div className="support-icon">
                                    <img src={support_7} alt="Штатные специалисты"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 support-item">
                            <div className="support-block m-1">
                                <div className="support-digit">08.</div>
                                <div className="support-title">Удобные каналы связи</div>
                                <div className="text">
                                    Консультации по телефону, скайпу, в месенджерах.
                                </div>
                                <div className="support-icon">
                                    <img src={support_8} alt="Удобные каналы связи"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="laptop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6 block-redlines">
                            <div className="row redline-text-blocks">
                                <div className="col-12">
                                    <h2 className="mt-3">
                                        Экспертиза в Drupal,<br/> опыт 14 лет!
                                    </h2>
                                </div>
                                <div className="col-md-6 col-12 redline-box">
                                    <div className="redline">
                                        <div className="redline-text">
                                            Только системный подход – контроль версий, резервирование и тестирование!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 redline-box">
                                    <div className="redline">
                                        <div className="redline-text">
                                            Только Drupal сайты, не берем на поддержку сайты на других CMS!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 redline-box">
                                    <div className="redline">
                                        <div className="redline-text">
                                            Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем
                                            <a href="">свои модули Drupal</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 redline-box">
                                    <div className="redline">
                                        <div className="redline-text">
                                            Поддерживаем сайты на Drupal 5, 6, 7 и 8
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="laptop-pic">
                    <img src={laptop} alt="Ноутбук"/>
                </div>
            </section>
            <section className="rates" id="rates">
                <h2>
                    Тарифы
                </h2>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 order-1 rate-col">
                            <div className="rate-unit">
                                <div className="rate-name">Стартовый</div>
                                <ul>
                                    <li>Консультации и работы по SEO</li>
                                    <li>Услуги дизайнера</li>
                                    <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
                                    <li>Предоплата от 6 000 рублей в месяц</li>
                                </ul>
                                <Link to="/modal"> <button id="contact-button-1" className="contact-button call-form" onClick={()=> setModalActive(true)}>СВЯЗЬ С НАМИ</button> </Link>


                            </div>
                        </div>
                        <div className="col-12 col-md-4 order-3 rate-col">
                            <div className="rate-unit">
                                <div className="rate-name">VIP</div>
                                <ul>
                                    <li>Консультации и работы по SEO</li>
                                    <li>Услуги дизайнера</li>
                                    <li>Максимальное время реакции - в день обращения</li>
                                    <li>Неиспользованные оплаченные часы не переносятся</li>
                                    <li>Предоплата от 270 000 рублей в месяц</li>
                                </ul>
                                <Link to="/modal"> <button id="contact-button-1" className="contact-button call-form" onClick={()=> setModalActive(true)}>СВЯЗЬ С НАМИ</button> </Link>

                            </div>
                        </div>
                        <div className="col-12 col-md-4 order-2 rate-col main-rate">
                            <div className="rate-unit">
                                <div className="rate-name">Бизнес</div>
                                <ul>
                                    <li>Консультации и работы по SEO</li>
                                    <li>Услуги дизайнера</li>
                                    <li>Высокое время реакции - до 2 рабочих дней</li>
                                    <li>Неиспользованные оплаченные часы не переносятся</li>
                                    <li>Предоплата от 30 000 рублей в месяц</li>
                                </ul>
                                <Link  to="/modal"> <button id="contact-button-1" className="contact-button call-form" onClick={()=> setModalActive(true)}><span className="fw-bold">СВЯЗЬ С НАМИ</span></button> </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="individual-rate">
                    Вам не подходят наши тарифы? Оставьте заявку и мы <br/> предложим вам индивидуальные условия!<br/>
                    <a id="contact-button-4" className="call-form" href="">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</a>
                </div>
            </section>
            {/* eslint-disable-next-line no-restricted-globals */}
            {!modalActive && history.back()}
            <Routes>
                <Route path="/modal" element={<Modal active={modalActive} setActive={setModalActive}>
                    <Signup/>
                </Modal>}/>
            </Routes>
            <section className="quick-tasks">
                <div className="container">
                    <div className="row">
                        <div className="col-12 quick-tasks-title">
                            <h2>
                                Наши профессиональные разработчики выполняют быстро любые задачи
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 competency-unit">
                            <div className="text">
                                <div className="competency-pic">
                                    <img src={competency_20} alt="Task-1"/>
                                </div>
                                <div className="time">от 1ч</div>
                                <div>Настройка события GA <br/> в интернет-магазине</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 competency-unit">
                            <div className="text">
                                <div className="competency-pic">
                                    <img src={competency_21} alt="Task-2"/>
                                </div>
                                <div className="time">от 20ч</div>
                                <div>Разработка мобильной <br/> версии сайта</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 competency-unit">
                            <div className="text">
                                <div className="competency-pic">
                                    <img src={competency_22} alt="Task-3"/>
                                </div>
                                <div className="time">от 8ч</div>
                                <div>Интеграция модуля <br/> оплаты</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team">
                <div className="container">
                    <div className="team-unit">
                        <div className="row">
                            <h2 className="col-12">
                                Команда
                            </h2>
                            <div className="col-6 col-sm-6 col-md-4 members-unit">
                                <div className="members-panel">
                                    <div className="members-picture">
                                        <img src={member_1} alt="Фото члена команды"
                                             width="280" height="280" className="pic-adaptive"/>
                                    </div>
                                    <div className="members-name">Сергей Синица</div>
                                    <div className="members-function">Руководитель отдела веб-разработки, канд. техн.
                                        наук, заместитель директора
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-4 members-unit">
                                <div className="members-panel">
                                    <div className="members-picture">
                                        <img src={member_2} alt="Фото члена команды"
                                             width="280" height="280" className="pic-adaptive"/>
                                    </div>
                                    <div className="members-name">Роман Агабеков</div>
                                    <div className="members-function">Руководитель отдела DevOPS, директор</div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-4 members-unit">
                                <div className="members-panel">
                                    <div className="members-picture">
                                        <img src={member_3} alt="Фото члена команды"
                                             width="280" height="280" className="pic-adaptive"/>
                                    </div>
                                    <div className="members-name">Алексей Синица</div>
                                    <div className="members-function">Руководитель отдела поддержки сайтов</div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-4 members-unit">
                                <div className="members-panel">
                                    <div className="members-picture">
                                        <img src={member_4} alt="Фото члена команды"
                                             width="280" height="280" className="pic-adaptive"/>
                                    </div>
                                    <div className="members-name">Дарья Бочкарёва</div>
                                    <div className="members-function">Руководитель отдела продвижения, контекстной
                                        рекламы и контент-поддержки сайтов
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-4 members-unit">
                                <div className="members-panel">
                                    <div className="members-picture">
                                        <img src={member_5} alt="Фото члена команды"
                                             width="280" height="280" className="pic-adaptive"/>
                                    </div>
                                    <div className="members-name">Ирина Торкунова</div>
                                    <div className="members-function">Менеджер по работе с клиентами</div>
                                </div>
                            </div>
                        </div>
                        <div className="all-team"><a href="">Вся команда</a></div>
                    </div>
                </div>
            </section>
            <section className="container last-cases">
                <h2>
                    Последние кейсы
                </h2>
                <div className="last-cases-table">
                    <a className="case-block" href="">
                        <div className="case-pic" style= {{backgroundImage: `url(${laptop1})`}}></div>
                        <h3>
                            Настройка кэширования данных. Апгрейд сервера. Ускорение работы сайта в 30 раз!
                        </h3>
                        <div className="case-post-date">04.05.2020</div>
                        <div className="case-text">Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс
                            ускорения...
                        </div>
                    </a>
                    <a className="case-block fullscreen-case" href="">
                        <div className="case-pic" style= {{backgroundImage: `url(${laptop2})`}}></div>
                        <h3>
                            Использование отчетов Ecommerce в Яндекс.Метрике
                        </h3>
                    </a>
                    <a className="case-block fullscreen-case" href="">
                        <div className="case-pic" style= {{backgroundImage: `url(${stat})`}}></div>
                        <h3>
                            Повышение конверсии страницы с формой заявки с применением AB-тестирования
                        </h3>
                        <div className="case-post-date">24.01.2020</div>
                    </a>
                    <a className="case-block fullscreen-case" href="">
                        <div className="case-pic" style= {{backgroundImage: `url(${speed})`}}></div>
                        <h3>
                            Drupal 7: ускорение времени генерации страниц интернет-магазина на 32%
                        </h3>
                        <div className="case-post-date">23.09.2019</div>
                    </a>
                    <a className="case-block" href="">
                        <div className="case-pic" style= {{backgroundImage: `url(${monitor})`}}></div>
                        <h3>
                            Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1С: Предприятие, МойСклад,
                            Класс365
                        </h3>
                        <div className="case-post-date">22.08.2019</div>
                        <div className="case-text">Опубликован <span className="case-href">релиз модуля...</span></div>
                    </a>
                </div>
            </section>
            <section className="reviews-warapper">
                <div className="container reviews">
                    <h2>
                        Отзывы
                    </h2>
                    <ReviewSlider></ReviewSlider>
                </div>
            </section>
            <section className="work-with-us">
                <h2>С нами работают</h2>
                <div className="work-with-us-title">
                    Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты. Мы делаем всё,
                    чтобы наше
                    сотрудничество было долгим.
                </div>
                <PartnersSlider1></PartnersSlider1>
                <PartnersSlider2></PartnersSlider2>
            </section>
            <section className="container faq">
                <h2>FAQ</h2>
                <div className="faq-enum">
                    <div>
                        <h3>
                            <span className="faq-one">1.</span>Кто непосредственно занимается поддержкой?
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">2.</span>Как организована работа поддержки?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">3.</span>Что происходит, когда отработаны все предоплаченные часы
                            за месяц?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">4.</span>Что происходит, когда не отработаны все предоплаченные
                            часы за месяц?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">5.</span>Как происходит оценка и согласование планируемого времени
                            на выполнение заявок?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">6.</span>Сколько программистов выделяется на проект?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">7.</span>Как подать заявку на внесение изменений на сайте?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">8.</span>Как подать заявку на добавление пользователя, изменение
                            настроек веб-сервера и других задач по администрированию?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">9.</span>В течение какого времени начинается работа по заявке?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">10.</span>В какое время работает поддержка?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">11.</span>Подходят ли услуги поддержки, если необходимо произвести
                            обновление ядра Drupal или модулей?
                        </h3>

                    </div>
                    <div>
                        <h3>
                            <span className="faq-one">12.</span>Можно ли пообщаться со специалистом голосом или в
                            мессенджере?
                        </h3>

                    </div>
                </div>
            </section>
            <footer className="footer-block">
                <div className="container">
                    <div id="footer-phrase">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="connect-wrapper">
                                    <div className="connect-title">Оставить заявку на <br/> поддержку сайта</div>
                                    <div className="connect-description">Срочно нужна поддержка сайта? Ваша команда не
                                        успевает справиться самостоятельно или предыдущий подрядчик не справился с
                                        работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами
                                        свяжется!
                                    </div>
                                    <div className="connect-contacts">
                                        <ul>
                                            <li className="contacts-phone"><a href="">8 800 222-26-73</a></li>
                                            <li className="contacts-email"><a href="">info@drupal-coder.ru</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-block">
                                    <Signup></Signup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="socialnetwork-block-wrapper">
                        <div className="socialnetwork-block">
                            <div className="footer-links-wrapper">
                                <ul className="footer-links">
                                    <li className="footer-pic facebook"><a href=""><img
                                        src={facebook} alt="Facebook"/></a></li>
                                    <li className="footer-pic vkontakte"><a href=""><img src={vk}
                                                                                         alt="VK"/></a></li>
                                    <li className="footer-pic telegram"><a href=""><img
                                        src={telegram} alt="Telegram"/></a></li>
                                    <li className="footer-pic youtube"><a href=""><img src={youtube}
                                                                                       alt="Youtube"/></a></li>
                                </ul>
                            </div>
                            <p>Проект ООО «Инитлаб», Краснодар, Россия.
                                <br/>
                                    Drupal является зарегистрированной торговой маркой Dries Buytaert.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </body> )

}


export default App;
