// shared/ui/GenreTags.tsx
import React from 'react';
import './GenreTags.css';

const genres = ['jungle', 'hip-hop', 'funk.breaks', 'dnb', 'break beat'];

const GenreTags = () => {
    return (
        <div className="genre-tags">
            {genres.map((genre, index) => (
                <div className={`genre-tags__item genre-tags__item--${index} dashed-all`} key={genre}>
                    {genre}
                </div>
            ))}
        </div>
    );
};

export default GenreTags;
