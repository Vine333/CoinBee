import config from "../config";

class Service {

    constructor() {
        this.base = config.api.url;
    }

    async request(path, data) {

        let headers = {
            'Accept': 'application/json', 'Content-Type': 'application/json',
        };

        const token = localStorage.getItem('AUTH_TOKEN');

        if (token) {
            headers = {
                ...headers, 'X-Auth-Token': localStorage.getItem('AUTH_TOKEN'),
            }
        }

        if (data?.headers) {
            headers = {
                ...headers, ...data.headers
            }
        }

        let httpCode = 200;
        return fetch(`${this.base}${path}`, {
            headers: headers, ...data
        }).then(res => {
            httpCode = res.status;
            return res.json()
        }).then(res => {

            // If not authorized then throw error and show global message
            if (httpCode === 401) {
                // const event = new CustomEvent('on_auth_error', {detail: 'Access denied'});
                // window.dispatchEvent(event);
                throw 'Http error';
            }
            return res;
        }).catch(error => ({
            error: true, details: error
        }));
    }
}


export default Service;
