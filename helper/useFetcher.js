// import axios from "axios";
import useSWR from 'swr';

export const fetchData = (...args) => fetch(...args).then(res => res.json());

const useFetcher = (path) => {
    const { data, error } = useSWR(path, fetchData);
    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    }
}

// this way it prevents every time to contact with server
// fetch trends data from server
export const useTrends = () => {
    const { data, error } = useSWR("/api/trends", fetchData);
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
      }
}

// fetch user data from server
export const useUsers = () => {
    const { data, error } = useSWR("/api/user", fetchData);
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
      }
}

// fetch user data from server
export const useTweets = () => {
    const { data, error } = useSWR("/api/tweet", fetchData);
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
      }
}


export default useFetcher;