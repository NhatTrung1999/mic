import WidgetLeft from './WidgetLeft';
import WidgetRight from './WidgetRight';
import './css/body-widgets.css';
import './css/switch.css';
import './css/slider.css';
import './css/checkbox.css';
import './css/tooltip.css';

function BodyWidgets() {
    return (
        <div class="body-widgets flex">
            <WidgetLeft />
            <WidgetRight />
        </div>
    )
}

export default BodyWidgets;