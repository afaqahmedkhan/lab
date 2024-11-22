import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useFileContext } from '../contexts/FileContext';

const SearchAndFilter: React.FC = () => {
    const { searchQuery, setSearchQuery, favoritesFilter, toggleFavoritesFilter } = useFileContext();

    return (
        <div className="flex justify-between items-center mb-4">
            <Input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                className="p-2 border rounded-md w-1/2"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
                onClick={toggleFavoritesFilter}
                className={`px-4 py-2 border rounded-md `}
            >
                {favoritesFilter ? 'Show All' : 'Show My Favorites'}
            </Button>
        </div>
    );
};

export default SearchAndFilter;
