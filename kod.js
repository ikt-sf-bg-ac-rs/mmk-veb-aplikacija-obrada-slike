let odabirSlike = document.getElementById('odabirSlike');
odabirSlike.addEventListener('change', unosSlike);

kodovanje = document.querySelector('#kodovanje');
noviUnos = document.querySelector('#noviUnos');

kodSlike = document.querySelector('#kodSlike');

function unosSlike(e){

    ctx1 = document.getElementById('canvas1');
    ctx1 = canvas1.getContext('2d');

    img = new Image();
    img.src = URL.createObjectURL(e.target.files[0]);

    img.onload = function(){

        canvas1.width = img.naturalWidth;
        canvas1.height = img.naturalHeight;
        ctx1.drawImage(img, 0, 0, canvas1.width, canvas1.height);

    }

}

kodovanje.addEventListener('click', function(){

    kod = canvas1.toDataURL(img); 
    kodSlike.value = kod;

});

noviUnos.addEventListener('click', function(){
    window.location.reload(true);
});

//////////////////////////////////////
/////////////Nastaviće se////////////////
/////////////////////////////////////
//Novi kod...

let obradaSlike = document.querySelector('#obradaSlike');
let rezolucijaSlike = document.querySelector('#rezolucijaSlike');
let brPikselaSlike = document.querySelector('#brPikselaSlike');
let vrednostiSvihPiksela = document.querySelector('#vrednostiSvihPiksela');

let pikseli = document.querySelector('#pikseli');
let trenutniPiksel = document.querySelector('#trenutniPiksel');

obradaSlike.addEventListener('click', () => {

    rezolucijaSlike.value = img.naturalWidth + 'x' + img.naturalHeight + ' px';
    brPikselaSlike.value = img.naturalWidth * img.naturalHeight;

    function odabirPiksela(a, lokacijaPiksela){

        const kooridinata = canvas1.getBoundingClientRect();
        const x = a.clientX - kooridinata.left;
        const y = a.clientY - kooridinata.top;

        const piksel = ctx1.getImageData(x, y, 1, 1).data;

        const rgbaBoja = `rgba(${piksel[0]}, ${piksel[1]}, ${piksel[2]}, ${piksel[3]/255})`;
        lokacijaPiksela.style.backgroundColor = rgbaBoja;
        lokacijaPiksela.textContent = rgbaBoja;
        return rgbaBoja;

    }

    canvas1.addEventListener('click', a => odabirPiksela(a, pikseli));
    canvas1.addEventListener('mousemove', a => odabirPiksela(a, trenutniPiksel));
    
});

