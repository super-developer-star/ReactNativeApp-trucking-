import PubNub from 'pubnub';
import { config } from '../../config.js';


const pubnub = new PubNub(config.pubnub);

export const Publish = (shipment, driverId) => {
    console.log('shipment is published', shipment);
    pubnub.publish(
        {
            channel: 'track-driver-{driverId}',
            // channel: 'react',
            message: shipment // shipment to publish
        },
        (status, response) => {
            if(status.error){
                console.log(status)
            } else {
                console.log("shipment was published successfully", response)
            }
        }
    )
}

export const Subscribe = (driverId) => {
    console.log('subscription');
    return new Promise((resolve) => {
        pubnub.subscribe({
            channels: ['track-driver-{driverId}'],
            // channels: ['react'],
            withPresence: true,
        });
        pubnub.addListener({
            status: function(statusEvent){
                if (statusEvent.category === "PNConnectedCategory"){
                    var newState = {
                        new: 'state'
                    };
                    pubnub.setState(
                        {
                            state: newState
                        },
                        (status) => {

                        }
                    );
                }
            },
            message: function(message){
                console.log("published shipment", message);
                resolve(message.message); 
            }
        })
       
    })
}