import Tooltip from '@mui/material/Tooltip';

function Option(props) {
    const options = props.options;
    const handleOptions = (id) => {
        props.saveOptionsInListOfQuestions(id);
    }
    return (
        <>
            <div className="options grid grid-cols-3 content-center place-items-center h-full">
                {options.map((option,index) => {
                    return <Tooltip key={index} title={option.label}>
                        <div id={'div-' + option.id}
                            className="transition transform hover:-translate-y-2"
                            key={option.id}
                            onClick={() => handleOptions(option.id)}>
                            {option.icon}
                        </div>
                    </Tooltip>
                })}
            </div>
        </>
    );
}
export default Option;