import React from 'react';
import { inprogressListState, newListState } from '../recoil/listState';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import './list.css';

const NewList = () => {
    const newList = useRecoilValue(newListState);
    const setInProgress = useSetRecoilState(inprogressListState);
    const handleClick = (id) => () => {
        setInProgress(id);
    };

    return (
        <div className='col new'>
            <h3>New</h3>
            <ul>
                {newList.map((item) => (
                    <li key={item.id} className='new'>
                        {item.content}
                        <button onClick={handleClick(item.id)}  className='new'>In-progress</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewList;