import Head from 'next/head';
import Page from '@/hoc/securedPage';
import asyncComponent from "@/utils/asyncComponent";

const Components = asyncComponent(() => import('@/app/form/components'));

export default Page(() => (
  <>
    <Head>
      <title>Components</title>
    </Head>
    <div className="app-wrapper">
      <Components/>
    </div>
  </>
));