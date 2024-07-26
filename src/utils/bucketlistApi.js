export default async function bucketlist(category) {
    let url;
    url = `http://43.203.119.115:8080/bucketlist?category=${category}`;
    

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
            }
        });
        if (response.status === 404) {
            throw new Error('404');
        } else if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch:', error);
        return null;
    }
}