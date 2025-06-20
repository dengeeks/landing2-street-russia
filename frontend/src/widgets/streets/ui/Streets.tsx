import "./Streets.css";
import SectionTitle from "@/shared/ui/SectionTitle";
import GenreTags from "./internal/GenreTags";

const Streets = () => {
    return (
        <section className="streets section-spacing-top" id="about">
            <div className="streets__container container">
                <div className="streets__content">
                    <SectionTitle>улицы</SectionTitle>
                    <div className="streets__description">
                        <p className="streets__paragraph">
                            Это не только дороги и дома, в которых мы живем, это все то,
                            что окружает нас каждый день, это огромная часть нашей жизни,
                            это образы, которые вдохновляют нас, раскрывают личности,
                            а мы их объединяем
                        </p>
                        <p className="streets__paragraph">
                            В рамках трехнедельного тура лучшие диджеи, хип-хоп артисты,
                            представители электронной музыки, танцоры и самые яркие локальные
                            исполнители будут ежедневно, с субботы по субботу, прокачивать один из
                            городов России.
                        </p>
                    </div>
                </div>
                <GenreTags/>
            </div>
        </section>
    )
}

export default Streets;