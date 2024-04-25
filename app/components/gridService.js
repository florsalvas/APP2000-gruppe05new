// components/Grid.js
import React from 'react';
import styles from './grid.module.css';
import Article from './article';

export default function Grid({ articles, onEdit }) {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.blurBackground}></div>
      <div className={styles.gridContainer}>
      <div className={styles.overlayGrid}>
                <h2 className={styles.title}>Våre tjenester</h2>
      </div>
        {articles.map((article, index) => (
          <div key={article.id} className={styles.gridItem}>
            <Article
              content={article}
              onEdit={() => onEdit(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
