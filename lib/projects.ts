import axios from 'axios';

export const fetchProjects = async () => {
    try {
        const response = await axios(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`);
        if(response.data.length > 0) {
            return response.data;
        }
    } catch (err) {
        console.log(err);
        return [];
    }
};