import React, { useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, CardHeader } from 'react-bootstrap';
const ChartComponent = () => {
  const chartRef = useRef(null);
  const donutChartRef = useRef(null);
    const label1= ["vegetable", "fruit", "dairy", "meat", "grains", "beverages"];
    const dataset1=[
      {
        name: 'Products Sold in Each Category',
        data: [30, 50, 20,12,23,4],
      },
    ];

    const label2= ["vegetable", "fruit", "dairy", "meat", "grains", "beverages"];
    const dataset2=[
      {
        name: 'Total Products available in Each Category',
        data: [30, 50, 20,12,23,4],
      },
    ];

  useEffect(() => {
    // Update the Bar chart
    if (chartRef && chartRef.current && dataset1.length > 0) {
      chartRef.current.chart.updateOptions({
        xaxis: {
          categories: label1,
        },
      });
      chartRef.current.chart.updateSeries([{ data: dataset1[0].data }]);
    }
  }, [label1, dataset1]);


  useEffect(() => {
   // Update the Donut chart
   if (donutChartRef && donutChartRef.current && dataset2.length > 0) {
    donutChartRef.current.chart.updateOptions({
      labels: label2,
    });
    donutChartRef.current.chart.updateSeries(dataset2[0].data);
  }
}, [label2, dataset2]);

  const barChartOptions = {
    chart: {
      type: 'area',
    },
    datalabel1: {
      enabled: false,
    },
    xaxis: {
      categories: label1,
    },
  };

  const donutChartOptions = {
    labels: label2,
  };
  return(
  <div>
    <Card bg='grey' className='mt-3 mb-3'>
        <CardHeader>Category Analysis : Products Sold in Each Category</CardHeader>
        <CardBody>
        <Chart options={barChartOptions} series={dataset1.map((dataset) => dataset.data)} type="area" height={400} ref={chartRef} />
        </CardBody>
    </Card>
    <Card bg='grey' className='mt-3 mb-3'>
        <CardHeader>Category Analysis : Total products in Each Category</CardHeader>
        <CardBody>
        <Chart options={donutChartOptions} series={dataset2[0].data} type="donut" height={400} ref={donutChartRef} />
        </CardBody>
    </Card>
  </div>);
};

export default ChartComponent;
