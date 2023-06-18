import React from 'react';
import { Page, Layout, Card, Heading } from '@shopify/polaris';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function GraphComponent(){
  const data = [
    { name: 'Jan', value: 50 },
    { name: 'Feb', value: 100 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 70 },
    { name: 'May', value: 120 },
    { name: 'Jun', value: 90 },
  ];

  return (
          <Card >
            <LineChart width={285} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </Card>
  );
};

