import './accordion-attendee-reg-portal.scss';
import attendeearrowicon from "../../../assets/logic-arrow.png";
import attendeeheadericon from "../../../assets/Header.png";

const AccordionAttendeeRegPortal = () => {
	return (
        <div className="accordion-attendee-steps">
            <h4 className="accordion-attendee-steps-text"><strong>Step 2:</strong>Build registration workflows.</h4>
                <div className="attendee-reg-portal">
                            <div className="attendee-reg-portal-box">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                                        <img src={attendeearrowicon} />
                                    </div>
                                    <label>Attendee Registration</label>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                            <div className="attendee-reg-portal-box">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                                        <img src={attendeearrowicon} />
                                    </div>
                                    <label>Attendee Registration</label>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                            <div className="attendee-reg-portal-box">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                                        <img src={attendeearrowicon} />
                                    </div>
                                    <label>Attendee Registration</label>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                            <div className="attendee-reg-portal-box-add">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                                        <img src={attendeeheadericon} />
                                    </div>
                                </div>
                                <p>Add Registration Workflow</p>
                            </div>
                        </div>
        </div>
	);
}

export default AccordionAttendeeRegPortal;