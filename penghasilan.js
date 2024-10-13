 
const body = document.body
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.display = 'flex'
body.style.height = '100vh'
body.style.width = '100vw'
body.style.margin = 0
const judul = document.createElement('h1')
judul.innerHTML = 'MENGHITUNG PENGHASILAN'

body.appendChild(judul)

let tombol = document.createElement('button')
tombol.style.position = 'absolute'
tombol.innerHTML = 'pencet ini'

body.appendChild(tombol)

tombol.addEventListener('click', () => {
    let nama = prompt('masukan nama anda: ')
    let gaji = parseInt(prompt('masukan gaji anda perhari(Rp): '))
    let berapa = parseInt(prompt('masukan berapa hari anda berangkat: '))
    function check () {
        return "Hallo "+ nama + ", gaji anda dalam 1 bulan adalah Rp." + gaji*berapa 
    }
    alert(check())
});
