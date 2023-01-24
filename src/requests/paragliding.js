import apiAxios from ".";

export async function requestParaglidingList() {
    try {
        const response = await apiAxios.get('/paragliding');
        return response;
    } catch (error) {
        console.log(error.response);
        return 
        
    }
}