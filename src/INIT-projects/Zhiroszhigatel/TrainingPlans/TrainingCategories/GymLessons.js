import React from 'react';
import INITBackButton from "../../../../Hooks/BackButton";
import {AppRoot, Button, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import INITDivider from "../../../CustomComponents/Dividers/Divider";
import img from "../../TrainingPlans/CardImages/gymImg.png"

const GymLessons = () => {

    INITBackButton();

    return (
        <AppRoot>


            <List>
                <Title>Урок из тренажерного зала</Title>
                <INITDivider color='transparent' thickness="10%"/>
                <Section>
                    <Cell
                        multiline
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/wgv6awhnr6w"
                                style={{
                                    border: "none", // Removes the border
                                    borderRadius: 16,
                                    padding: 5,
                                }}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Cell>
                    <Cell
                        multiline
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239799&hash=2847c52092e73dce"
                                width="95%" height="215" frameBorder="0" allowFullScreen="1"
                                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                style={{
                                    border: "none", // Removes the border
                                    borderRadius: 16,
                                    padding: 5,
                                }}
                            ></iframe>
                        </div>
                    </Cell>
                </Section>

                <INITDivider color='transparent' thickness="10%"/>

                <Section>
                    <Cell
                        multiline
                    >
                        Любая тренировка расходует энергию, калории, соответствено
                        при соблюдении плана питания с дефицитом калорий, любая тренировка будет сжигать жиры.
                    </Cell>
                    <Cell
                        multiline
                        subhead="Разделите задачи в своей голове:"
                    >
                        <ol>
                            <li>Физические упраженения нам нужны для красивого, спортивного тела, после снижения
                                подкожного жира
                            </li>
                            <li>Худеем мы за счет питания (дефицита калорий), ускоряем похудение за счет увеличения
                                расхода энергии аэробными движениями, обычные шаги, легкий бег, кардио, бытовая
                                активность
                            </li>
                        </ol>
                    </Cell>
                </Section>

                <INITDivider color='transparent' thickness="10%"/>

                <Section>
                    <Cell
                        multiline
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/FrzZWrXk_UM"
                                style={{
                                    border: "none", // Removes the border
                                    borderRadius: 16,
                                    padding: 5,
                                }}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Cell>
                    <Cell
                        multiline
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239808&hash=aa4ba231e2cfe72a"
                                width="95%" height="215" frameBorder="0" allowFullScreen="1"
                                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                style={{
                                    border: "none", // Removes the border
                                    borderRadius: 16,
                                    padding: 5,
                                }}
                            ></iframe>
                        </div>
                    </Cell>
                </Section>

                <INITDivider color='transparent' thickness="10%"/>

                <Section>
                    <Cell
                        multiline
                    >
                        Тренировкой мы не отработаем съеденные калории, не получится, если вы будете увеличивать физ нагрузки, компенсация будет за счет увеличения аппетита
                    </Cell>
                    <Cell
                        multiline
                    >
                        <img
                            src={img}
                            style={{width: '100%', display: 'block'}}
                            alt="Book Cover"
                        />
                    </Cell>
                    <Cell
                        multiline
                    >
                        Обратите внимание, чтоб отработать один сникерс нужно заниматься полтора часа в тренажерном зале, но после такого продолжительного изнурительного занятия, аппетит поднимется и мы опять больше съедим, чем потратили
                    </Cell>
                    <Cell
                        multiline
                        subhead="Тезисы:"
                    >
                        <ul>
                            <li>Худеем мы за счет питания</li>
                            <li>Тренировка для красивого, рельефного тела, для мышц</li>
                            <li>Мышцы нужны, чтоб после похудения тело выглядело подтянуто и спортивно</li>
                            <li>Тренировка ускоряет сжигание жира при соблюдение диеты (не значительно)</li>
                            <li>Важно не скорость, а объем выполненой работы. Бежать или идти пешком, решать вам, но калорий потратите одинаково</li>
                            <li>Продолжительные пешие прогулки или кардио тренировки нужны, чтоб развить выносливость</li>
                            <li>Чем вынослевее вы станете, тем больше сможете сделать объема, тем больше калорий сожгете</li>
                            <li>Сочетаем силовую нагрузки с аэробной (кардио)</li>
                            <li>Силовая тренировка нужна, чтоб нарастить/сохранить мышцы, которые будут видно ПОСЛЕ похудения</li>
                            <li>Повышаем бытовую активность - уборка дома, строительство, ремонт, количество шагов за день, лестница заместо лифтов и эсколаторов</li>
                            <li>Тренировка в спорт зале, лучше чем дома. Дома мозг настроен отдыхать</li>
                        </ul>
                    </Cell>
                    <Cell
                        multiline
                    >
                        Минимальная количество шагов за день - не менее 10000 шагов
                        Рекомендованное количество 15000-20000 шагов и более в день (я буду на это ориентироваться)
                    </Cell>
                </Section>
            </List>
        </AppRoot>
    );
};

export default GymLessons;