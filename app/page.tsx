'use client'
import { Layout } from "./ui/components/Layout/Layout";
import Seo from "./ui/components/Seo/Seo";
import { LandingPageContainer } from "./ui/modules/landing-page/landing-page.container";




export default function Home() { 
  return (

    <>
    <Seo
    title="Clone Remote monkey"
    description="Clone Remote monkey by Freddy Mandaba"
     />

    <Layout>
      <LandingPageContainer />
    </Layout>
    </>
  );
}
