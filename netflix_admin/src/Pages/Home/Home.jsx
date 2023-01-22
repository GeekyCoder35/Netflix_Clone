import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import Chart from '../../components/Chart/Chart';
import { Userdata } from '../../dummyData'; 
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={Userdata} title="User Analytics" dataKey="Active user" grid="true"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}

export default Home;