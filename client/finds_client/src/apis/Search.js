import * as request from "superagent";

export const getSearchResult = (docName) => {
    return request.get(`https://private-anon-09b303e34c-finds1.apiary-mock.com/search/${docName}`)
        .then(res => {
            return { res: res.body };
        }).catch(err => {
            console.log(err);
            return { err };
        })
}