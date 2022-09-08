import { version } from 'react';
import GetLocation from 'react-native-get-location'



export const GetCurrentLocation = async () => {
    return new Promise((resolve, reject) => 
        Geolocation.getCurrentPosition((position) => {
            resolve(position);
            },
            (error) => {
                reject(error);
            },
            {
                enableHighAccuracy: true, // Whether to use high accuracy mode or not
                timeout: 15000, // Request timeout
                maximumAge: 10000 // How long previous location will be cached
            }
        )
    )
}

