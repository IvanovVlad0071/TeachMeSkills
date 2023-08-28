import superagent from "superagent"
import { HttpClient}  from "../http.client";

describe("delete Tests",  () => {
    test('delete user', async() =>{
        const response = await HttpClient.put('users/1', {})
        expect(response.status).toBe(200);
    })
    test('delete post', async() =>{
        const response = await HttpClient.put('posts/1', {})
        expect(response.status).toBe(200);
    })
    test('delete non-existed user', async() =>{
        const response = await HttpClient.put('users/111', {})
        expect(response.status).toBe(500);
    })
})