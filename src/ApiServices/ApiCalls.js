import { getJwt, decodeJwt } from "./jwtServices"

//gets the recent workouts 
export const getRecentWorkouts = async () => {
    //need to get user_id to query with
    const jwt = getJwt();

   const workouts = await fetch(
       'http://192.168.1.5:3300/workouts/recent',
       {
           method: 'POST',
           headers: {
                'Content-Type': 'application/json',
                'authorization': jwt
           }
        }
    )
         
    const res = await workouts.json();
    console.log(res)
    if (res.success) {
        return res.data;
    } else {
        return [];
    }
}

export const getAllWorkouts = async () => {
    //need to get user_id to query with
    const jwt = getJwt();

   const workouts = await fetch(
       'http://192.168.1.5:3300/workouts/all',
       {
           method: 'POST',
           headers: {
                'Content-Type': 'application/json',
                'authorization': jwt
           }
        }
    )
         
    const res = await workouts.json();
    
    if (res.success) {
        return res.data;
    } else {
        return "here";
    }
}