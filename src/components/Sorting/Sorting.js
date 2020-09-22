import React from 'react';
import './Sorting.scss';

import {
    SORT_BY_HIGHER_PRICE,
    SORT_BY_LESS_PRICE,
    SORT_BY_RATE,
    SORT_BY_YEAR,
  } from '../../constants';

function Sorting(props) {
    const onClickHandler = (e) => props.updateSorting(e.target.value);
    return (
        <div className="products-sort">
            <label>Сортировать по:</label>
            <select className="input" value={props.sorting} onChange={onClickHandler}> 
                <option disabled value=''></option>
                <option value={SORT_BY_YEAR}>По дате выпуска</option>
                <option value={SORT_BY_RATE}>По рейтингу</option>
                <option value={SORT_BY_LESS_PRICE}>По цене (дешевле)</option>
                <option value={SORT_BY_HIGHER_PRICE}>По цене (дороже)</option>
            </select>
        </div>
    );
}

export default Sorting;