import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Grid,
  LegacyCard,
  DataTable,
  TextField,
  Filters,
  ProgressBar,
  Link,
  Heading,
  Text,
  AlphaCard,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import { GraphComponent } from "../components/providers/graphcomponent";
import { Scorecard } from "../components/providers/scorecard";
import React, { useState } from 'react';
import { IndexTableWithMultiplePromotedBulkActionsExample } from "../components/providers/filter";



export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Page fullWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>

       <Layout.Section>
        <AlphaCard padding={'5'}>
        <text as='h1' variant='HeadingMd'>Your App is ready</text>
        </AlphaCard>
       </Layout.Section>

       <Layout.Section>
       <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard title="Graph" sectioned>
            <GraphComponent></GraphComponent>
          </LegacyCard>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard title="Graph" sectioned>
            <GraphComponent></GraphComponent>
          </LegacyCard>
        </Grid.Cell>
      </Grid>
       </Layout.Section>

       <Layout.Section>
       <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard  sectioned>
            <Scorecard></Scorecard>
          </LegacyCard>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard sectioned>
            <Scorecard></Scorecard>
          </LegacyCard>
        </Grid.Cell>
      </Grid>
       </Layout.Section>

      <Layout.Section>
        <IndexTableWithMultiplePromotedBulkActionsExample></IndexTableWithMultiplePromotedBulkActionsExample>
      </Layout.Section>

      </Layout>
    </Page>
  );
}
