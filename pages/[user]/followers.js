import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../layout/Layout";
import MainHeader from "../../components/MainHeader";
import { USERS } from "../../data";

function Followers() {
    const [profile, setProfile] = useState({});
    const router = useRouter();

    useEffect(() => {
        const { user } = router.query;
        const temp = USERS.find((i) => i.adress === user);
        setProfile(temp);
    }, [router.query])

    return (
        <Layout>
            <MainHeader back title={profile?.name + " - Followers"}></MainHeader>
        </Layout>
    )
};

export default Followers;