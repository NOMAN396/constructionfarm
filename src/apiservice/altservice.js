const BASE_URL = "http://localhost/reactcrud";
export const Altservice = async () => {
    try {
        const response = await fetch(`${BASE_URL}/Altservice.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching Altservices data: ${error.message}`);
    }
};