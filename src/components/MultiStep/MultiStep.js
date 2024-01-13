import MenuBookIcon from '@mui/icons-material/MenuBook';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
function MultiStep(props) {
    return (
        <>
            <div className='row-span-1 '><MenuBookIcon /></div>
            <div className="row-span-2">
                {props.listOfQuestions.map((items, index) => {
                    return (<div key={index}>{items.id === props.activeQuestionId ?
                        <CircleOutlinedIcon fontSize="small" /> :
                        <CircleIcon fontSize="small" />}
                    </div>)
                })}
                <div>{props.showOverViewPage ? <CircleOutlinedIcon fontSize="small" /> :
                    <CircleIcon fontSize="small" />}</div>
            </div>
        </>
    );
}
export default MultiStep;