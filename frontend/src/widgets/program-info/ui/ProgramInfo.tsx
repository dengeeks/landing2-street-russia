import "./ProgramInfo.css";
import SectionTitle from "@/shared/ui/SectionTitle";
import Button from "@/shared/ui/Button";

const ProgramInfo = () => {
    return (
        <section className="program-info section-spacing-top" id="program">
            <div className="program-info__container container">
                <div className="program-info__header">
                    <SectionTitle>Программа</SectionTitle>
                    <Button type="button" className="red">вся программа</Button>
                </div>

                <div className="program-info__content">
                    <div className="program-info__block dashed-all">
                        <h3 className="program-info__subtitle">МЕСТО</h3>
                        <p className="program-info__text">
                            Место: Россия, г. Барнаул, Алтайский государственный университет, проспект Социалистический,
                            68
                        </p>
                    </div>
                    <div className="program-info__block dashed-all">
                        <h3 className="program-info__subtitle">ЦЕЛЕВАЯ АУДИТОРИЯ</h3>
                        <p className="program-info__text">
                            специалисты в сфере молодежной политики, специалисты по работе с молодежью ВУЗов,
                            руководители региональных отделений ОООУКС «Улицы России», активные представители
                            уличной культуры и спорта Российской Федерации, лидеры мнений и общественные деятели.
                        </p>
                    </div>
                    <div className="program-info__dates">
                        <span className="program-info__dates-label">Даты проведения</span>
                        <div className="program-info__dates-range">
                            24-27
                            <br/>
                            октября
                        </div>
                    </div>

                    <div className="program-info__block dashed-all">
                        <h3 className="program-info__subtitle">ЦЕЛЬ</h3>
                        <p className="program-info__text">
                            Комплексное развитие и повышение профессиональных компетенций менеджеров и организаторов,
                            занимающихся уличными культурами и спортом, формирование навыков эффективного управления
                            проектами, организации мероприятий
                            <br/>
                            и сетевого взаимодействия для поддержки и развития уличной культуры и спорта на местном и
                            региональном уровнях.
                        </p>
                    </div>
                </div>
                <Button type="button" className="red program-info__button">вся программа</Button>
            </div>
        </section>

    )
}

export default ProgramInfo;