import React, {useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { getCrashPredictions } from '../../actions/mock';
import Chart from "react-apexcharts";

function CrashPredictionsPage() {
    const dispatch = useDispatch();

    const predictions = useSelector(state => state.mock.predictions)

    useEffect(() => {
        dispatch(getCrashPredictions());
    }, [dispatch]);

    console.log(predictions);

    let xitems = [];
    let yitems = [];
    predictions.map(item => {
        xitems.push(item.label);
        yitems.push(item.value);
    })

    const state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: xitems
          }
        },
        series: [
          {
            name: "Crash Predictions",
            data: yitems
          }
        ]
      };

    return (
        <Layout>
            <section className="container">
                <h1 className='large text-primary'>Crash Predictions</h1>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="800"
                />
            </section>
        </Layout>
    );
}

export default CrashPredictionsPage;