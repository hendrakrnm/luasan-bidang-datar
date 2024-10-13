const body = document.body

body.style.justifyContent = 'center'

body.style.height = '100vh'
body.style.width = '100vw'
body.style.margin = 0

const judul = document.createElement('h1')
judul.innerHTML = 'LUASAN BIDANG DATAR'
body.appendChild(judul)
const daftar = document.createElement('div')
daftar.innerHTML = '<ul ><li id="tombol"><button>lingkaran</button></li> <li id="tombol1"><button>Persegi</button></li> <li id="tombol2"><button>Jajar Genjang</button></li> <li id="tombol3"><button>Segitiga</button></li> </ul>'
body.appendChild(daftar)

document.getElementById('tombol').style.margin = '10px'
document.getElementById('tombol1').style.margin = '10px'
document.getElementById('tombol2').style.margin = '10px'
document.getElementById('tombol3').style.margin = '10px'

document.getElementById('tombol').addEventListener('click', () => {
  const radius = prompt('Masukkan jari-jari lingkaran:')
  const luasLingkaran = () => {
    return Math.PI * radius * radius
  }
  alert(`Luas lingkaran adalah: ${luasLingkaran()}`)
});

document.getElementById('tombol1').addEventListener('click', () => {
    const panjang = parseFloat(prompt('masukan panjang persegi: '))
    const lebar = prompt('masukan lebar persegi: ')
    function luas(){
        return panjang * lebar
    }
    alert(`Luas persegi adalah: ${luas()}`)
});

document.getElementById('tombol2').addEventListener('click', () => {
    const alas = parseFloat(prompt('masukan alas jajar genjang: '))
    const tinggi = parseFloat(prompt('masukan tinggi jajar genjang: '))
    function luasJajarGenjang(){
        return 0.5 * alas * tinggi
    }
    alert(`Luas jajar genjang adalah:` + luasJajarGenjang())
});

document.getElementById('tombol3').addEventListener('click', () => {
    const alas = parseFloat(prompt('masukan alas segitiga: '))
    const tinggi = parseFloat(prompt('masukan tinggi segitiga: '))
    const luasSegitiga = 0.5 * alas * tinggi
    alert(`Luas segitiga adalah: ${luasSegitiga}`)
});