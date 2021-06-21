/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import App from "./src/navigators";

import dgram from 'react-native-udp';


 
const socket = dgram.createSocket('udp4');
socket.bind(8888);

socket.on('message', function (msg, rinfo) {
    console.log('Message received', msg);
    global.message = getCode(msg);
})

function getCode(msg) {
    let isRFID = false;
    let cardCode = "";
    let i = 0;

    while (msg[i] != 59){
        i++;
    }
    
    if(msg[i+1] == 57 && msg[i+2] == 48){
        isRFID = true;
    }

    if(isRFID){
        i +=3;
        while (msg[i] != 58){
            i++;
        }
        if(msg[i+1] == 32){
            i += 2;
            while(i < msg.length){
                if (msg[i] == 48 || msg[i] == 120){

                }
                else {
                    var number = msg[i];
                    cardCode += number;
                }
                i++;
            }
        }
    }
    return cardCode;
}

App();
