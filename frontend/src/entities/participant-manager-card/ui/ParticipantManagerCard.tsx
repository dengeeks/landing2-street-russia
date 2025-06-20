import "./ParticipantManagerCard.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/shared/icon";

const ParticipantManagerCard = () => {
    return (
        <article className="participant-manager-employee">
            <div className="participant-manager-photo-wrapper">
                <Image src="/test/empoyee.png" alt="" fill/>
                <div className="participant-manager-name">
                    <div className="participant-manager-name-text">Анна Васильевна</div>
                </div>
            </div>
            <div className="participant-manager-info">
                <div className="participant-manager-role">Работа с участниками</div>
                <div className="participant-manager-contacts">
                    <div className="participant-manager-info-row">
                        <span className="participant-manager-label">mail:</span>
                        <span className="participant-manager-value">alyona@mail.ru</span>
                    </div>
                    <div className="participant-manager-value">+7 923 567-78-90</div>
                    <div className="participant-manager-info-row">
                        <span className="participant-manager-label">Офис:</span>
                        <span className="participant-manager-value">16мкр, д. 50, оф 216 пн-пт с 09.00–18.00</span>
                    </div>

                </div>
                <div className="participant-manager-social-links">
                    <Link href="/">
                        <Icon icon="telegram" width={42} height={42}/>
                    </Link>
                    <Link href="/">
                        <Icon icon="vk" width={42} height={42}/>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ParticipantManagerCard;
