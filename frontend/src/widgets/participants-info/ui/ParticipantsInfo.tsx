import "./ParticipantsInfo.css";
import SectionTitle from "@/shared/ui/SectionTitle";
import Image from "next/image";
import ParticipantManagerCard from "@/entities/participant-manager-card/ui/ParticipantManagerCard";

const ParticipantsInfo = () => {
    return (
        <section className="participants-info container section-spacing-top" id="participants">
            <SectionTitle>участники</SectionTitle>

            <p className="participants-info__text">
                Всероссийский образовательный форум уличной культуры и спорта «Улицы России» — это проект про улицы, творчество, спорт, молодёжь, про открытость и стремление к самосовершенствованию.
                <br />
                <br />
                Участники форума «Улицы России» в Барнауле — это молодые специалисты в сфере молодежной политики и представители уличной индустрии, объединенные желанием развивать себя и общество, создавать проекты для людей улиц и свободно говорить о своем творчестве с обществом.
                <br />
                <br />
                Форум уличной культуры и спорта — уникальный проект, направленный на повышение интеллектуального капитала представителей уличной культуры в Российской Федерации.
            </p>

            <div className="participants-info__gallery">
                <ParticipantManagerCard/>
                <div className="participants-info__image-wrapper">
                    <Image src="/test/part.png" alt="" fill />
                </div>
                <div className="participants-info__image-wrapper">
                    <Image src="/test/part.png" alt="" fill />
                </div>
                <div className="participants-info__image-wrapper">
                    <Image src="/test/part.png" alt="" fill />
                </div>
                <div className="participants-info__image-wrapper">
                    <Image src="/test/part.png" alt="" fill />
                </div>
            </div>
        </section>
    );
};

export default ParticipantsInfo;
