import { useRouter } from "next/router";
import Layout from "../../layout/Layout";
import MainHeader from "../../components/MainHeader";
import useFetcher from "../../helper/useFetcher";

function Following() {
    const router = useRouter();
    const {data} = useFetcher(`/api/user/${router?.query?.user}`);

    return (
        <Layout>
            <MainHeader back title={data?.name + " - Following"}></MainHeader>
        </Layout>
    )
};

export default Following;