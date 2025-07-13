import "./MediaAccreditation.css";
import SectionTitle from "@/shared/ui/SectionTitle";
import { getMedia } from '../api/getMedia'

const MediaAccreditation = async () => {
    const mediaData = await getMedia()
    return (
        <section className="media-accreditation section-spacing-top section-spacing-bottom" id='media'>
            <div className="media-accreditation__container container">
                <SectionTitle className="dark media-accreditation__title">
                    {mediaData.title}
                </SectionTitle>
                <div className="media-accreditation__info">
                    <span className="media-accreditation__deadline">
                        {mediaData.date}<br />
                    </span>
                    <span className="media-accreditation__contact">
                        {mediaData.fio}<br />
                        {mediaData.email}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default MediaAccreditation;
