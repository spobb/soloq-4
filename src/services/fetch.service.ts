export async function fetchService(url: string) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${url}`, {
            headers: {
                'X-Riot-Token': import.meta.env.VITE_API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Error while fetching');
        }

        return response.json();
    } catch (err) {
        console.error(err);
    }
} 