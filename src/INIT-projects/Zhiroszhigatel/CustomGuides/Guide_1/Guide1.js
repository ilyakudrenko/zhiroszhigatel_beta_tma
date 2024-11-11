import React from 'react';
import {Image, List, Section, Title, Text, Cell, Card, Caption,} from "@telegram-apps/telegram-ui";

import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import INITDivider from "../../../CustomComponents/Dividers/Divider";


const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
};


const containerStyle = {
    width: "100%",       // Занимает всю возможную ширину
    height: "300px",     // Фиксированная высота; можно изменить при необходимости
    overflow: "hidden",  // Обрезает изображение, чтобы соответствовать контейнеру
    position: "relative",
};

const imageStyle = {
    width: "100%",
    height: "100%",
    // objectFit: "cover",  // Масштабирует изображение, сохраняя пропорции, заполняя контейнер
    position: "absolute",
    top: 0,
    left: 0,
};

const imageCellStyle = {
    width: "50%",          // Set a smaller width (e.g., 50%)
    height: "auto",        // Adjust height to maintain aspect ratio
    position: "relative",  // Use relative positioning for easier centering
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",      // Centers the image horizontally
};



const INITGuide_1 = ({info = [],}) => {
    return (
        <List
            style={{
                padding: '5%',
                // backgroundColor: "var(--tgui--background)",
                // backgroundColor: "darkred",
            }}

        >

            <div style={containerStyle}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
                    alt="Background"
                    style={imageStyle}
                />
            </div>


                <Title level="1" weight="bold">
                    Гайд по продуктовой корзине
                </Title>

                <INITDivider color='transparent' thickness="10%"/>

                <Section
                    style={roundedCellStyle}
                >
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения состояния
                        здоровья
                        и самочувствия.

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
                            alt="Background"
                            style={imageCellStyle}
                        />

                    </Cell>
                </Section>

            <Caption
                caps
                level="1"
                weight="3"
                style={{margin: '5%'}}
            >
                Пояснение
            </Caption>

                <Section
                    style={roundedCellStyle}
                >
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Здесь будут группы
                        продуктов и мои
                        пояснения к ним.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Наиболее оптимальные
                        продукты для питания,
                        то есть энергетически не
                        плотные и богатые содержанию витаминов,
                        минералов (содержат относительно немного калорий на 100гр продукта).
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Выбор таких продуктов, хорошая стратегия
                        для поддержания оптимального здоровья,
                        самочувствия, а главное поможет в построении или поддержании здорового подтянутого
                        тела, без лишних килограмм.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Энергетически не плотные продукты
                        хорошо насыщают за счет большого объема
                        порций и содержания большого количества
                        клетчатки, это поможет послать сигналы в мозг
                        о том, что желудок полон и Вы сыты, контроль
                        аппетита улучшится и неконтролируемые зажоры будут нивелированы.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        ✔ Выбирайте продукты исходя из вкусовых
                        предпочтений, переносимости.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        ✔ Спланируйте блюда на 2-4 дня и купите продуктов исходя из запланированных блюд и рецептов.
                    </Cell>
                </Section>

            <Caption
                caps
                level="1"
                weight="3"
                style={{margin: '5%'}}
            >
                Овощи
            </Caption>
            <Section
                style={roundedCellStyle}
            >
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Чем больше овощей в вашем рационе, тем
                    лучше, чем разноцветней и разнообразней
                    овощи, тем еще лучше.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Исключение картофель, скорее относится к
                    комплексным углеводам, так как содержит
                    большее количество углеводов относительно
                    других овощей.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    К этой группе можно приписать грибы, они
                    также содержат относительно немного калорий, имеют хорошие вкусовые и полезные
                    свойства.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Предпочтение отдаем свежим овощам, но,
                    если возможности нет можно использовать
                    замороженные овощи, они совсем незначительно отличаются по питательности от свежих.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Маринованные и ферментированные овощи
                    также являются очень полезным продуктов и
                    рекомендованы к использованию. Рекомендации: от 5шт и более овощей в день.
                </Cell>
            </Section>

            <Caption
                caps
                level="1"
                weight="3"
                style={{margin: '5%'}}
            >
                Фрукты, Ягоды
            </Caption>
            <Section
                style={roundedCellStyle}
            >
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    На сегодняшний
                    день значимость
                    фруктов очень
                    сильно переоценена, мол содержание витаминов и полезных
                    веществ в них зашкаливает...
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Безусловно питательность свежего фрукта на много ценнее и полезней относительно обыч ного сахара или конфеты,
                    с этим не поспоришь.
                    Но допустим содержание витаминов во многих овощах больше,
                    чем во фруктах, например витамина С в болгарском перце больше,
                    чем в апельсине.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Также благодаря современной селекции фруктов, они стали намного слаще чем встречаются
                    в дикой природе и естественно содержат намного меньше полезных микронутриентов и
                    больше природного сахара - фруктозы.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Скажем так, фрукты безусловно рекомендуются к употреблению, но не к злоупотреблению.
                    Рекомендации: 2-3 фрукта в день более чем
                    достаточно.
                </Cell>
            </Section>

            <Caption
                caps
                level="1"
                weight="3"
                style={{margin: '5%'}}
            >
                Мясо и птица
            </Caption>
            <Section
                style={roundedCellStyle}
            >
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Основной группой продуктов в нашей корзине является белковая. Мясо скота, мясо птицы
                    один из главных источников белка в рационе.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Исходя из последних данных исследований в
                    области питания, ВОЗ относит красное мясо к
                    канцерогенам группы 2А.
                    То есть это продукт, для доказательства вреда
                    которых нет достаточного количества исследований. То есть это как бы и не канцероген.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Однозначно канцерогенным признано обработанное мясо (группа 1),
                    это мясо, подверженное посолу, копчению для увеличения
                    срока хранения или усиления вкуса, поэтому
                    эти продукты минимизируем (колбасы, копчёности и тд).
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Вам самим решать какое мясо вы будете употреблять, но во всяком случае мясо птицы
                    безопасно и рекомендовано к употреблению.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Также полезным будет мясо на кости, если
                    его долго поварить все полезные вещества из
                    кости выварятся и будет полезны для вашего
                    организма.
                </Cell>
            </Section>

            <Caption
                caps
                level="1"
                weight="3"
                style={{margin: '5%'}}
            >
                Рыба, Морепродукты
            </Caption>
            <Section
                style={roundedCellStyle}
            >
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Рыба, морепродукты – эталон здоровья и долголетия и отличный источник белка.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Сейчас почти все знают и пьют добавку Омега 3, жирные кислоты, которые содержаться
                    преимущественно в рыбьем жире.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Действительно польза этих жирных кислот
                    для организма очень
                    важна и будет очень
                    полезно добавить их
                    на регулярную основу
                    в рацион.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Биодоступность Омега 3 безусловно выше из
                    природных источников нежели из пилюль, поэтому отдавайте предпочтение жирной рыбе
                    из холодных морей, желательно дикорастущей, это лосось, тунец, форель, сельдь, скумбрия.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    ✔ Крупные хищные рыбы из-за загрязнений
                    океанов могут в себе накапливать много ртути, поэтому их часто и много не рекомендуется употреблять.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    ✔ Также избегаем переработанных рыбных
                    продуктов, таких как крабовые палочки, рыбные котлеты и тд.
                    Их изготавливают к сожалению не из рыбы и крабов.
                </Cell>
            </Section>

            <Caption
                caps
                level="1"
                weight="3"
                style={{margin: '5%'}}
            >
                ХЛЕБ, МУЧНЫЕ ИЗДЕЛИЯ
            </Caption>
            <Section
                style={roundedCellStyle}
            >
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Для того чтобы худеть не обязательно отказываться от хлеба и мучных изделий, но нужно
                    понимать что обычный хлеб белый, черный
                    серый и любые другие мучные изготавливаются из максимально рафинированной
                    (переработанной) муки, переваривается и
                    усваивается такие изделия в ЖКТ человека
                    максимально быстро и не
                    задерживаются там, соответственно переесть их очень
                    легко и контролировать аппетит становится сложнее.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Чуть более предпочтительным будут изделия
                    из обдирной муки и цельно зерновой, она
                    чуть меньше подвергается обработки и дольше насыщает нас.
                </Cell>
            </Section>

            <Caption
                caps
                level="1"
                weight="3"
                style={{margin: '5%'}}
            >
                МОЛОЧНЫЕ ПРОДУКТЫ
            </Caption>
            <Section
                style={roundedCellStyle}
            >
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Молочные продукты
                    являются хорошим
                    источником белка.
                    У некоторых дела с
                    усвоение лактозы так
                    себе и им можно пробовать кисломолочные
                    продукты, там лактоза ферментируется бактериями и ее содержание становится меньше, но у большинства
                    все норм поэтому наслаждайтесь и набирайте
                    белка в свой рацион, он очень важен.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    По жирности молочных продуктов предпочтение отдавайте золотой середине, например
                    творог 5%, сметана 15%, это будет и питательней и вкуснее,
                    допустим совсем жирные продукты, творог 18%, при стратегии похудении
                    не лучший вариант, также как и совсем все
                    обезжиренное пластмассовое, тоже не обязательно!
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Также очень много сахаров добавляют в различные йогурты,
                    творожки, конечно же выбираем молочные продукты без добавленных
                    сахаров и вообще без вкусов дополнительных.
                </Cell>
            </Section>

            <Caption
                caps
                level="1"
                weight="3"
                style={{margin: '5%'}}
            >
                МАКАРОНЫ, КРУПЫ
            </Caption>
            <Section
                style={roundedCellStyle}
            >
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Сейчас так много мы переедаем простых форм углеводов,
                    это прежде всего касается сахара и обычной белой муки, что даже не
                    замечаем, как из-за этого у нас копится жир
                    на животе, боках и попе.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Опять же простые формы углеводов очень
                    легко усваиваются и не задерживаются в ЖКТ,
                    из-за этого мы их и перебираем.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Попробуйте съесть три приемы пищи с хорошей порцией гречки, как вам?
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    У вас весь ЖКТ забьет, вы физически не сможете переесть ее,
                    думаю логика понятна, выбираем цельнозерновые – гречка, рис дикий,
                    бурый, овсяная крупа, если хлопья, то самой
                    долгой варки, сюда отлично подойдут бобовые, чечевица, нутт, горох и тд...
                    Макароны из твердых сортов пшеницы (например barilla).
                </Cell>
            </Section>


            {/*<Caption*/}
            {/*    caps*/}
            {/*    level="1"*/}
            {/*    weight="3"*/}
            {/*    style={{margin: '5%'}}*/}
            {/*>*/}

            {/*</Caption>*/}
            {/*<Section*/}
            {/*    style={roundedCellStyle}*/}
            {/*>*/}
            {/*    <Cell*/}
            {/*        multiline*/}
            {/*        interactiveAnimation="background"*/}
            {/*    >*/}

            {/*    </Cell>*/}
            {/*    <Cell*/}
            {/*        multiline*/}
            {/*        interactiveAnimation="background"*/}
            {/*    >*/}

            {/*    </Cell>*/}
            {/*</Section>*/}



        </List>
    );
};

export default INITGuide_1;