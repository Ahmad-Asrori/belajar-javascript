const button = document.getElementById('button');

button.addEventListener('click', runEvent);

function runEvent(e){
    //buat XHR object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true);

        // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"

    xhr.onprogress = function(){
        console.log('READYSTATE', this.readyState);
    }

    xhr.onload = function(){
        console.log('READYSTATE', this.readyState);
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h2>${this.responseText}</h2>`;
        }
    }

    xhr.onerror = function(){
        console.log('request error...');
    }
    
    xhr.send();
}