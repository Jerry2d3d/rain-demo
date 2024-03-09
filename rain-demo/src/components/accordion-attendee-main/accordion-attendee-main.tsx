import "./accordion-attendee-main.scss";
import AccordionAttendeeGeneral from "./accordion-attendee-general/accordion-attendee-general.tsx";


const AccordionAttendeeMain = () => {

    return <div className="app">
        <div className="accordion-attendee">
            <div className="accordion-attendee-header">
            <div className="accordion-attendee-header-icon">
                <img src="./assets/person-portal.png" alt="Person Portal Icon" />
            </div>
                <h3 className="accordion-attendee-header-title">Org Settings</h3>
            </div>
            <AccordionAttendeeGeneral />
        </div>
    </div>;
}

export default AccordionAttendeeMain;