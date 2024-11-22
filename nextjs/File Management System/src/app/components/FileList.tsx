'use client';

import React, { useState } from 'react';
import { useFileContext } from '../contexts/FileContext';
import SearchAndFilter from './SearchAndFilter';
import BulkActions from './BulkActions';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowDownUp, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const FileList: React.FC = () => {
    const { files, searchQuery, favoritesFilter, selectAll, toggleFavorite, toggleSelectAll, toggleSelect, selectedFileIds, setSelectedFileIds } = useFileContext();

    const [sortOption, setSortOption] = useState('date');

    const filteredFiles = files
        .filter((file) => (favoritesFilter ? file.isFavorite : true))
        .filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortOption === 'date') return new Date(a.dateModified) < new Date(b.dateModified) ? -1 : 1;
            if (sortOption === 'size') return a.size - b.size;
            if (sortOption === 'type') return a.type.localeCompare(b.type);
            if (sortOption === 'name') return a.name.localeCompare(b.name);
            return 0;
        });

    return (
        <div className="space-y-4">
            <SearchAndFilter />
            <BulkActions />
            <Card className='overflow-auto max-h-96'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                <Checkbox
                                    checked={selectAll}
                                    onClick={toggleSelectAll}
                                />
                            </TableHead>
                            <TableHead className="cursor-pointer" onClick={() => setSortOption("name")}><div className='flex items-center space-x-3'>Name <ArrowDownUp size={14} className={`${sortOption === 'name' ? '' : 'invisible'}`} /></div></TableHead>
                            <TableHead className="cursor-pointer" onClick={() => setSortOption("date")}><div className='flex items-center space-x-3'>Date Modified <ArrowDownUp size={14} className={`${sortOption === 'date' ? '' : 'invisible'}`} /></div></TableHead>
                            <TableHead className="cursor-pointer" onClick={() => setSortOption("size")}><div className='flex items-center space-x-3'>Size <ArrowDownUp size={14} className={`${sortOption === 'size' ? '' : 'invisible'}`} /></div></TableHead>
                            <TableHead className="cursor-pointer" onClick={() => setSortOption("type")}><div className='flex items-center space-x-3'>Type <ArrowDownUp size={14} className={`${sortOption === 'type' ? '' : 'invisible'}`} /></div></TableHead>
                            <TableHead>Favorite</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredFiles.map((file) => (
                            <TableRow key={file.id}>
                                <TableCell>
                                    <Checkbox
                                        checked={file.isSelected}
                                        onCheckedChange={() => {
                                            if (!selectedFileIds.includes(file.id)) {
                                                setSelectedFileIds([...selectedFileIds, file.id])
                                            } else {
                                                const index = selectedFileIds.indexOf(file.id);
                                                if (index > -1) {
                                                    const selectedFileIdsCopy = [...selectedFileIds];
                                                    selectedFileIdsCopy.splice(index, 1);
                                                    setSelectedFileIds([...selectedFileIdsCopy]);
                                                }
                                            }

                                            console.log("selectedFileIds", selectedFileIds);

                                            toggleSelect(file.id)
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{file.name}</TableCell>
                                <TableCell>{file.dateModified}</TableCell>
                                <TableCell>{file.size} KB</TableCell>
                                <TableCell>{file.type}</TableCell>
                                <TableCell onClick={() => toggleFavorite(file.id)} className="cursor-pointer">{file.isFavorite ? <Star fill="yellow" /> : <Star />}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default FileList;
