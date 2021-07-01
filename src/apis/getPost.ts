import {client} from 'apis/client';

interface paramTypes {
    path: string;
    page?: string;
    query?: string;
}

export const getList = ({path, page, query}:paramTypes) => {
    const fullPath:string = path + `?page=${(!page) ? "0" : page}` + ((!query) ? "" : `?search=${query}`); 
    return client.get(fullPath)
}

export const getDetail = ({path}:paramTypes) => client.get(path);