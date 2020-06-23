import React from "react";
import Layout from "../../containers/DefaultLayout";

export default (ComposedComponent: any) => (props: any) => (
  <Layout>
    <ComposedComponent {...props} />
  </Layout>
);
