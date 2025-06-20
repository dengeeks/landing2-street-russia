'use client'
import "./Header.css";
import Image from "next/image"
import Button from "@/shared/ui/Button";
import {useState} from "react";
import Icon from "@/shared/icon";
import Link from "next/link";
import {useBodyScrollLock} from "@/shared/hooks/useBodyScrollLock";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useBodyScrollLock(isMenuOpen)

    const toggleMenu = () => setIsMenuOpen(prev => !prev)

    return (
        <header className={`header ${isMenuOpen ? 'active' : ''}`}>
            <div className="header__inner container">
                <div className="header__top">
                    <Link href="/" className="header__logo">
                        <Image src="/logo.png" alt="Улицы России" fill />
                    </Link>
                    <button type="button" onClick={toggleMenu} className="header__burger" aria-label="Меню">
                        <Icon icon={isMenuOpen ? 'close' : 'burger'} width={39} height={12}/>
                    </button>
                    <div className="header__title hidden__mobile">
                        Всероссийский тур Улиц россии
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__title hidden__desktop">
                        Всероссийский тур Улиц россии
                    </div>
                    <nav className="header__nav">
                        <Link href="/#about" className="header__link" onClick={() => setIsMenuOpen(false)}>О туре</Link>
                        <Link href="/#locations" className="header__link" onClick={() => setIsMenuOpen(false)}>Где проходит</Link>
                        <Link href="/#program" className="header__link" onClick={() => setIsMenuOpen(false)}>Программа</Link>
                        <Link href="/#participants" className="header__link" onClick={() => setIsMenuOpen(false)}>Участники</Link>
                        <Link href="/#experts" className="header__link" onClick={() => setIsMenuOpen(false)}>Диджеи и гости</Link>
                        <Link href="/#location" className="header__link" onClick={() => setIsMenuOpen(false)}>Партнеры и организаторы</Link>
                        <Link href="/#media" className="header__link" onClick={() => setIsMenuOpen(false)}>Для СМИ</Link>
                    </nav>
                    <Button className="red compact">Купить билет</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
