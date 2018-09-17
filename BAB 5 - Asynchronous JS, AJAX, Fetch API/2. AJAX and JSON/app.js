const customerButton = document.getElementById('button1');
const customersButton = document.getElementById('button2');

customerButton.addEventListener('click', loadCustomer);
customersButton.addEventListener('click', loadCustomers);

function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>id : ${customer.id}</li>
                    <li>nama : ${customer.name}</li>
                    <li>company : ${customer.company}</li>
                    <li>phone : ${customer.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}

function loadCustomers(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
      if(this.status === 200){
          const customers = JSON.parse(this.responseText);

          let output = '';

          //karena datanya berupa array of object
          //maka untuk mendapatkan setiap datanya harus menggunakan foreach
          customers.forEach(function(customer){
              output += `
              <ul>
                  <li>id : ${customer.id}</li>
                  <li>nama : ${customer.name}</li>
                  <li>company : ${customer.company}</li>
                  <li>phone : ${customer.phone}</li>
              </ul>
              `;
          });

          document.getElementById('customers').innerHTML = output;
      }
  }

  xhr.send();
}