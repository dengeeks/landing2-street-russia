'use client'
import "./ModeratorsAndExperts.css";
import SectionTitle from "@/shared/ui/SectionTitle";
import TeamCard from "@/entities/team-card";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import {FreeMode, Navigation} from "swiper/modules";
import Icon from "@/shared/icon";
import {useState} from "react";
import { useHomeData } from '@/shared/context/home-data/useHomeDataContext'

const ModeratorsAndExperts = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const {moderator} = useHomeData()

    const handleCardClick = (index: number) => {
        setActiveIndex(prev => prev === index ? null : index);
    };
    return (
        <section className="moderators-experts section-spacing-top" id="experts">
            <div className="moderators-experts__container container">
                <div className="moderators-experts__title">
                    <SectionTitle>
                        Диджеи и гости
                    </SectionTitle>
                    <div className="moderators-experts__controls">
                        <div className="moderators-experts-prev">
                            <Icon icon="arrow" width={78} height={16} />
                        </div>
                        <div className="moderators-experts-next">
                            <Icon icon="arrow" width={78} height={16} className="top" />
                        </div>
                    </div>
                </div>
                    <Swiper
                        slidesPerView="auto"
                        grabCursor
                        freeMode
                        spaceBetween={20}
                        navigation={{
                            prevEl: '.moderators-experts-prev',
                            nextEl: '.moderators-experts-next',
                            enabled: true
                        }}
                        modules={[FreeMode, Navigation]}
                    >
                        {moderator.map((moder, index) => (
                            <SwiperSlide style={{ width: "auto" }} key={index}>
                                <TeamCard
                                    isActive={activeIndex === index}
                                    onClick={() => handleCardClick(index)}
                                    {...moder}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </section>
    );
};

export default ModeratorsAndExperts;
