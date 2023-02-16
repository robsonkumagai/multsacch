import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import CalfPasture from 'sections/calf-pasture';
import CattlePasture from 'sections/cattle-pasture';
import CattleConfinement from 'sections/cattle-confinement';
import Benefits from 'sections/benefits';
import Information from 'sections/information';
import Mockup from 'sections/mockup';
import Probiotics from 'sections/probiotics';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="MultSacch - Biomart Nutrição Animal" />
          <Banner />
          <Information />
          <Mockup />
          <Probiotics />
          <CalfPasture />
          <CattlePasture />
          <CattleConfinement />
          <Benefits />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
