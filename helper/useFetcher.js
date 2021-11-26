// import axios from "axios";
import useSWR from 'swr';

const fetchData = (...args) => fetch(...args).then(res => res.json());

const useFetcher = (path) => {
    const { data, error } = useSWR(path, fetchData);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    }
}

export default useFetcher;

// export async function postData(path, data) {
//     try {
//         const response = await axios.post(path, data);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// };