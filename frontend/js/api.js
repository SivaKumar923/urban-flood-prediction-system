// api.js

// Function to fetch data from the backend
async function fetchData(apiEndpoint) {
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to send data to the backend
async function sendData(apiEndpoint, payload) {
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

// Example usage:
// fetchData('https://example.com/api/data').then(data => console.log(data));
// sendData('https://example.com/api/data', { key: 'value' }).then(data => console.log(data));
