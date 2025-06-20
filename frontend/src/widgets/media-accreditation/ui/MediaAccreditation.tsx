import "./MediaAccreditation.css";
import SectionTitle from "@/shared/ui/SectionTitle";

const MediaAccreditation = () => {
    return (
        <section className="media-accreditation section-spacing-top" id='media'>
            <div className="media-accreditation__container container">
                <SectionTitle className="dark">
                    Аккредитация <br /> для СМИ
                </SectionTitle>
                <div className="media-accreditation__info">
                    <span className="media-accreditation__deadline">
                        до 22 октября 18:00<br />
                    </span>
                    <span className="media-accreditation__contact">
                        Елизавета Сырыгина<br />
                        info@streetrussia.ru
                    </span>
                </div>
            </div>
        </section>
    );
};

export default MediaAccreditation;
