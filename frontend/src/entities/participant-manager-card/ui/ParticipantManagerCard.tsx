import "./ParticipantManagerCard.css";
import Image from "next/image";
import type { ParticipantType } from '@/shared/api/home-tour/type'
import { getImageUrl } from '@/shared/utils/getImageUrl'

const ParticipantManagerCard = ({image, fio, email, phone, title, social_links}: ParticipantType) => {
    return (
        <article className="participant-manager-employee">
            <div className="participant-manager-photo-wrapper">
                <Image src={getImageUrl(image || undefined)} alt={fio} width={222} height={255} sizes="(min-width: 950px) 222px, (min-width: 768px) 180px, 143px"/>
                <div className="participant-manager-name">
                    <div className="participant-manager-name-text">{fio}</div>
                </div>
            </div>
            <div className="participant-manager-info">
                <div className="participant-manager-role">{title}</div>
                <div className="participant-manager-contacts">
                    <div className="participant-manager-info-row">
                        <span className="participant-manager-label">mail:</span>
                        <span className="participant-manager-value">{email}</span>
                    </div>
                    <div className="participant-manager-value">{phone}</div>
                </div>
                <div className="participant-manager-social-links">
                    {social_links.map((social, index) => (
                      <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                        <Image src={getImageUrl(social.social_media.image)} alt={`${social.social_media.name} участника ${fio}`} width={42} height={42}/>
                    </a>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ParticipantManagerCard;
