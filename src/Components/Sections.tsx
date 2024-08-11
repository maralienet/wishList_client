import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import axios from 'axios-typescript';

type SectionProps = {
    name: string,
    isActive: boolean,
    onClick: () => void,
}

type SectionsProps = {
    onClick: (name: string) => void,
}

type Section = {
    id: string,
    name: string
}

const Section: React.FC<SectionProps> = ({ name, isActive, onClick }) => {
    return (
        <div className={`section ${isActive ? 'active' : ''}`} onClick={onClick}>
            {name}
        </div>
    );
}

export const Sections: React.FC<SectionsProps> = ({ onClick }) => {
    const [active, setActive] = useState('');
    const [sects, setSects] = useState<Section[]>([]);

    useEffect(() => {
        axios.get('https://wishlist-server-7u5y.onrender.com/categories')
            .then((res) => {
                let data = JSON.parse(res.data);
                setSects(data);
            })
    }, []);

    function handleClick(name: string) {
        setActive(name);
        onClick(name);
    };

    return (
        <div className='sections'>
            <p>☆ Категории ☆</p>
            {
                sects.length > 0 && sects?.map(sect => (
                    <Section key={sect.id} name={sect.name} isActive={active === sect.id} onClick={() => handleClick(sect.id)} />
                ))
            }
        </div>
    );
}

export const SectionsCollapsible: React.FC<SectionsProps> = ({ onClick }) => {
    const [active, setActive] = useState('');

    function handleClick(name: string) {
        setActive(name);
        onClick(name);
    };

    return (
        <Collapsible trigger='☆ Категории ☆'>
            <Section name="Книги" isActive={active === 'Книги'} onClick={() => handleClick("Книги")} />
            <Section name="Игры" isActive={active === 'Игры'} onClick={() => handleClick("Игры")} />
            <Section name="Вкусности" isActive={active === 'Вкусности'} onClick={() => handleClick("Вкусности")} />
            <Section name="Другое" isActive={active === 'Другое'} onClick={() => handleClick("Другое")} />
        </Collapsible>
    );
}