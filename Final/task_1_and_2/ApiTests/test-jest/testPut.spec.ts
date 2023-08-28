import superagent from "superagent"
import { HttpClient}  from "../http.client";

describe("Put Tests",  () => {
    test('update user', async() =>{
        const response = await HttpClient.put('users/1', {
        name: "test",
        username: "tester"})
     expect(response.status).toBe(200);
     expect(response.body.name).toBe('test');   
     expect(response.body.username).toBe('tester'); 

    })
    test('update city', async() =>{
        const response = await HttpClient.put('users/1', {city:"Paris"})
     expect(response.status).toBe(200);
     expect(response.body.city).toBe('Paris');
    })
    test('update non-existent user', async() =>{
        const response = await HttpClient.put('users/1000', {city:"Paris"})
     expect(response.status).toBe(500);
    })
    test('update city', async() =>{
        const response = await HttpClient.put('posts/1', {title:"test", body:'test'})
     expect(response.status).toBe(200);
     expect(response.body.title).toBe('test');
     expect(response.body.body).toBe('test');
    })

})