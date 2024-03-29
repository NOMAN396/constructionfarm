const BASE_URL = 'http://localhost/reactapi';



export const blogs = async () => {
    try {
        const response = await fetch(`${BASE_URL}/blog.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching blog data: ${error.message}`);
    }
};
