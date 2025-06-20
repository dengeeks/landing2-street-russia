import "./Banner.css";
import MediaSwitcher from "@/shared/ui/MediaSwitcher";
import Button from "@/shared/ui/Button";

const Banner = () => {
    return (
        <section className="banner">
            <MediaSwitcher type="photo" src="/test/photo.png" alt="баннер" sizes="calc(100vw - 32px)"/>
            <div className="banner__inner container">
                    <h1 className="banner__title section-title">всероссийский тур улиц россии март-май 2025
                    </h1>
                <Button className="compact red banner__button">Купить билет</Button>

            </div>
        </section>
    );
};

export default Banner;
