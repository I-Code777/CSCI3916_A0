const axios = require('axios');

module.exports = async (phrase) => {
    try {
        const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: { q: phrase }
        });

        // Format the response as required
        return {
            data: results.data,
            status: results.status,
            statusText: results.statusText,
            headers: results.headers,
            requestHeader: results.config.headers
        };
    } catch (error) {
        // Handle errors properly by returning error details
        return {
            error: error.message,
            status: error.response?.status || 500,
            statusText: error.response?.statusText || 'Internal Server Error'
        };
    }
};