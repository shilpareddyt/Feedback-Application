import { submitAnswers } from '../../service'
function Overview(props) {
    const questions = props.questions;
    const submitAnswer=(questions)=>{
        submitAnswers(questions);
    }
    return (
        <div className="col-span-8 grid grid-rows-3 pl-4 ">
            <div className="row-span-1 grid grid-cols-5 text-[35px] font-semibold ">
                <div className="col-span-2  pt-12">An Overview of your answers</div>
            </div>
            <div className="row-span-2">
                <table className="table-auto border-spacing-4" >
                {questions.map((option) => {
                    return <tr><td className="text-[20px] w-1/2 border border-slate-150"><h5>{option.title}</h5></td>
                        <td className="options"><h4>{option.answer}</h4></td></tr>
                })}
                </table>
                <button className="bg-[#6B53FE] pt-1 pb-1 text-white rounded w-[150px] text-[20px]" 
                onClick={()=>submitAnswer(questions)}>sumbit</button>

            </div>
        </div>
    );
}
export default Overview;