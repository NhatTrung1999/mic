import "./assets/fonts/roboto.css";
import "./assets/fonts/razerf5.css";
import "./assets/css/main.css";
import "./assets/css/nav.css";
import "./assets/css/dropdown.css";
import "./assets/css/switch.css";
import "./assets/css/slider.css";
import "./assets/css/checkbox.css";
import "./assets/css/tooltip.css";
import "./assets/css/profile-bar.css";
import "./assets/css/body-widgets.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
    return (
        <div>
            <Navbar />
            <Content />
            <div className="name-bar">razer nari ultimate</div>
        </div>
    );
}

export default App;
