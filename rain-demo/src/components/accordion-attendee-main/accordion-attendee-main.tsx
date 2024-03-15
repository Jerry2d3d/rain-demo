import "./accordion-attendee-main.scss";
import personportalimg from "../../assets/person-portal.png";
import AccordionAttendeeGeneral from "./accordion-attendee-general/accordion-attendee-general.tsx";
import AccordionAttendeeRegPortal from "./accordion-attendee-reg-portal/accordion-attendee-reg-portal.tsx";
import AccordionAttendePortal from "./accordion-attendee-portal/accordion-attendee-portal.tsx";
import AccordionAttendeExhibitorPortal from "./attendee-exhibitor-portal/attendee-exhibitor-portal.tsx";



const AccordionAttendeeMain = () => {
    return <div className="app">
        <div className="accordion-attendee">
            <div className="accordion-attendee-header">
            <div className="accordion-attendee-header-icon">
                <img src={ personportalimg} alt="Person Portal Icon" />
            </div>
                <h3 className="accordion-attendee-header-title">Org Settings</h3>
            </div>
            <AccordionAttendeeGeneral />
            <AccordionAttendeeRegPortal />
            <AccordionAttendePortal />
            <AccordionAttendeExhibitorPortal />
        </div>
    </div>;
}

export default AccordionAttendeeMain;