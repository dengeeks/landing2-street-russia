import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/shared/icon";

const Footer = () => {
    return (
        <footer className="footer section-spacing-top">
            <div className="footer__container container">
                <div className="footer__logo">
                    <Link href="/" className="footer__logo-image">
                        <Image src="/logo-footer.png" alt="" fill/>
                    </Link>
                    <div className="footer__logo-text">
                        общероссийская общественная организация
                        <br/>
                        уличной культуры и спорта
                    </div>
                </div>

                <div className="footer__legal">
                    ОГРН: 1217700519101, ИНН: 2636219592
                </div>

                <div className="footer__contacts">
                    <Link href="/" className="footer__email">info@streetrussia.ru</Link>
                    <Link href="/" className="footer__phone">+7 (918) 752-55-17</Link>
                    <div className="footer__socials">
                        <Link href="/"><Icon icon="telegram" width={42} height={42}/></Link>
                        <Link href="/"><Icon icon="vk" width={42} height={42}/></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
