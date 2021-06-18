import axios from "axios"
export async function axios_post_request(url, params) {
    let response_data = {}
    let headers = {
        'Content-Type': 'application.json',
        'User-Agent': 'Mozilla 5.0/',
    }
    await axios.post(url, params, headers).then(
        response => {
            response_data = response.data
        }
    )
    return response_data
}