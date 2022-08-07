import axios from 'axios';
import { User } from '../types/UserModel';

const url: string = process.env.REACT_APP_API_URL;
export const GetToken = async (user: User) => {
    const { data } = await axios.post<any>(`${url}/api/users/`, {...user});
    debugger;
    if ( !data ) return '';
    localStorage.setItem('token', data.token)
    return data.token;
}

export const GetGithubAvatar = async (githubName: string) => {
    const { data } = await axios.get(`https://api.github.com/users/${githubName}`);
    debugger;
    if (!data) return '';
    return data;
}