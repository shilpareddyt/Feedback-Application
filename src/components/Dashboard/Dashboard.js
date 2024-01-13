import { useEffect, useState } from 'react';
import MultiStep from '../MultiStep/MultiStep';
import Question from '../Question/Question';
import Option from '../Options/Option';
import Overview from '../Overview/Overview';
import { useDispatch, useSelector } from 'react-redux';
import {setActiveQuestionId} from '../../redux/Question/questionSlice'

function Dashboard() {
    const activeQuestionId= useSelector((state) => state?.question?.activeQuestionId ?? 0);
    const [showOverViewPage, setShowOverViewPage] = useState(false);
    const [animateClassName, setAnimateClassName] = useState('');
    const dispatch=useDispatch();

    const options= useSelector((state) => state?.options?.options ?? []);

    const [listOfQuestions, setListOfQuestions] = useState([
        { id: 0, title: 'How was your last week all ?', answer: '' },
        { id: 1, title: 'How was your last week bowling movement', answer: '' },
        { id: 2, title: 'How well are you last week', answer: '' },]);

    const saveOptionsInListOfQuestions = (id) => {
        const timer = setTimeout(() => {
            const res = [...listOfQuestions];
            listOfQuestions[activeQuestionId].answer = options[id].icon;
            setListOfQuestions(res);
            if (activeQuestionId === listOfQuestions.length-1) {
                setShowOverViewPage(true);
            }
           dispatch(setActiveQuestionId(activeQuestionId + 1))
            setAnimateClassName('')
        }, 1500);
        setAnimateClassName('animate')
        return () => clearTimeout(timer);
    }

    return (
        <div className='grid grid-cols-9'>
            <div className=" bg-[#6B53FE] grid grid-rows-3 col-span-1  p-8" >
                <MultiStep listOfQuestions={listOfQuestions}
                    activeQuestionId={activeQuestionId}
                    showOverViewPage={showOverViewPage} />
            </div>
                {showOverViewPage ? <Overview questions={listOfQuestions} /> : <>
                <div className=" bg-[#6B53FE] col-span-4 grid grid-rows-3  p-8">
                    <div className='row-span-1'></div>
                    {activeQuestionId<listOfQuestions.length&&<div className={`row-span-2  ${animateClassName}`}>
                        <Question question={listOfQuestions[activeQuestionId ]} />
                    </div>}

                </div>
                {showOverViewPage && <div className="bg-[#6B53FE] col-span-4 grid grid-rows-3 moveToLeft  p-8"></div>}
                <div className={`col-span-4  ${animateClassName}`} style={{ backgroundColor: 'White', height: '100vh' }}>
                    <div className='grid text-center bg-white' style={{ height: '100vh' }}>
                        <Option options={options} saveOptionsInListOfQuestions={saveOptionsInListOfQuestions} />
                    </div>
                </div>
            </>}
        </div>
    );
}
export default Dashboard;