import React, {useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { getZoneCounts } from '../../actions/mock';
import Chart from "react-apexcharts";

function ZoneCounts() {
    const dispatch = useDispatch();

    const zone_counts = useSelector(state => state.mock.zone_counts)

    useEffect(() => {
        dispatch(getZoneCounts());
    }, [dispatch]);

    console.log(zone_counts);

    let xitems = [];
    let yitems = [];
    zone_counts.map(item => {
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
            name: "Zone Counts",
            data: yitems
          }
        ]
      };

    return (
        <Layout>
            <section className="container">
                <h1 className='large text-primary'>Zone Counts</h1>
                
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="500"
                />
            </section>
        </Layout>
    );
}

export default ZoneCounts;