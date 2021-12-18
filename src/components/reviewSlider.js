import React, {Component} from "react";
import Slider from "react-slick";
import Ciel from "../Images/logo_0.png"
import PW from "../Images/logo.png"
import Cabel from "../Images/cableman_ru.png"
import Farbors from "../Images/farbors_ru.jpg"
import Estee from "../Images/logo-estee.png"
import Serebro from "../Images/logo_2.png"
import Lab from "../Images/lpcma_rus_v4.jpg"
import Gazeta from "../Images/nashagazeta_ch.png"
import './reviewSliderStyle.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ReviewSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={ count: 1}
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            fade: true,
            swipe: false,
            draggable: false,
            slidesToShow: 1,
            adaptiveHeight: true,
            beforeChange: (current, next) => this.setState({ activeSlide: next+1 }),
            afterChange: current => this.setState({ activeSlide2: current })
        };
        return (
            <div className="reviews-shadow">
            <div className="reviews-block">
                <Slider ref={c => (this.slider = c)} {...settings} className="reviews-slider">
                    <div key={1}>
                        <img src={Ciel} alt="Ciel"/>
                        <div className="reviews-text">
                            Долгие поиски единственного и неповторимого мастера на
                            многострадальный сайт&nbsp;www.cielparfum.com, который был
                            собран крайне некомпетентным программистом и раз
                            в месяц стабильно грозил погибнуть, привели меня на сайт
                            и, в итоге, к ребятам из Drupal-coder. И вот уже
                            практически полгода как не проходит и дня, чтобы я не
                            поудивлялась и не порадовалась своему везению!
                            Починили все, что не работало - от поиска до отображения
                            меню. Провели редизайн - не отходя от желаемого, но со
                            своими существенными и качественными дополнениями.
                            Осуществили ряд проектов - конкурсы, тесты и тд. А уж
                            мелких починок и доработок - не счесть! И главное - все
                            качественно и быстро (не взирая на не самый "быстрый"
                            тариф). Есть вопросы - замечательный Алексей всегда
                            подскажет, поддержит, отремонтирует и/или просто
                            сделает с нуля. Есть задумка для реализации -
                            замечательный Сергей обсудит и предложит идеальный
                            вариант. Есть проблема - замечательные Надежда и Роман
                            починят, поправят, сделают! Ребята доказали, что эта CMS -
                            мощная и грамотная система управления. Надеюсь, что
                            наше сотрудничество затянется надолго! Спасибо!!!
                        </div>

                        <div className="reviews-author">
                            С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний «Си Эль
                            парфюм»&nbsp;
                            <a href="http://www.cielparfum.com/">http://www.cielparfum.com/</a>
                        </div>
                    </div>
                    <div key={2}>
                        <img src={PW} alt="Personal Writer"/>
                        <div className="reviews-text">
                            Сергей — профессиональный, высококвалифицированый
                            программист с огромным опытом в ИТ. Я долгое время
                            общался с топ-фрилансерами (вся первая двадцатка) на
                            веблансере и могу сказать, что С СЕРГЕЕМ ОНИ И РЯДОМ
                            НЕ ВАЛЯЛИСЬ. Работаем с Сергеем до сих пор. С ним
                            приятно работать, я доволен.&nbsp;
                        </div>
                        <div className="reviews-author">
                            Сергей Чепурко, руководитель проекта&nbsp;
                            <a href="http://www.personal-writer.com/">www.personal-writer.com</a>
                            &nbsp;/&nbsp;
                            <a href="http://www.writers-united.org/">www.writers-united.org</a>
                        </div>
                    </div>
                    <div key={3} className="reviews-slide">
                        <img src={Cabel} alt="Кабельщик"/>
                        <div className="reviews-text">
                            Наша компания за несколько лет сменила несколько
                            команд программистов и специалистов техподдержки, и
                            почти отчаялась найти на российском рынке адекватное
                            профессиональное предложение по разумной цене. Пока
                            мы не начали работать с командой "Инитлаб",
                            воплощающей в себе все наши представления о
                            нормальной системе взаимодействия в сочетании с
                            профессиональным неравнодушием. Впервые в моей
                            деловой практике я чувствую надежно прикрытыми
                            важнейшие задачи в жизни электронного СМИ, при том,
                            что мои коллеги работают за сотни километров от нас и мы
                            никогда не встречались лично.
                        </div >
                        <div className="reviews-author">
                            Константин Бельский, зам. генерального директора портала
                            <a href="http://www.cableman.ru/">Кабельщик.ру</a>
                        </div>
                    </div>
                    <div key={4}>
                        <img src={Farbors} alt="Строймаркеты то, что надо"/>
                        <div className="reviews-text">
                            Выражаю глубочайшую благодарность команде
                            специалистов компании "Инитлаб" и лично Дмитрию
                            Купянскому и Алексею Синице. Сайт был первоклассно
                            перевёрстан из старой табличной модели в новую на базе
                            Drupal с дополнительной функциональностью. Всё было
                            сделано с высочайшим качеством и точно в сроки. Всем
                            кому хочется без нервов и лишних вопросов разработать
                            сайт рекомендую обращаться именно к этой команде
                            профессионалов.
                        </div>
                        <div className="reviews-author">
                            Леонид Александрович Ледовский
                        </div>
                    </div>

                    <div key={5}>
                        <img src={Estee} alt="Estee"/>
                        <div className="reviews-text">
                            Наша компания Estee Design занимается дизайном
                            интерьеров. Сайт сверстан на Drupal. Искали
                            программистов под выполнение ряда небольших
                            изменений и корректировок по сайту. Пообщавшись с
                            Алексеем Синицей, приняли решение о начале работ с
                            компанией Initlab/drupal-coder. Сотрудничеством довольны
                            на 100%. Четкая и понятная система коммуникации,
                            достаточно оперативное решение по задачам. Дали
                            рекомендации по улучшению програмной части сайта,
                            исправили ряд скрытых ошибок. Никогда не пишу отзывы
                            (нет времени), но в данном случае, по просьбе Алексея, не
                            могу не рекомендовать Initlab другим людям -
                            действительно компания профессионалов.
                        </div>
                        <div className="reviews-author">
                            Кузин Вадим, руководитель строительного направления Дизайн-бюро интерьеров Estee
                            <a href="http://estee-design.ru">estee-design.ru</a>
                        </div>
                    </div>
                    <div key={6}>
                        <img src={Serebro} alt="Serebro"/>
                        <div className="reviews-text">
                            За довольно продолжительный срок (2014 - 2016 годы)
                            весьма плотной работы (интернет-магазин на безумно
                            замороченном Drupal 6: устраняли косяки разработчиков,
                            ускоряли сайт, сделали множество новых функций и т.п.) -
                            только самые добрые эмоции от работы с командой Initlab
                            / Drupal-coder: всегда можно рассчитывать на быструю и
                            толковую помощь, поддержку, совет. Даже сейчас, не
                            смотря на то, что мы почти год не работали на постоянной
                            основе (банально закончились задачи), случайно
                            возникшая проблема с сайтом была решена мгновенно! В
                            общем, только самые искренние благодарности и
                            рекомендации! Спасибо! )
                        </div>
                        <div className="reviews-author">
                            С уважением, Владислав,
                            <a href="http://serebro.ag">Serebro.Ag.</a>
                        </div>
                    </div>
                    <div key={7}>
                        <img src={Lab} alt="лаборотория"/>
                        <div className="reviews-text">
                            Хотел поблагодарить за работу над нашими сайтами. За 4
                            месяца работы привели сайт в порядок, а самое главное
                            получили инструмент, с помощью мы теперь можем
                            быстро и красиво выставлять контент для образования и
                            работы с предприятиями
                            http://lpcma.tsu.ru/ru/post/reference_material Ну и многому
                            научись благодаря работе с вами. Мы очень рады, что
                            удалось найти настолько компетентных ребят )
                        </div>
                        <div className="reviews-author">
                            Дмитрий Новиков,
                            <a href="http://lpcma.tsu.ru">lpcma.tsu.ru</a>
                        </div>
                    </div>
                    <div key={8}>
                        <img src={Gazeta} alt="Наша газета"/>
                        <div className="reviews-text">
                            Моя электронная газета www.nashagazeta.ch существует в
                            Швейцарии уже 10 лет. За это время мы сменили 7
                            специалистов по техподдержке, и только сейчас, в
                            последние несколько месяцев, с начала сотрудничества с
                            Алексеем Синицей и его командой, я впервые
                            почувствовала, что у меня есть надежный технический
                            тыл. Без громких слов и обещаний, ребята просто
                            спокойно и качественно делают работу, быстро реагируют,
                            находят решения, предлагают конкретные варианты
                            улучшения функционирования сайта и сами их оперативно
                            осуществляют. Сотрудничество с ними – одно удовольствие!
                        </div>
                        <div className="reviews-author">
                            Надежда Сикорская, Женева, Швейцария
                        </div>
                    </div>

                </Slider>
                <div className="reviews-switch-block">
                    <button className="button" id="reviews-previous" onClick={this.previous}>
                    </button>
                    <div className="reviews-display">
                        <span id="reviews-number">0{this.state.activeSlide || 1}</span> / 08
                    </div>

                    <button className="button" id="reviews-next" onClick={this.next}>

                    </button>
                </div>
            </div>
            </div>
        );
    }
}


