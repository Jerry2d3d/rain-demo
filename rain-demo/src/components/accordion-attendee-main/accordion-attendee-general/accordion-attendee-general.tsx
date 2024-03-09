import './accordion-attendee-general.scss';

const AccordionAttendeeGeneral = () => {
	return (
        <div className="accordion-attendee-steps">
            <h4 className="accordion-attendee-steps-text"><strong>Step 1:</strong>Base settings.</h4>
            <div className="general-form-information">
                <div className="general-form-information-info-box">
                    <label>General</label>
                    <p>Define Attendee types & attributes</p>
                </div>
                <div className="general-form-information-info-box">
                    <label>Title</label>
                    <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                </div>
                <div className="general-form-information-info-box">
                    <label>Title</label>
                    <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                </div>
            </div>
        </div>
	);
}

export default AccordionAttendeeGeneral;