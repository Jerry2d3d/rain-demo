import MainHeaderBar from "./components/mainheaderbar/mainheaderbar.tsx";
import FormHeaderMainTitle from "./components/form-header-main-title/form-header-main-title.tsx";
import AccordionAttendeeMain  from "./components/accordion-attendee-main/accordion-attendee-main.tsx";


function App() {
  return <div className="main-page">
    <div className="form-wrapper">
      <div className="main-form-body">
        <MainHeaderBar /> 
        <FormHeaderMainTitle />
        <AccordionAttendeeMain />
      </div>
    </div>
  </div>;
}

export default App
