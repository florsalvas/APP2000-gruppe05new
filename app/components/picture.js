'use client'
import React from "react";
import PropTypes from 'prop-types';
import styles from './picture.module.css';

export default function Picture ({altText, caption}) {
    return (
        <div className={styles.pictureContainer}>
            <img alt={altText} className={styles.picture} /> 
            <div className={styles.gradientOverlayTop}></div>
            <div className={styles.gradientOverlayBottom}></div>
            {caption && <p className={styles.caption}>{caption}</p>}
        </div>
    );
};

Picture.propTypes = {
    altText: PropTypes.string,
    caption: PropTypes.string,
};

    