import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

/** check user auth  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }

/** chat gpt */

/** get server data */
export async function getServerData(url, callback){
    try {
        const response = await axios.get(url);
        const data = response.data;
        return callback ? callback(data) : data;
    } catch (error) {
        console.error('Error fetching data from server:', error);
        throw error; // Re-throw the error to handle it in the component or caller
    }
}

/** post server data */
export async function postServerData(url, result, callback){
    try {
        const response = await axios.post(url, result);
        const data = response.data;
        return callback ? callback(data) : data;
    } catch (error) {
        console.error('Error posting data to server:', error);
        throw error; // Re-throw the error to handle it in the component or caller
    }
}
//chat gpt





/** post server data */
// export async function postServerData(url, result, callback){
//     const data = await (await axios.post(url, result))?.data;
//     return callback ? callback(data) : data;
// }