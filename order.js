//alert('ORDER.JS');

let itemOrder = [
    {
        dipesan : false,
        harga : 5000,
        nama : 'Sosis Bakar',
    },
    {
        dipesan : false,
        harga : 10000,
        nama : 'Spageti',
    },
    {
        dipesan : false,
        harga : 15000,
        nama : 'Bakso Pentol',
    },
    {
        dipesan : false,
        harga : 12000,
        nama : 'Mie Ayam',
    },
    {
        dipesan : false,
        harga : 7000,
        nama : 'Es Cincau',
    },
    {
        dipesan : false,
        harga : 9000,
        nama : 'Es Kopyor Kelapa Muda',
    },
]

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName('item');

const textTotal = document.getElementById('last-item');

for(let i = 0; i < itemTerpilih.length; i++){
    itemTerpilih[i].addEventListener('click', function(){
        setItemPemesanan(i, itemTerpilih[i]);

    });

    function setItemPemesanan(index, elemen){
        if (itemOrder[index].dipesan == false){
            itemOrder[index].dipesan = true;
            elemen.style.backgroundColor = 'brown';
            elemen.style.color = 'white';
            totalOrder = totalOrder + itemOrder[index].harga;
        }
        else{
            itemOrder[index].dipesan = false;
            elemen.style.backgroundColor = 'rgb(183, 183, 238)';
            elemen.style.color = 'black';
        }totalOrder = totalOrder - itemOrder[index] .harga;
    }
    textTotal.innerHTML = 'Total <span>Rp ' + totalOrder + '</span>';
    }


