import React from 'react';

interface FavoriteButtonProps {
    isFavorite: boolean;
    onClick: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onClick }) => {
    return (
        <button onClick={onClick} className="text-yellow-500">
            {isFavorite ? '★' : '☆'}
        </button>
    );
};

export default FavoriteButton;
