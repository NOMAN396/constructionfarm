const BASE_URL = "http://localhost/reactcrud";
export const Teammember = async () => {
    try {
        const response = await fetch(`${BASE_URL}/teammember.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching shopservices data: ${error.message}`);
    }
};