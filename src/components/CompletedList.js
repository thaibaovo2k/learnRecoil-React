import React from 'react';
import { useRecoilValue } from 'recoil'
import { completedListState } from '../recoil/listState';
import './list.css';

const CompletedList = () => {
    const completedList = useRecoilValue(completedListState);

    return (
        <div className='col completed'>
            <h3 className='completed'>Completed</h3>
            <ul>
                {completedList.map((item) => (
                    <li key={item.id} className='completed'>
                        {item.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompletedList;