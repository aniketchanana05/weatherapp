const request = require('request');
const geocode = (address,callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYW5pa2V0Y2hhbmFuYTA1IiwiYSI6ImNqdW1qdjZkejB3dWc0NGw4cTVnNGtmNjYifQ.F49QY4w6OnyKPk2_8OB9Ng&limit=1`

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('check your internet connection',undefined);
        }
        else if(response.body.features.length === 0){
            callback('unable to find location',undefined);
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;