import { Link } from "react-router-dom";
import Tabs from "../components/Tabs/Tabs";
import './main.css'

export default function HomePage() {

    const options = [{ label: 'Tab 1', value: '1' }, { label: 'Tab 2', value: '2' }]

    return (
        <div className="cont">
          <div className="home">
              <Link to='/about'><p>About Us</p></Link>
              <Link to='/materialpage'>Material UI</Link>
              <button>Mode</button>
          </div>
          <Tabs options={options} /> 
          <div className="maincss">
              <Link to='/main'>Main Page Test</Link>
          </div>
        </div>
    )
}