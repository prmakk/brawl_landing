import React, { useState } from "react";
import { createPortal } from "react-dom";

import styles from "./HomePage.module.scss";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };
    return (
        <div className={styles.home}>
            {isModalOpen &&
                createPortal(
                    <Modal onClose={() => setIsModalOpen(false)} />,
                    document.getElementById("modal")
                )}

            <div className={styles.dropdown}>
                <select name="lang" id="lang">
                    <option value="ar">العربية</option>
                    <option value="cn">简体中文</option>
                    <option value="cnt">繁體中文</option>
                    <option value="de">Deutsch</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fi">Suomi</option>
                    <option value="fr">Français</option>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="it">Italiano</option>
                    <option value="jp">日本語</option>
                    <option value="kr">한국어</option>
                    <option value="ms">Bahasa Melayu</option>
                    <option value="nl">Nederlands</option>
                    <option value="no">Norsk</option>
                    <option value="pl">Polski</option>
                    <option value="pt">Português</option>
                    <option value="ru" selected>
                        русский
                    </option>
                    <option value="th">ไทย</option>
                    <option value="tr">Türkçe</option>
                    <option value="vi">Tiếng Việt</option>
                </select>
            </div>

            <div className={styles.content}>
                <a
                    className={styles.logo}
                    href="https://supercell.com/en/games/brawlstars/"
                    target="_blank"
                >
                    <img src="/logo.webp" alt="logo" loading="lazy" />
                </a>

                <div className={styles.nested}>
                    <h3>Получите награду в Brawl Stars!</h3>

                    <button className={styles.button} onClick={handleModal}>
                        <span>Получить награду</span>
                    </button>

                    <div className={styles.download}>
                        <p>Скачать Brawl Stars</p>
                        <div className={styles.links}>
                            <a href="https://brawlstars.onelink.me/XKTM/socialreferral">
                                <img src="/google-play.webp" alt="playmarket" />
                            </a>
                            <a href="https://brawlstars.onelink.me/XKTM/socialreferral">
                                <img src="/app-store.svg" alt="appstore" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
