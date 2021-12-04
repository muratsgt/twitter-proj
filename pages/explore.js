import Layout from "../layout/Layout";
import MainHeader from "../components/MainHeader";
import TrendsBox from "../components/TrendsBox";
import { useTrends } from "../helper/useFetcher";

// page for explore
function Explore({ }) {
    const { data } = useTrends();

    let { NODE_ENV, DEV_URL, PROD_URL, VERCEL_URL, VERCEL } = process.env;
    let SITEURL
    if (VERCEL) {
        SITEURL = VERCEL_URL;
    } else {
        SITEURL = NODE_ENV !== 'production' ? DEV_URL : PROD_URL;
    }

    console.log(`VERCEL`, VERCEL);
    console.log(`VERCEL_URL`, VERCEL_URL);
    console.log(`NODE_ENV`, NODE_ENV);
    console.log(`SITEURL api`, `${SITEURL}/api/tweet`);


    return (
        <Layout>
            <MainHeader title="Explore"></MainHeader>
            <img
                width="100%"
                src="https://img.br.de/2692aa5f-5ef1-42b0-8177-02b7cc3ab9c3.jpeg?q=80&rect=6%2C488%2C5919%2C3331&w=1200"
                alt="explore"
                title="The Facebook Company Is Now Meta"
            />
            {data && <TrendsBox trends={data}></TrendsBox>}
        </Layout>
    )
};

export default Explore;