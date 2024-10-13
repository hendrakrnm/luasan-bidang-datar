const tmblSatu = document.getElementById('btn')
const tmblDua = document.getElementById('btn2')

//styeling body
const body = document.body
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.height = '100vh'
body.style.width = '100vw'
body.style.margin = 0

//styeling tombol pertama
tmblSatu.style.height='100px'
tmblSatu.style.width= '250px'
tmblSatu.style.margin='100px'
tmblSatu.style.fontSize='20px'
tmblSatu.style.textAlign='center'
tmblSatu.style.backgroundColor = 'white'
tmblSatu.style.borderRadius = '10px'
tmblSatu.style.boxShadow = '0px 15px 30px rgba(0, 0, 0, 0.5)'



//styeling tombol kedua
tmblDua.style.backgroundColor = 'white'
tmblDua.style.height='100px'
tmblDua.style.width='250px'
tmblDua.style.margin='100px'
tmblDua.style.fontSize='20px'
tmblDua.style.borderRadius = '10px'
tmblDua.style.boxShadow = '0px 15px 30px rgba(0, 0, 0, 0.3)'


//seting untuk tombol pertama
tmblSatu.addEventListener('mouseover', ()=> {
    tmblSatu.style.backgroundColor = 'green'
    tmblSatu.style.boxShadow = '0px 25px 50px rgba(0, 0, 0, 0.6)'
    tmblSatu.style.height='110px'
    tmblSatu.style.width='275px'
    tmblSatu.style.fontSize='22px'
});

tmblSatu.addEventListener('mouseout', ()=> {
    tmblSatu.style.backgroundColor = 'white'
    tmblSatu.style.boxShadow = '0px 25px 50px rgba(0, 0, 0, 0.3)'
    tmblSatu.style.height='100px'
    tmblSatu.style.width='250px'
    tmblSatu.style.fontSize='20px'
});

tmblSatu.addEventListener('click', () => {
    window.location.href = 'pertama.html'
});


//seting untuk tombol kedua
tmblDua.addEventListener('mouseover', ()=> {
    tmblDua.style.backgroundColor = 'green'
    tmblDua.style.boxShadow = '0px 25px 50px rgba(0, 0, 0, 0.6)'
    tmblDua.style.height='110px'
    tmblDua.style.width='275px'
    tmblDua.style.fontSize='22px'
});

tmblDua.addEventListener('mouseout', ()=> {
    tmblDua.style.backgroundColor = 'white'
    tmblDua.style.boxShadow = '0px 25px 50px rgba(0, 0, 0, 0.3)'
    tmblDua.style.height='100px'
    tmblDua.style.width='250px'
    tmblDua.style.fontSize='20px'
}); 

tmblDua.addEventListener('click', () => {
    window.location.href = 'penghasilan.html'
});



