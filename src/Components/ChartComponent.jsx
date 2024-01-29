import React, { useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Container, Row } from 'react-bootstrap';
import recipe_book from './Food-Recipes-details';
const ChartComponent = () => {
  const chartRef = useRef(null);
  const donutChartRef = useRef(null);
    


    const recipeNames = recipe_book.map((recipe) =>(recipe.name));
    console.trace(recipeNames); 

    const label1= [...recipeNames];

    const rating = recipe_book.map((recipe) =>{
      let sum=0;
      for(var i=0;i<recipe.rating.length;i++)
      {
      sum=recipe.rating[i]+sum;
      }
      return Math.round(sum/recipe.rating.length);
    });

    console.trace(rating);

    const dataset1=[
      {
        name: 'Recipe rated',
        data: rating,
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
    <Container>
    <Row>
    <Card bg='grey' className='mt-3 mb-3'>
        <CardHeader>Rating of Each Recipe</CardHeader>
        <CardBody>
        <Chart options={barChartOptions} series={dataset1.map((dataset) => dataset.data)} type="area" height={400} ref={chartRef} />
        </CardBody>
    </Card>
    </Row>
    <Row>
    <Card bg='grey' className='mt-3 mb-3'>
        <CardHeader>Category Analysis : Total products in Each Category</CardHeader>
        <CardBody>
          <Chart options={donutChartOptions} series={dataset2[0].data} type="donut" height={400} ref={donutChartRef} /> 
        </CardBody>
    </Card>
    </Row>
    </Container>
  </div>);
};

export default ChartComponent;
