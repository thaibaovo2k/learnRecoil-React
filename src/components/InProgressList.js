import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { completedListState, inprogressListState } from '../recoil/listState';
import './list.css';

const InProgressList = () => {
    const inProgressList = useRecoilValue(inprogressListState);
    const setCompleted = useSetRecoilState(completedListState);
    const handleClick = (id) => () => {
        setCompleted(id);
    }
    
    return (
        <div className='col inprogess'>
            <h3 className='inprogress'>Inprogress</h3>
            <ul>
                {inProgressList.map((item) => (
                    <li key={item.id} className='inprogress'>
                        {item.content}
                        <button onClick={handleClick(item.id)} className='inprogress'>Completed</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InProgressList;