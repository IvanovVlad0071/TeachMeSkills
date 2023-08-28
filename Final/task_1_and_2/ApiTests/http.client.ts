import superagent from "superagent"

export class HttpClient {
    static readonly url = 'https://jsonplaceholder.typicode.com/'

    static async get(path: string, queryValue: string | object): Promise<any> {
        let response: unknown;
        try {
         response = await superagent.get(`${HttpClient.url}${path}`).query(queryValue); 
         }
        catch (err: any) {
        console.log(err.message);
        }
        finally {
            return response;
        }
    }
    static async post(path: string, body: object): Promise<any> {
        let response: unknown;
        try {
          response = await superagent.post(`${HttpClient.url}${path}`).send(body);
        } catch (err: any) {
          console.log(err.message);
          response = err.response;
        } finally {
          return response;
        }
      }
      static async put(path: string, data: object): Promise<any> {
        let response: unknown;
        try {
            response = await superagent.put(`${HttpClient.url}${path}`).send(data);
            
        } catch (err: any) {
            console.log(err.message);
            response = err.response;
        } finally {
            return response;
        }
    }
    static async delete(path: string, queryValue: string | object): Promise<any> {
        let response: unknown;
        try {
        response = await superagent.delete(`${HttpClient.url}${path}`).query(queryValue);
        }
        catch (err: any) {
        console.log(err.message);
        response = err.response;
        }
        finally {
        return response;
        }
        }
}
