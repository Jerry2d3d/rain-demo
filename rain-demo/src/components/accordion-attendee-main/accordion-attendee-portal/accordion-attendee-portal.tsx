import './accordion-attendee-portal.scss';
import attendeecomputericon from "../../../assets/computer.png";

const AccordionAttendePortal = () => {
	return (
        <div className="accordion-attendee-steps">
                        <h4 className="accordion-attendee-steps-text"><strong>Step 3:</strong>Design attendee experiences.</h4>
                        <div className="attendee-reg-portal">
                            <div className="attendee-reg-portal-box">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                                        <img src={attendeecomputericon} />
                                    </div>
                                    <label>Attendee Portal</label>
                                </div>
                                <p>Manage the portal that attendees will see after they've register for your event.</p>
                            </div>
                        </div>
                    </div>
	);
}

export default AccordionAttendePortal;