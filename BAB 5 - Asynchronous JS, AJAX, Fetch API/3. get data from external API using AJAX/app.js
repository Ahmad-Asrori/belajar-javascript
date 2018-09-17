const jokesButton = document.querySelector('.get-jokes');

jokesButton.addEventListener('click', getJokes);

function getJokes(e){
    //yang diambil hanya angkanya saja
    const angka = document.querySelector('input').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${angka}`, true);
    xhr.onload = function(e){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            
            let output = '';
            if(response.type === 'success'){

                //console.log(response);
                //karena datanya di simpan di const response dan bentuknya bisa berupa array
                //maka untuk mendapatkan setiap datanya harus di looping menggunakan foreach 
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += 'telah terjadi kesalahan';
            }

        document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}

