import superagent from "superagent"
import { HttpClient}  from "../http.client";

describe("Post Tests",  () => {
   
    test('create new post', async() =>{
     const response = await HttpClient.post('posts', { title: "test", body: "tester" })
     expect(response.status).toBe(201);
     expect(response.body.title).toBe('test');   
     expect(response.body.body).toBe('tester'); 
   })
   test('should handle error for invalid path', async () => {
    const response = await HttpClient.post('invalid', { title: "test", body: "tester" });
    expect(response.status).toBe(404);
  });
  test('create new user', async () => {
    const response = await HttpClient.post('users', {name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" });
    expect(response.status).toBe(201);
  })
  test('post user with existing id',async()=>{
    const response = await HttpClient.post('posts', {id:1, userid:1, title: "test", body: "tester" })
    expect(response.body).toBeTruthy
  })
  test('Check the body input is nullable', async()=> {
const expected = {
    title: "test",
    body: null,
    id: 101
}
const response = await HttpClient.post('posts', { title: "test", body: null })
expect(response.body).toMatchObject(expected)
  })
})