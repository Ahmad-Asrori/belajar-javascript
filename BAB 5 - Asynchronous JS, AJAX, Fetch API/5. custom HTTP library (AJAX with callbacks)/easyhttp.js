function easyHTTP(http){
    this.http = new XMLHttpRequest();
}

//membuat http GET request
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    let self = this;
    self.http.onload = function(){
        if(self.http.status === 200){
            callback(null, self.http.responseText);
        } else {
            callback('error : ' + self.http.response);
        }
    }

    this.http.send();
}

//membuat http POST request
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    self.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}


//membuat http PUT request
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    self.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//membuat http DELETE request
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);

    let self = this;
    self.http.onload = function(){
        if(self.http.status === 200){
            callback(null, 'post deleted');
        } else {
            callback('error : ' + self.http.response);
        }
    }

    this.http.send();
}
