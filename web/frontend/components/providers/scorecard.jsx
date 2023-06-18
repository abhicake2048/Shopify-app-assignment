import React from 'react';
import { Card, Layout, Stack, TextContainer, ProgressBar } from '@shopify/polaris';

export function Scorecard (){
  const metrics = [
    { label: 'Total Users', value: '10,000' },
    { label: 'Sales Revenue', value: '$50,000' },
    { label: 'Conversion Rate', value: '5%' },
    { label: 'Average Order Value', value: '$100' },
  ];

  return (
    <Layout.Section>
      <Card title="Scorecard">
        <Stack vertical>
          {metrics.map((metric) => (
            <Card.Section key={metric.label}>
              <TextContainer>
                <p>{metric.label}</p>
                <h3>{metric.value}</h3>
              </TextContainer>
              <ProgressBar progress={metric.value / metric.maxValue} size="small" />
            </Card.Section>
          ))}
        </Stack>
      </Card>
    </Layout.Section>
  );
};
