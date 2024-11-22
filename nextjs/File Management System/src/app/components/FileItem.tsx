import React from 'react';
import { File } from '../types';
import FavoriteButton from './FavoriteButton';

interface FileItemProps {
    file: File;
    onToggleFavorite: (id: number) => void;
    onSelectFile: (id: number) => void;
    isSelected: boolean;
}

const FileItem: React.FC<FileItemProps> = ({ file, onToggleFavorite, onSelectFile, isSelected }) => {
    return (
        <div className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onSelectFile(file.id)}
                    className="mr-2"
                />
                <p className="font-semibold">{file.name}</p>
                <span className="text-gray-500 ml-2 text-sm">{file.size} KB</span>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-gray-500">{file.dateModified}</span>
                <FavoriteButton isFavorite={file.isFavorite} onClick={() => onToggleFavorite(file.id)} />
            </div>
        </div>
    );
};

export default FileItem;
