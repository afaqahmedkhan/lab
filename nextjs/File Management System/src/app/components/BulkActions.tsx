import { Button } from '@/components/ui/button';
import React from 'react';
import { useFileContext } from '../contexts/FileContext';

const BulkActions: React.FC = () => {
    const { favoriteAll, selectAll, bulkFavorite, selectedFileIds } = useFileContext();

    return (
        <><div className="flex justify-between items-center mb-4">
            <Button onClick={favoriteAll}
                disabled={!selectAll}
                className=" px-4 py-2 border rounded-md">
                Mark All Files Favorite
            </Button>
            <Button onClick={bulkFavorite}
                disabled={selectedFileIds.length <= 0}
                className="px-4 py-2 border rounded-md">
                Mark Selected Files Favorite
            </Button>
        </div></>
    );
};

export default BulkActions;
