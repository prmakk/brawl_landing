import React from "react";

import styles from "./Modal.module.scss";

const Modal = ({ onClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <button className={styles.close} onClick={onClose}>
                    X
                </button>
                <p className={styles.title}>Чтобы забрать приз:</p>
                <p className={styles.subtitle}>
                    1. Подпишись на канал <br />
                    <a href="https://t.me/alekzz03" target="_blank">
                        Подписаться &gt;
                    </a>
                    <button className={styles.button}>
                        <span>Получить награду</span>
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Modal;
