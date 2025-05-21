import React from 'react';
import { useApi } from '../../hooks/useApi';
import Card from '../common/Card';

const ItemList: React.FC = () => {
    const { data, loading, error } = useApi('https://api.example.com/items');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching items: {error.message}</div>;

    return (
        <div className="item-list">
            {data.map((item: { id: number; title: string; content: string }) => (
                <Card key={item.id} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default ItemList;