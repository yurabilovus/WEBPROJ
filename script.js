

window.onload = function () {

    
    var a = document.getElementById('switch');
    
    
    a.onclick = function() {
        
        if (this.innerHTML=='TAK') this.innerHTML = 'HI';
        else this.innerHTML = 'TAK';
        
        return false;
    }
}


