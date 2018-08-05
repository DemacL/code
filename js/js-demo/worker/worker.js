


// console.log(a);

onmessage = function(e){
    console.log('onmessage', e);
    
    // return 
    
    postMessage('return info from worker-' + e.data + '-');
    // setInterval
}