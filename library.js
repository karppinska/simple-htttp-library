class SimpleHTTP {
    constructor() {
        this.http = new XMLHttpRequest();
    }
}

SimpleHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(this.http.responseText);
        } else {
            callback(null, `GET error: ${this.http.status}`);
        }
    };

    this.http.send();
}

SimpleHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(this.http.responseText, null);
    }

    this.http.send(JSON.stringify(data));
}

SimpleHTTP.prototype.put = function(url, id, data, callback) {
    this.http.open('PUT', `${url}/${id}`, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(this.http.responseText, null);
    }

    this.http.send(JSON.stringify(data));
}

SimpleHTTP.prototype.delete = function(url, id, callback) {
    this.http.open('DELETE', `${url}/${id}`, true);

    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(`Deleted ${this.http.responseText}`);
        } else {
            callback(null, `DELETE error: ${this.http.status}`);
        }
    }

    this.http.send();
}