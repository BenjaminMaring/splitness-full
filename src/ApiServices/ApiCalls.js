import { getJwt, decodeJwt } from "./jwtServices"

export const getRecentWorkouts = async () => {
    
    //need to get user_id to query with
    const jwt = getJwt();
    const { user_id } = decodeJwt(jwt);

    console.log(user_id);
    if (!user_id) return [];
   const workouts = await fetch(
       'http://192.168.1.5:3300/workouts/recent',
       {
           method: 'POST',
           headers: {
                authorization: jwt
           },
           body: {
               "user_id": user_id
            }
        }
        )
        
    const res = await workouts.json();
    console.log(res)
    return res.data;
}