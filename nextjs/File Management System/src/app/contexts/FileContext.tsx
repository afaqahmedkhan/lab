'use client';

import { useToast } from '@/hooks/use-toast';
import React, { createContext, useContext, useState, useMemo } from 'react';
import { files as dummyFiles } from './../lib/dummyData'
import { File, FileContextType } from './../types'

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [files, setFiles] = useState<File[]>(dummyFiles);
    const [searchQuery, setSearchQuery] = useState('');
    const [favoritesFilter, setFavoritesFilter] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedFileIds, setSelectedFileIds] = useState<Number[]>([]);

    const { toast } = useToast();


    const toggleFavorite = (id: number) => {
        setFiles((prevFiles) =>
            prevFiles.map((file) => {
                if (file.id === id && !file.isFavorite) {
                    toast({
                        title: "The file has been marked favorite",
                        description: "The file has been marked favorite",
                    })
                } else if (file.id === id && file.isFavorite) {
                    toast({
                        title: "The file has been unmarked favorite",
                        description: "The file has been unmarked favorite",
                    })
                }
                return file.id === id ? { ...file, isFavorite: !file.isFavorite } : file;
            }
            )
        );
    };

    const toggleSelect = (id: number) => {
        setFiles((prevFiles) =>
            prevFiles.map((file) =>
                file.id === id ? { ...file, isSelected: !file.isSelected } : file
            )
        );
    };

    const toggleFavoritesFilter = () => {
        setFavoritesFilter((prev) => !prev);
    };

    const toggleSelectAll = () => {
        setSelectAll((prevSelectAll) => !prevSelectAll);
        setFiles((prevFiles) =>
            prevFiles.map((file) => ({ ...file, isSelected: !selectAll }))
        );

    };

    const favoriteAll = () => {
        setSelectAll((prevSelectAll) => !prevSelectAll);
        setFiles((prevFiles) =>
            prevFiles.map((file) => ({ ...file, isFavorite: true, isSelected: false }))
        );
        toast({
            title: "All files have been marked favorite",
            description: "All files Have been marked favorite",
        })
    };

    const bulkFavorite = () => {
        setFiles((prevFiles) =>
            prevFiles.map((file) => {
                if (selectedFileIds.includes(file.id)) {
                    return { ...file, isFavorite: true, isSelected: false };
                } else {
                    return { ...file }
                }
            })
        );
        
        toast({
            title: "Selected files Have been marked favorite",
            description: "Selected files Have been marked favorite",
        })
    };

    const value = useMemo(
        () => ({
            files,
            searchQuery,
            selectedFileIds,
            setSelectedFileIds,
            setSearchQuery,
            favoritesFilter,
            toggleFavoritesFilter,
            toggleFavorite,
            toggleSelect,
            selectAll,
            toggleSelectAll,
            favoriteAll,
            bulkFavorite,
        }),
        [files, searchQuery, favoritesFilter, selectAll]
    );

    return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
};

export const useFileContext = () => {
    const context = useContext(FileContext);
    if (!context) {
        throw new Error('useFileContext must be used within a FileProvider');
    }
    return context;
};