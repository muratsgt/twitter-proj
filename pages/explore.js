import Layout from "../layout/Layout";
import MainHeader from "../components/MainHeader";
import TrendsBox from "../components/TrendsBox";
import {EXPLORETRENDS} from "../data";

function Explore() {
    return (
        <Layout>
            <MainHeader title="Explore"></MainHeader>
            <img
                width="100%"
                src="https://img.br.de/2692aa5f-5ef1-42b0-8177-02b7cc3ab9c3.jpeg?q=80&rect=6%2C488%2C5919%2C3331&w=1200"
                alt="explore"
                title="The Facebook Company Is Now Meta"
            />
            <TrendsBox trends={EXPLORETRENDS}></TrendsBox>
        </Layout>
    )
};

export default Explore;