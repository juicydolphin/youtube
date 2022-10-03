import React from 'react';
import s from './search.module.scss'

const Search = () => {
    return (
        <div className={s.container}>
            <h1 className={s.searchTitle}>Поиск видео</h1>
            <div className={s.searchBlock}>
                <input placeholder={'Что хотите посмотреть?'}/>
                <button>Найти</button>
            </div>
        </div>
    );
};

export default Search;