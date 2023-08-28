import superagent from "superagent"
import { HttpClient}  from "../http.client";



describe("Get Tests", () => {
    
    test('GET  user by id', async () => {
        const response = await HttpClient.get('users', { id: 2 })
        expect(response.status).toBe(200);
    })

    test('should make a successful GET request without query parameters', async () => {
        const response = await HttpClient.get('users',{});
        
        expect(response.status).toBe(200);
        
      });
    test('GET  user by city', async () => {
        const response = await HttpClient.get('users', { city: "Wisokyburgh" })
        expect(response.status).toBe(200);
    })

    test('GET /users/:id - должен возвращать статус 200 и данные пользователя', async () => {
        const response = await HttpClient.get('users', { id: 2 })
         expect(response.status).toBe(200);
         expect(response.body[0]).toHaveProperty('id');
         expect(response.body[0]).toHaveProperty('name');
         expect(response.body[0]).toHaveProperty('email');
         expect(response.body[0]).toHaveProperty('address');
})

    test('GET post by title', async () => {
        const response = await HttpClient.get('posts', { title: "qui est esse" })
        expect(response.status).toBe(200);
    
  });
})
