'use client'
import "./TeamCard.css";
import Image from "next/image";
import Icon from "@/shared/icon";
import Link from "next/link";

interface TeamCardProps {
    isActive: boolean;
    onClick: () => void;
}

const TeamCard = ({ isActive, onClick }: TeamCardProps) => {
    return (
        <article className="team-card" onClick={!isActive ? onClick : undefined}>
            {!isActive ? (
                <div className="team-card__preview">
                    <div className="team-card__image-wrapper">
                        <Image src="/test/empoyee.png" alt="" fill className="team-card__image" />
                    </div>
                    <div className="team-card__name">Анна Васильевна</div>
                    <div className="team-card__position">Эксперт образовательной программы</div>
                </div>
            ) : (
                <div className="team-card__popup">
                    <div className="team-card__popup-header">
                        <div className="team-card__name">Анна Васильевна</div>
                        <button onClick={onClick} className="team-card__close-button" aria-label="Закрыть" type="button">
                            <Icon icon="close" width={16} height={16} />
                        </button>
                    </div>
                    <p className="team-card__position">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                    </p>
                    <div className="team-card__contact-item">
                        <span className="team-card__contact-label team-card__position">mail:</span>&nbsp;
                        <span className="team-card__position">alyona@mail.ru</span>
                    </div>
                    <div className="team-card__position">+7 923 567-78-90</div>
                    <div className="team-card__contact-item">
                        <span className="team-card__contact-label team-card__position">Офис:</span>&nbsp;
                        <span className="team-card__position">16мкр, д. 50, оф 216 пн-пт<br />с 09.00–18.00</span>
                    </div>
                    <div className="team-card__socials">
                        <Link href="/"><Icon icon="telegram" height={42} width={42} /></Link>
                        <Link href="/"><Icon icon="vk" height={42} width={42} /></Link>
                    </div>
                </div>
            )}
        </article>
    );
};

export default TeamCard;
