import './mainheaderbar.scss';

const MainHeaderBar = () => {
	return (
		<div className="header-bar">
            <div className="header-bar-logo">
                <img src="../../assets/rainfocus-summit-logo.png" alt="logo" />
            </div>
                    <div className="header-bar-info">
                        <h1 className="page-title">RainFocus Summit</h1>
                        <div className="page-title-subtitle">
                            <p className="event-date">December 15th</p>
                            <p className="location-info">Lehi, Utah</p>
                        </div>
                    </div>
                    <div className="header-bar-button">
                        <button className="edit-event-button">Edit event</button>
            </div>
        </div>
	);
}

export default MainHeaderBar;