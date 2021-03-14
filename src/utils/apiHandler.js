const baseUrl = 'https://shirthawk.herokuapp.com/api/';

export const apiHandler = (config) => {
    return {
        method: config.method || 'get',
        url: BaseUrl + endpoint || BaseUrl,
        headers: {
            accept: 'Accept: application/json',
        },
        body: config.body || '',
    };
};
