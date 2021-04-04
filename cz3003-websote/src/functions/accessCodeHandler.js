async function getAccessCode(){
    const API_URL = "https://223.25.69.254:10002/newest_access_code";
    const response = await fetch(API_URL);
    const responseJson = await response.json();

    return responseJson;
}

export {getAccessCode}