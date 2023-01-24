import apiAxios from ".";

export async function requestParagliderList() {
    try {
        const response = await apiAxios.get('/paraglider');
        return response;
    } catch (error) {
        console.log(error.response);
        return 
        
    }
}