import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
export const  HomeAdmin =()=>{
const [options , setOptions ] = useState({
    title: 'Gráfico de Pizza'
  });
       const [data, setData] = useState( [
         ['React', 100],
         ['Angula', 80],
         ['Vue', 50],
       ])
   
    return(
        <div>
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={data}
            options={options}
          />
        </div>
    )
}