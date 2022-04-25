import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "leaflet/dist/leaflet.css";
import "./global.css";
import CasesTable from "./components/CasesTable";
import TotalCases from "./components/TotalCases";
import { getCoronaData } from "./api/getCoronaData";
import CovidStateMap from "./components/CovidStateMap";
import registerServiceWorker from "./registerServiceWorker";
import Header from "./components/Header";
import Loader from './components/Loader';

const App = ({ title }) => {
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState({});
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    getCoronaData().then((res) => {
      const filteredData = res.data.filter((item) => item.state_name !== "");
      const totalData = res.data.filter((item) => item.state_name === "");
      setData(filteredData);
      setTotalData(totalData);
      setLoading(false);

    });
  }
  useEffect(()=>{
    registerServiceWorker();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header getData={getData} />
      {loading ? <Loader/> :
        <div className="layout-container">
          <div className='first-section-container'>
            <TotalCases data={totalData}/>
            <CovidStateMap data={data}/>
          </div>
          <CasesTable data={data}/>
        </div>
      }
    </div>
  );
};

export default App;
