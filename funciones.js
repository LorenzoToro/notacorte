var MediaBachMultiplicada=0;
var MediaGeneralMultiplicada=0;
var EspecificasDesordenadas=[0,0,0,0,0];
var ValorEspecifica1=0;
var ValorEspecifica2=0;
var ValorEspecifica3=0;
var ValorEspecifica4=0;
var ValorEspecificaGeneral=0;
var ValorEspecificaMayor1=0;
var ValorEspecificaMayor2=0;
var NOTAFINALOBTENIDA=0;




function crearPDF() {

  //document.formulario.historial.value=document.formulario.historial.value+"Generando PDF...\n";

  var doc = new jsPDF();
  var logo = new Image();
 logo.src = 'FONDO.jpg'; 
doc.addImage(logo, 'JPEG', 9, 10, 195, 275);

	doc.setProperties({
    title: 'Participaci\u00F3n sorteo',
    subject: 'Boleto generado tras utilizar el Calculador de Notas de Corte',
    author: 'Lorenzo Toro Gálvez',
    keywords: 'javascript, jsPDF, calculador, notas corte, nota, UMA',
    creator: 'Lorenzo Toro Gálvez'


  });  


 

  doc.setFont("helvetica");
  doc.setFontType("normal");
  doc.setTextColor("#FFFFFF");      
  doc.setFontSize(14);
  doc.text(67,95, document.formulario.nombre.value);

  doc.setFont("helvetica");
  doc.setFontType("normal");
  doc.setTextColor("#FFFFFF");
  doc.setFontSize(14);
  doc.text(67,104, document.formulario.apellidos.value);

  doc.setFont("helvetica");
  doc.setFontType("normal");
  doc.setTextColor("#FFFFFF");
  doc.setFontSize(14);
  doc.text(67,114, document.formulario.nif.value);

  doc.setFont("helvetica");
  doc.setFontType("normal");
  doc.setTextColor("#FFFFFF");
  doc.setFontSize(14);
  doc.text(67,123, document.formulario.email.value);

  doc.setFont("helvetica");
  doc.setFontType("normal");
  doc.setTextColor("#FFFFFF");
  doc.setFontSize(14);
  doc.text(67,154, document.formulario.nif.value.substring(5,8));




  //doc.save('Historial.pdf');
  
  return(doc);
  }


function guardarPDF() {

  if (document.formulario.nombre.value=="" || document.formulario.apellidos.value=="" || document.formulario.nif.value=="" || document.formulario.email.value==""){
     alert("\u00a1Debes rellenar los cuatro campos con tus datos personales!");
  } else if (document.formulario.nif.value.length<9){
     alert("\u00a1Debes introducir un formato v\u00e1lido de DNI!: 00000000-L");
        }else doc = crearPDF();
   

  doc.save('Boleto.pdf');

 }

 
function validar_texto(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar y tabulador, siempre los permite
    if (tecla==8 || tecla=="\t"){
        return true;
    }
        
    // Patron de entrada, en este caso solo acepta numeros y el punto de decimal
    patron =/[0-9,"."]/;
    
    tecla_final = String.fromCharCode(tecla);
    
    return patron.test(tecla_final);
}




function Burbuja(ordenado)
{
 for(i=0;i<(ordenado.length-1);i++)
    for(j=0;j<(ordenado.length-i);j++){
        if(ordenado[j]<ordenado[j+1]){
             aux=ordenado[j];
             ordenado[j]=ordenado[j+1]; 
             ordenado[j+1]=aux;
       }
 
    } return ordenado;
}

function Limpiar ()
{
 document.getElementById("Limpiado").reset();
 document.getElementById("NOTAGRANDE").style.background = "#DAF5FF"; 
 document.getElementById("NOTAESP1").style.background = "#DAF5FF";
 document.getElementById("NOTAESP2").style.background = "#DAF5FF";
 document.getElementById("NOTAESP3").style.background = "#DAF5FF";
 document.getElementById("NOTAESP4").style.background = "#DAF5FF";
}

function CalcularNotaDeCorte ()
{
if (document.formulario.Carreras.value=="EligeGrado"){
  alert("\u00a1Debes elegir un Grado previamente!"); return;} else

if (document.formulario.NotaPrimero.value>10 || document.formulario.NotaSegundo.value>10 || document.formulario.NotaLengua.value>10 || document.formulario.NotaHistoria.value>10 || document.formulario.NotaGeneral3.value>10 || document.formulario.NotaGeneral4.value>10 || document.formulario.NotaEspecifica1.value>10 || document.formulario.NotaEspecifica2.value>10 || document.formulario.NotaEspecifica3.value>10 || document.formulario.NotaEspecifica4.value>10 || document.formulario.NotaPrimero.value=="" || document.formulario.NotaSegundo.value=="" || document.formulario.NotaLengua.value=="" || document.formulario.NotaHistoria.value=="" || document.formulario.NotaGeneral3.value=="" || document.formulario.NotaGeneral4.value==""){
   alert("\u00a1Las calificaciones deben estar entre 0 y 10!");
} else
PrimeroBach=document.formulario.NotaPrimero.value;
SegundoBach=document.formulario.NotaSegundo.value;
MediaBachMultiplicada=parseFloat(eval(eval(eval(PrimeroBach+'+'+SegundoBach)+'/'+2)+'*'+0.6)).toFixed(3);
document.formulario.NotaMediaBachillerato.value=MediaBachMultiplicada;

Lengua=document.formulario.NotaLengua.value;
Historia=document.formulario.NotaHistoria.value;
General3=document.formulario.NotaGeneral3.value;
General4=ValorEspecificaGeneral=document.formulario.NotaGeneral4.value;
MediaGeneralMultiplicada=parseFloat(eval(eval(eval(Lengua+'+'+Historia+'+'+General3+'+'+General4)+'/'+4)+'*'+0.4)).toFixed(3);
document.formulario.NotaMediaFaseGeneral.value=MediaGeneralMultiplicada;

if (document.formulario.Carreras.value=="ARQUITECTURA"){document.formulario.NotaDeAdmision.value="8.444";
if (document.formulario.Carreras.value=="ARQUITECTURA" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="24"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value==28) { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="ARQUITECTURA" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="24"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value==28) { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);

   } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="ARQUITECTURA" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="24"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value==28) { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);

   } else ValorEspecifica3=EspecificasDesordenadas[2]=0;

if (document.formulario.Carreras.value=="ARQUITECTURA" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="24"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value==28) { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);

   } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="ARQUITECTURA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="SISTEMATELECO"){document.formulario.NotaDeAdmision.value="5.119";
if (document.formulario.Carreras.value=="SISTEMATELECO" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value==10) { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="SISTEMATELECO" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value==10) { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;


if (document.formulario.Carreras.value=="SISTEMATELECO" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value==10) { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="SISTEMATELECO" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value==10) { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="SISTEMATELECO" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

if (document.formulario.Carreras.value=="SISTELECTRON"){document.formulario.NotaDeAdmision.value="5.567";
if (document.formulario.Carreras.value=="SISTELECTRON" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value==10) { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="SISTELECTRON" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value==10) { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;


if (document.formulario.Carreras.value=="SISTELECTRON" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value==10) { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="SISTELECTRON" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value==10) { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="SISTELECTRON" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="SONIDOIMAGEN"){document.formulario.NotaDeAdmision.value="5.554";
if (document.formulario.Carreras.value=="SONIDOIMAGEN" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value==10) { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="SONIDOIMAGEN" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value==10) { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="SONIDOIMAGEN" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value==10) { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;

if (document.formulario.Carreras.value=="SONIDOIMAGEN" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value==10) { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="SONIDOIMAGEN" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }}

else if (document.formulario.Carreras.value=="TECTELECO"){document.formulario.NotaDeAdmision.value="5.607";
if (document.formulario.Carreras.value=="TECTELECO" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value==10) { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="TECTELECO" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value==10) { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="TECTELECO" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value==10) { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;

if (document.formulario.Carreras.value=="TECTELECO" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value==10) { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

if (document.formulario.Carreras.value=="TECTELECO" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }}

else if (document.formulario.Carreras.value=="TELEMATICA"){document.formulario.NotaDeAdmision.value="5.426";
if (document.formulario.Carreras.value=="TELEMATICA" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value==10) { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="TELEMATICA" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value==10) { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="TELEMATICA" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value==10) { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;

if (document.formulario.Carreras.value=="TELEMATICA" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value==10) { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

if (document.formulario.Carreras.value=="TELEMATICA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="TECINDUSTRIALES"){document.formulario.NotaDeAdmision.value="5.076";
if (document.formulario.Carreras.value=="TECINDUSTRIALES" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="26") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="15"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="TECINDUSTRIALES" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="26") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="15"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="TECINDUSTRIALES" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="26") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="15"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;

if (document.formulario.Carreras.value=="TECINDUSTRIALES" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="26") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="15"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

if (document.formulario.Carreras.value=="TECINDUSTRIALES" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ENERGIA"){document.formulario.NotaDeAdmision.value="5.608";
if (document.formulario.Carreras.value=="ENERGIA" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="11") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="15"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="ENERGIA" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="11") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="15"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="ENERGIA" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="11") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="15"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;

if (document.formulario.Carreras.value=="ENERGIA" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="11") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="15"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

if (document.formulario.Carreras.value=="ENERGIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ROBOTICA"){document.formulario.NotaDeAdmision.value="10.864";
if (document.formulario.Carreras.value=="ROBOTICA" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="8") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="ROBOTICA" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="8") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="ROBOTICA" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="8") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;

if (document.formulario.Carreras.value=="ROBOTICA" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="8") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

if (document.formulario.Carreras.value=="ROBOTICA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ORGINDUSTRIAL"){document.formulario.NotaDeAdmision.value="5.457";
if (document.formulario.Carreras.value=="ORGINDUSTRIAL" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="12") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="ORGINDUSTRIAL" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="12") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="ORGINDUSTRIAL" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="12") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="ORGINDUSTRIAL" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="12") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="ORGINDUSTRIAL" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }

}
else if (document.formulario.Carreras.value=="COMPUTADOR"){document.formulario.NotaDeAdmision.value="5.593";
if (document.formulario.Carreras.value=="COMPUTADOR" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="COMPUTADOR" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="COMPUTADOR" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="COMPUTADOR" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="COMPUTADOR" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="INGSALUD"){document.formulario.NotaDeAdmision.value="7.780";
if (document.formulario.Carreras.value=="INGSALUD" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="15") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="INGSALUD" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="15") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="INGSALUD" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="15") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="INGSALUD" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="15") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="INGSALUD" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }

}
else if (document.formulario.Carreras.value=="SOFTWARE"){document.formulario.NotaDeAdmision.value="8.947";
if (document.formulario.Carreras.value=="SOFTWARE" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="SOFTWARE" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="SOFTWARE" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="SOFTWARE" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="SOFTWARE" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="INFORMATICA"){document.formulario.NotaDeAdmision.value="7.155";
if (document.formulario.Carreras.value=="INFORMATICA" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="INFORMATICA" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="INFORMATICA" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="INFORMATICA" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="INFORMATICA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="DISENIOINDUST"){document.formulario.NotaDeAdmision.value="5.199";
if (document.formulario.Carreras.value=="DISENIOINDUST" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="15"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="DISENIOINDUST" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="28") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="15"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="DISENIOINDUST" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="28") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="15"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="DISENIOINDUST" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="28") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="15"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="DISENIOINDUST" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else if (document.formulario.FaseGeneralList.value=="FG4.1"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ELECTRICA"){document.formulario.NotaDeAdmision.value="5.026";
if (document.formulario.Carreras.value=="ELECTRICA" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="26") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="15"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="ELECTRICA" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="26") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="15"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="ELECTRICA" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="26") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="15"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="ELECTRICA" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="26") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="15"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="ELECTRICA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="ELECTRONINDUST"){document.formulario.NotaDeAdmision.value="5.259";
if (document.formulario.Carreras.value=="ELECTRONINDUST" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="26") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="15"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="ELECTRONINDUST" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="26") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="15"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="ELECTRONINDUST" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="26") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="15"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="ELECTRONINDUST" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="26") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="15"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="ELECTRONINDUST" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="MECANICA"){document.formulario.NotaDeAdmision.value="5.963";
if (document.formulario.Carreras.value=="MECANICA" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="26") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="15"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="MECANICA" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="26") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="15"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="MECANICA" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="26") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="15"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="MECANICA" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="26") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="15"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="MECANICA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ELECTMECAN"){document.formulario.NotaDeAdmision.value="5.740";
if (document.formulario.Carreras.value=="ELECTMECAN" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="26") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="15"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="ELECTMECAN" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="26") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="15"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="ELECTMECAN" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="26") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="15"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="ELECTMECAN" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="26") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="15"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="ELECTMECAN" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ELECTRONINDUSTELECT"){document.formulario.NotaDeAdmision.value="6.277";
if (document.formulario.Carreras.value=="ELECTRONINDUSTELECT" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="26") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="15"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="ELECTRONINDUSTELECT" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="26") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="15"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="ELECTRONINDUSTELECT" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="26") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="15"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="ELECTRONINDUSTELECT" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="26") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="15"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="ELECTRONINDUSTELECT" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="MECANDISENIO"){document.formulario.NotaDeAdmision.value="8.522";
if (document.formulario.Carreras.value=="MECANDISENIO" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   } else if (document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="26") { 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15); 
     } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="15"){
        ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
      } else  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

if (document.formulario.Carreras.value=="MECANDISENIO" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   } else if (document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="26") { 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15); 
     } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="15"){
        ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
      } else  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;

if (document.formulario.Carreras.value=="MECANDISENIO" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   } else if (document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="26") { 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15); 
     } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="15"){
        ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
      } else  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;


if (document.formulario.Carreras.value=="MECANDISENIO" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   } else if (document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="26") { 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15); 
     } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="15"){
        ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
      } else  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;


if (document.formulario.Carreras.value=="MECANDISENIO" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="LOGOPEDIA"){document.formulario.NotaDeAdmision.value="7.090";
if (document.formulario.Carreras.value=="LOGOPEDIA" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
  }

if (document.formulario.Carreras.value=="LOGOPEDIA" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}
if (document.formulario.Carreras.value=="LOGOPEDIA" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="LOGOPEDIA" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="LOGOPEDIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="PSICOLOGIA"){document.formulario.NotaDeAdmision.value="7.707";
if (document.formulario.Carreras.value=="PSICOLOGIA" && document.formulario.NotaEspecifica1.value>=5){ 
  if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;

}
if (document.formulario.Carreras.value=="PSICOLOGIA" && document.formulario.NotaEspecifica2.value>=5){ 
  if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="PSICOLOGIA" && document.formulario.NotaEspecifica3.value>=5){ 
  if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="PSICOLOGIA" && document.formulario.NotaEspecifica4.value>=5){ 
  if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

}
if (document.formulario.Carreras.value=="PSICOLOGIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ENFERMERIA"){document.formulario.NotaDeAdmision.value="11.114";
if (document.formulario.Carreras.value=="ENFERMERIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="ENFERMERIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  }else if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="24"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="ENFERMERIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  }else if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="24"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}
if (document.formulario.Carreras.value=="ENFERMERIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  }else if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="24"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

}
if (document.formulario.Carreras.value=="ENFERMERIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="PODOLOGIA"){document.formulario.NotaDeAdmision.value="8.975";
if (document.formulario.Carreras.value=="PODOLOGIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="PODOLOGIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  }else if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="24"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="PODOLOGIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  }else if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="24"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}
if (document.formulario.Carreras.value=="PODOLOGIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  }else if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="24"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

}
if (document.formulario.Carreras.value=="PODOLOGIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="TERAPIA"){document.formulario.NotaDeAdmision.value="8.840";
if (document.formulario.Carreras.value=="TERAPIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="TERAPIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  }else if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="24"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="TERAPIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  }else if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="24"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}
if (document.formulario.Carreras.value=="TERAPIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  }else if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="24"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

}
if (document.formulario.Carreras.value=="TERAPIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="FISIOTERAPIA"){document.formulario.NotaDeAdmision.value="11.577";
if (document.formulario.Carreras.value=="FISIOTERAPIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="FISIOTERAPIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  }else if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="24"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="FISIOTERAPIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  }else if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="24"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}
if (document.formulario.Carreras.value=="FISIOTERAPIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  }else if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="24"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

}
if (document.formulario.Carreras.value=="FISIOTERAPIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="MEDICINA"){document.formulario.NotaDeAdmision.value="12.665";
if (document.formulario.Carreras.value=="MEDICINA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   }else if (document.formulario.Especifica1.value=="12"){
     ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15)}
     else if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="MEDICINA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   }else if (document.formulario.Especifica2.value=="12"){
     ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15)}
     else if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="24"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="MEDICINA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   }else if (document.formulario.Especifica3.value=="12"){
     ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15)}
     else if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="24"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="MEDICINA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   }else if (document.formulario.Especifica4.value=="12"){
     ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15)}
     else if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="24"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="MEDICINA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ENFERMERIARONDA"){document.formulario.NotaDeAdmision.value="9.853";
if (document.formulario.Carreras.value=="ENFERMERIARONDA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="ENFERMERIARONDA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  }else if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="24"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="ENFERMERIARONDA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  }else if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="24"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}
if (document.formulario.Carreras.value=="ENFERMERIARONDA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  }else if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="24"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

}
if (document.formulario.Carreras.value=="ENFERMERIARONDA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="BIOLOGIA"){document.formulario.NotaDeAdmision.value="8.290";
if (document.formulario.Carreras.value=="BIOLOGIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="BIOLOGIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="BIOLOGIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}
if (document.formulario.Carreras.value=="BIOLOGIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

}
if (document.formulario.Carreras.value=="BIOLOGIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="BIOQUIMICA"){document.formulario.NotaDeAdmision.value="11.983";
if (document.formulario.Carreras.value=="BIOQUIMICA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="BIOQUIMICA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="BIOQUIMICA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}
if (document.formulario.Carreras.value=="BIOQUIMICA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

}
if (document.formulario.Carreras.value=="BIOQUIMICA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }

}
else if (document.formulario.Carreras.value=="AMBIENTALES"){document.formulario.NotaDeAdmision.value="5.043";
if (document.formulario.Carreras.value=="AMBIENTALES" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="AMBIENTALES" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="AMBIENTALES" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}
if (document.formulario.Carreras.value=="AMBIENTALES" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;

}
if (document.formulario.Carreras.value=="AMBIENTALES" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="MATEMATICAS"){document.formulario.NotaDeAdmision.value="8.890";
if (document.formulario.Carreras.value=="MATEMATICAS" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  }else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="MATEMATICAS" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  }else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="MATEMATICAS" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  }else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="MATEMATICAS" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  }else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="MATEMATICAS" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="INGQUIMICA"){document.formulario.NotaDeAdmision.value="5.040";
if (document.formulario.Carreras.value=="INGQUIMICA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="28"){
    ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
    }else if (document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="11"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="INGQUIMICA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="28"){
    ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
    }else if (document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="11"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="INGQUIMICA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="28"){
    ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
    }else if (document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="11"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="INGQUIMICA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="28"){
    ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
    }else if (document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="11"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="INGQUIMICA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="QUIMICA"){document.formulario.NotaDeAdmision.value="6.222";
if (document.formulario.Carreras.value=="QUIMICA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
  } else if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="15"){
    ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
    }else if (document.formulario.Especifica1.value=="11" || document.formulario.Especifica1.value=="28"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="QUIMICA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
  } else if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="15"){
    ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
    }else if (document.formulario.Especifica2.value=="11" || document.formulario.Especifica2.value=="28"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="QUIMICA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
  } else if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="15"){
    ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
    }else if (document.formulario.Especifica3.value=="11" || document.formulario.Especifica3.value=="28"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}
if (document.formulario.Carreras.value=="QUIMICA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
  } else if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="15"){
    ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
    }else if (document.formulario.Especifica4.value=="11" || document.formulario.Especifica4.value=="28"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="QUIMICA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="INGLES"){document.formulario.NotaDeAdmision.value="5.772";
if (document.formulario.Carreras.value=="INGLES" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="23"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="INGLES" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="23"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="INGLES" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="23"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="INGLES" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="23"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="INGLES" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else if (document.formulario.FaseGeneralList.value=="FG4.4"){ 
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
     }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="FILOLCLAS"){document.formulario.NotaDeAdmision.value="5.694";
if (document.formulario.Carreras.value=="FILOLCLAS" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="23"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="FILOLCLAS" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="23"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="FILOLCLAS" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="23"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="FILOLCLAS" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="23"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="FILOLCLAS" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else if (document.formulario.FaseGeneralList.value=="FG4.4"){ 
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
     }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="FILOLHISP"){document.formulario.NotaDeAdmision.value="5.024";
if (document.formulario.Carreras.value=="FILOLHISP" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="23"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="FILOLHISP" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="23"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="FILOLHISP" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="23"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="FILOLHISP" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="23"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="FILOLHISP" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
   }else if (document.formulario.FaseGeneralList.value=="FG4.4"){ 
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
     }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="FILOSOFIA"){document.formulario.NotaDeAdmision.value="5.756";
if (document.formulario.Carreras.value=="FILOSOFIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="FILOSOFIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="FILOSOFIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="FILOSOFIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="FILOSOFIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="GEOGRAFIA"){document.formulario.NotaDeAdmision.value="5.075";
if (document.formulario.Carreras.value=="GEOGRAFIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="GEOGRAFIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="GEOGRAFIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="GEOGRAFIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="GEOGRAFIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     }else if (document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
       }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="HISTORIAARTE"){document.formulario.NotaDeAdmision.value="5.000";
if (document.formulario.Carreras.value=="HISTORIAARTE" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="23"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="27"){
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="HISTORIAARTE" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="23"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="27"){
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="HISTORIAARTE" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="23"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="27"){
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="HISTORIAARTE" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="23"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="27"){
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="HISTORIAARTE" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     }else if (document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.4"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
       }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="HISTORIA"){document.formulario.NotaDeAdmision.value="5.017";
if (document.formulario.Carreras.value=="HISTORIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" ||document.formulario.Especifica1.value=="23"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="18"){
      ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="HISTORIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" ||document.formulario.Especifica2.value=="23"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="18"){
      ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="HISTORIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" ||document.formulario.Especifica3.value=="23"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="18"){
      ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="HISTORIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" ||document.formulario.Especifica4.value=="23"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="18"){
      ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="HISTORIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     }else if (document.formulario.FaseGeneralList.value=="FG4.4"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
       }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="TRADFRANCES"){document.formulario.NotaDeAdmision.value="8.056";
if (document.formulario.Carreras.value=="TRADFRANCES" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" ||document.formulario.Especifica1.value=="23"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="TRADFRANCES" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" ||document.formulario.Especifica2.value=="23"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="TRADFRANCES" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" ||document.formulario.Especifica3.value=="23"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="TRADFRANCES" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" ||document.formulario.Especifica4.value=="23"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="TRADFRANCES" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     }else if (document.formulario.FaseGeneralList.value=="FG4.4"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
       }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="TRADINGLES"){document.formulario.NotaDeAdmision.value="11.005";
if (document.formulario.Carreras.value=="TRADINGLES" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" ||document.formulario.Especifica1.value=="23"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="TRADINGLES" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" ||document.formulario.Especifica2.value=="23"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="TRADINGLES" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" ||document.formulario.Especifica3.value=="23"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="TRADINGLES" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" ||document.formulario.Especifica4.value=="23"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="TRADINGLES" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     }else if (document.formulario.FaseGeneralList.value=="FG4.4"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
       }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="BELLASARTES"){document.formulario.NotaDeAdmision.value="8.093";
if (document.formulario.Carreras.value=="BELLASARTES" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="27" ||document.formulario.Especifica1.value=="29"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="25"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="BELLASARTES" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="25"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="BELLASARTES" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="25"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="BELLASARTES" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="27" ||document.formulario.Especifica4.value=="29"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="25"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="BELLASARTES" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     }else if (document.formulario.FaseGeneralList.value=="FG4.4" || document.formulario.FaseGeneralList.value=="FG4.2"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
       }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="INVESTMERCADO"){document.formulario.NotaDeAdmision.value="7.050";
if (document.formulario.Carreras.value=="INVESTMERCADO" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="24" ||document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="INVESTMERCADO" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="24" ||document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="INVESTMERCADO" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="24" ||document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="INVESTMERCADO" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="24" ||document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="INVESTMERCADO" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     }else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
       }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="GESTADMIN"){document.formulario.NotaDeAdmision.value="5.110";
if (document.formulario.Carreras.value=="GESTADMIN" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
    } else if (document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24"){
       ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       } else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" ||document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="GESTADMIN" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
    } else if (document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24"){
       ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       } else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="GESTADMIN" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
    } else if (document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24"){
       ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       } else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="GESTADMIN" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
    } else if (document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24"){
       ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       } else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="GESTADMIN" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     } else if (document.formulario.FaseGeneralList.value="FG4.3") {
       ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.15);
      } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
         }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="TURISMO"){document.formulario.NotaDeAdmision.value="6.634";
if (document.formulario.Carreras.value=="TURISMO" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       } else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="TURISMO" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       } else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="TURISMO" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       } else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="TURISMO" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       } else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="TURISMO" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     } else if (document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
         }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="EDUINFANT"){document.formulario.NotaDeAdmision.value="8.330";
if (document.formulario.Carreras.value=="EDUINFANT" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" ||  document.formulario.Especifica1.value=="29"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   }else if (document.formulario.Especifica1.value=="1"){
     ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="EDUINFANT" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" ||  document.formulario.Especifica2.value=="29"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   }else if (document.formulario.Especifica2.value=="1"){
     ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="EDUINFANT" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" ||  document.formulario.Especifica3.value=="29"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   }else if (document.formulario.Especifica3.value=="1"){
     ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="EDUINFANT" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" ||  document.formulario.Especifica4.value=="29"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   }else if (document.formulario.Especifica4.value=="1"){
     ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="EDUINFANT" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
      }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }

}
else if (document.formulario.Carreras.value=="EDUPRIMARIA"){document.formulario.NotaDeAdmision.value="8.255";
if (document.formulario.Carreras.value=="EDUPRIMARIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" ||  document.formulario.Especifica1.value=="29"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   }else if (document.formulario.Especifica1.value=="1"){
     ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" ||  document.formulario.Especifica2.value=="29"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   }else if (document.formulario.Especifica2.value=="1"){
     ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" ||  document.formulario.Especifica3.value=="29"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   }else if (document.formulario.Especifica3.value=="1"){
     ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" ||  document.formulario.Especifica4.value=="29"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   }else if (document.formulario.Especifica4.value=="1"){
     ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIA" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
      }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="EDUPRIMARIAINGLES"){document.formulario.NotaDeAdmision.value="10.240";
if (document.formulario.Carreras.value=="EDUPRIMARIAINGLES" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" ||  document.formulario.Especifica1.value=="29"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   }else if (document.formulario.Especifica1.value=="1"){
     ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIAINGLES" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" ||  document.formulario.Especifica2.value=="29"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   }else if (document.formulario.Especifica2.value=="1"){
     ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIAINGLES" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" ||  document.formulario.Especifica3.value=="29"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   }else if (document.formulario.Especifica3.value=="1"){
     ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIAINGLES" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" ||  document.formulario.Especifica4.value=="29"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   }else if (document.formulario.Especifica4.value=="1"){
     ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIAINGLES" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
      }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="EDUSOCIAL"){document.formulario.NotaDeAdmision.value="8.083";
if (document.formulario.Carreras.value=="EDUSOCIAL" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" ||  document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="18" ||  document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="22" ||  document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="27"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" ||  document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="EDUSOCIAL" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" ||  document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="18" ||  document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="22" ||  document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="27"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" ||  document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="EDUSOCIAL" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" ||  document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="18" ||  document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="22" ||  document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="27"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" ||  document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="EDUSOCIAL" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" ||  document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="18" ||  document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="22" ||  document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="27"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" ||  document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="EDUSOCIAL" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
      } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
  } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="PEDAGOGIA"){document.formulario.NotaDeAdmision.value="6.928";
if (document.formulario.Carreras.value=="PEDAGOGIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" ||  document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" ||  document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" ||  document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" ||  document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" ||  document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" ||  document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" ||  document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="26" ||  document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="PEDAGOGIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" ||  document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" ||  document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" ||  document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" ||  document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" ||  document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" ||  document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" ||  document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="26" ||  document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="PEDAGOGIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" ||  document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" ||  document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" ||  document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" ||  document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" ||  document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" ||  document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" ||  document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="26" ||  document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="PEDAGOGIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" ||  document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" ||  document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" ||  document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" ||  document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" ||  document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" ||  document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" ||  document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="26" ||  document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="PEDAGOGIA" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
  } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="PERIODISMO"){document.formulario.NotaDeAdmision.value="9.044";
if (document.formulario.Carreras.value=="PERIODISMO" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   }else if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10"){
     ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="PERIODISMO" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   }else if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10"){
     ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="PERIODISMO" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   }else if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10"){
     ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="PERIODISMO" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   }else if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10"){
     ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="PERIODISMO" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
     }else if (document.formulario.FaseGeneralList.value=="FG4.3"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
       }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}


else if (document.formulario.Carreras.value=="PUBLICIDAD"){document.formulario.NotaDeAdmision.value="7.920";
if (document.formulario.Carreras.value=="PUBLICIDAD" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="27"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" ||  document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25" ||  document.formulario.Especifica1.value=="26" ||  document.formulario.Especifica1.value=="29" ){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="PUBLICIDAD" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="27"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" ||  document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25" ||  document.formulario.Especifica2.value=="26" ||  document.formulario.Especifica2.value=="29" ){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="PUBLICIDAD" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="27"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" ||  document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25" ||  document.formulario.Especifica3.value=="26" ||  document.formulario.Especifica3.value=="29" ){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="PUBLICIDAD" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="27"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" ||  document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25" ||  document.formulario.Especifica4.value=="26" ||  document.formulario.Especifica4.value=="29" ){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="PUBLICIDAD" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);
  } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="AUDIOVISUAL"){document.formulario.NotaDeAdmision.value="8.753";
if (document.formulario.Carreras.value=="AUDIOVISUAL" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="23" ||  document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   }else if (document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){
     ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="AUDIOVISUAL" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="23" ||  document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   }else if (document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){
     ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="AUDIOVISUAL" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="23" ||  document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   }else if (document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){
     ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="AUDIOVISUAL" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="23" ||  document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   }else if (document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){
     ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="AUDIOVISUAL" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="RRLL"){document.formulario.NotaDeAdmision.value="5.002";
if (document.formulario.Carreras.value=="RRLL" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="23" ||  document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="RRLL" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="23" ||  document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="RRLL" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="23" ||  document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="RRLL" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="23" ||  document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="RRLL" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="TRABAJOSOCIAL"){document.formulario.NotaDeAdmision.value="7.430";
if (document.formulario.Carreras.value=="TRABAJOSOCIAL" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="TRABAJOSOCIAL" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="TRABAJOSOCIAL" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="TRABAJOSOCIAL" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="TRABAJOSOCIAL" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="ASIA"){document.formulario.NotaDeAdmision.value="6.960";
if (document.formulario.Carreras.value=="ASIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="23"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="18" ||  document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" ||  document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="ASIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="23"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="18" ||  document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" ||  document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="ASIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="23"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="18" ||  document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" ||  document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="ASIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="23"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="18" ||  document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" ||  document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="ASIA" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.1"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.4"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="ECONOMIA"){document.formulario.NotaDeAdmision.value="6.994";
if (document.formulario.Carreras.value=="ECONOMIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" ||  document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" ||  document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="ECONOMIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" ||  document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" ||  document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="ECONOMIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" ||  document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" ||  document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="ECONOMIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" ||  document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" ||  document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="ECONOMIA" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }

}
else if (document.formulario.Carreras.value=="FINANZAS"){document.formulario.NotaDeAdmision.value="5.000";
if (document.formulario.Carreras.value=="FINANZAS" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" ||  document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" ||  document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="FINANZAS" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" ||  document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" ||  document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="FINANZAS" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" ||  document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" ||  document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="FINANZAS" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" ||  document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" ||  document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="FINANZAS" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ADE"){document.formulario.NotaDeAdmision.value="8.046";
if (document.formulario.Carreras.value=="ADE" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" ||  document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" ||  document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="ADE" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" ||  document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" ||  document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="ADE" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" ||  document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" ||  document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="ADE" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" ||  document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" ||  document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="ADE" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }

}
else if (document.formulario.Carreras.value=="ADEDERECHO"){document.formulario.NotaDeAdmision.value="11.068";
if (document.formulario.Carreras.value=="ADEDERECHO" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" ||  document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" ||  document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="ADEDERECHO" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" ||  document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" ||  document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="ADEDERECHO" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" ||  document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" ||  document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="ADEDERECHO" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" ||  document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" ||  document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="ADEDERECHO" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="ADEESPINGECON"){document.formulario.NotaDeAdmision.value="11.119";
if (document.formulario.Carreras.value=="ADEESPINGECON" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" ||  document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" ||  document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="ADEESPINGECON" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" ||  document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" ||  document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="ADEESPINGECON" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" ||  document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" ||  document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="ADEESPINGECON" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" ||  document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" ||  document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="ADEESPINGECON" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="CRIMINOLOGIA"){document.formulario.NotaDeAdmision.value="9.748";
if (document.formulario.Carreras.value=="CRIMINOLOGIA" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="26"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   }else if (document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="15"){
     ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" ||  document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" ||  document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" ||  document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="CRIMINOLOGIA" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="26"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   }else if (document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="15"){
     ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" ||  document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" ||  document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" ||  document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="CRIMINOLOGIA" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="26"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   }else if (document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="15"){
     ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" ||  document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" ||  document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" ||  document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="CRIMINOLOGIA" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="26"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   }else if (document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="15"){
     ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" ||  document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" ||  document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" ||  document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="CRIMINOLOGIA" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="DERECHO"){document.formulario.NotaDeAdmision.value="8.395";
if (document.formulario.Carreras.value=="DERECHO" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="25"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
       }else if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="1" || document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" ||  document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" ||  document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" || document.formulario.Especifica1.value=="29"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}

if (document.formulario.Carreras.value=="DERECHO" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="25"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
       }else if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="1" || document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" ||  document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" ||  document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" || document.formulario.Especifica2.value=="29"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}

if (document.formulario.Carreras.value=="DERECHO" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="25"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
       }else if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="1" || document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" ||  document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" ||  document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" || document.formulario.Especifica3.value=="29"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}

if (document.formulario.Carreras.value=="DERECHO" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="25"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
       }else if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="1" || document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" ||  document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" ||  document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" || document.formulario.Especifica4.value=="29"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}

if (document.formulario.Carreras.value=="DERECHO" && document.formulario.NotaGeneral4.value>=5){
    if (document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.4"){
         ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
  } else if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.3"){
      ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.1);

    } else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}
else if (document.formulario.Carreras.value=="EDUPRIMARIAANT"){document.formulario.NotaDeAdmision.value="5.184";
if (document.formulario.Carreras.value=="EDUPRIMARIAANT" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" ||  document.formulario.Especifica1.value=="29"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   }else if (document.formulario.Especifica1.value=="1"){
     ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIAANT" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" ||  document.formulario.Especifica2.value=="29"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   }else if (document.formulario.Especifica2.value=="1"){
     ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIAANT" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" ||  document.formulario.Especifica3.value=="29"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   }else if (document.formulario.Especifica3.value=="1"){
     ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIAANT" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" ||  document.formulario.Especifica4.value=="29"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   }else if (document.formulario.Especifica4.value=="1"){
     ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="EDUPRIMARIAANT" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
      }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }
}

else if (document.formulario.Carreras.value=="EDUINFANTANT"){document.formulario.NotaDeAdmision.value="5.144";
if (document.formulario.Carreras.value=="EDUINFANTANT" && document.formulario.NotaEspecifica1.value>=5){ 
 if (document.formulario.Especifica1.value=="0" || document.formulario.Especifica1.value=="3" || document.formulario.Especifica1.value=="4" || document.formulario.Especifica1.value=="6" || document.formulario.Especifica1.value=="12" || document.formulario.Especifica1.value=="13" || document.formulario.Especifica1.value=="14" || document.formulario.Especifica1.value=="15" || document.formulario.Especifica1.value=="18" || document.formulario.Especifica1.value=="19" || document.formulario.Especifica1.value=="20" || document.formulario.Especifica1.value=="21" || document.formulario.Especifica1.value=="22" || document.formulario.Especifica1.value=="23" || document.formulario.Especifica1.value=="24" || document.formulario.Especifica1.value=="25" || document.formulario.Especifica1.value=="26" || document.formulario.Especifica1.value=="27" ||  document.formulario.Especifica1.value=="29"){
  ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.2);
   }else if (document.formulario.Especifica1.value=="1"){
     ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.15);
       }else if (document.formulario.Especifica1.value=="2" || document.formulario.Especifica1.value=="5" || document.formulario.Especifica1.value=="7" || document.formulario.Especifica1.value=="8" || document.formulario.Especifica1.value=="9" || document.formulario.Especifica1.value=="10" || document.formulario.Especifica1.value=="16" || document.formulario.Especifica1.value=="17"){ 
         ValorEspecifica1=EspecificasDesordenadas[0]=eval((document.formulario.NotaEspecifica1.value)+'*'+0.1);
   
  } else ValorEspecifica1=EspecificasDesordenadas[0]=0;
}


if (document.formulario.Carreras.value=="EDUINFANTANT" && document.formulario.NotaEspecifica2.value>=5){ 
 if (document.formulario.Especifica2.value=="0" || document.formulario.Especifica2.value=="3" || document.formulario.Especifica2.value=="4" || document.formulario.Especifica2.value=="6" || document.formulario.Especifica2.value=="12" || document.formulario.Especifica2.value=="13" || document.formulario.Especifica2.value=="14" || document.formulario.Especifica2.value=="15" || document.formulario.Especifica2.value=="18" || document.formulario.Especifica2.value=="19" || document.formulario.Especifica2.value=="20" || document.formulario.Especifica2.value=="21" || document.formulario.Especifica2.value=="22" || document.formulario.Especifica2.value=="23" || document.formulario.Especifica2.value=="24" || document.formulario.Especifica2.value=="25" || document.formulario.Especifica2.value=="26" || document.formulario.Especifica2.value=="27" ||  document.formulario.Especifica2.value=="29"){
  ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.2);
   }else if (document.formulario.Especifica2.value=="1"){
     ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.15);
       }else if (document.formulario.Especifica2.value=="2" || document.formulario.Especifica2.value=="5" || document.formulario.Especifica2.value=="7" || document.formulario.Especifica2.value=="8" || document.formulario.Especifica2.value=="9" || document.formulario.Especifica2.value=="10" || document.formulario.Especifica2.value=="16" || document.formulario.Especifica2.value=="17"){ 
         ValorEspecifica2=EspecificasDesordenadas[1]=eval((document.formulario.NotaEspecifica2.value)+'*'+0.1);
   
  } else ValorEspecifica2=EspecificasDesordenadas[1]=0;
}


if (document.formulario.Carreras.value=="EDUINFANTANT" && document.formulario.NotaEspecifica3.value>=5){ 
 if (document.formulario.Especifica3.value=="0" || document.formulario.Especifica3.value=="3" || document.formulario.Especifica3.value=="4" || document.formulario.Especifica3.value=="6" || document.formulario.Especifica3.value=="12" || document.formulario.Especifica3.value=="13" || document.formulario.Especifica3.value=="14" || document.formulario.Especifica3.value=="15" || document.formulario.Especifica3.value=="18" || document.formulario.Especifica3.value=="19" || document.formulario.Especifica3.value=="20" || document.formulario.Especifica3.value=="21" || document.formulario.Especifica3.value=="22" || document.formulario.Especifica3.value=="23" || document.formulario.Especifica3.value=="24" || document.formulario.Especifica3.value=="25" || document.formulario.Especifica3.value=="26" || document.formulario.Especifica3.value=="27" ||  document.formulario.Especifica3.value=="29"){
  ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.2);
   }else if (document.formulario.Especifica3.value=="1"){
     ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.15);
       }else if (document.formulario.Especifica3.value=="2" || document.formulario.Especifica3.value=="5" || document.formulario.Especifica3.value=="7" || document.formulario.Especifica3.value=="8" || document.formulario.Especifica3.value=="9" || document.formulario.Especifica3.value=="10" || document.formulario.Especifica3.value=="16" || document.formulario.Especifica3.value=="17"){ 
         ValorEspecifica3=EspecificasDesordenadas[2]=eval((document.formulario.NotaEspecifica3.value)+'*'+0.1);
   
  } else ValorEspecifica3=EspecificasDesordenadas[2]=0;
}


if (document.formulario.Carreras.value=="EDUINFANTANT" && document.formulario.NotaEspecifica4.value>=5){ 
 if (document.formulario.Especifica4.value=="0" || document.formulario.Especifica4.value=="3" || document.formulario.Especifica4.value=="4" || document.formulario.Especifica4.value=="6" || document.formulario.Especifica4.value=="12" || document.formulario.Especifica4.value=="13" || document.formulario.Especifica4.value=="14" || document.formulario.Especifica4.value=="15" || document.formulario.Especifica4.value=="18" || document.formulario.Especifica4.value=="19" || document.formulario.Especifica4.value=="20" || document.formulario.Especifica4.value=="21" || document.formulario.Especifica4.value=="22" || document.formulario.Especifica4.value=="23" || document.formulario.Especifica4.value=="24" || document.formulario.Especifica4.value=="25" || document.formulario.Especifica4.value=="26" || document.formulario.Especifica4.value=="27" ||  document.formulario.Especifica4.value=="29"){
  ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.2);
   }else if (document.formulario.Especifica4.value=="1"){
     ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.15);
       }else if (document.formulario.Especifica4.value=="2" || document.formulario.Especifica4.value=="5" || document.formulario.Especifica4.value=="7" || document.formulario.Especifica4.value=="8" || document.formulario.Especifica4.value=="9" || document.formulario.Especifica4.value=="10" || document.formulario.Especifica4.value=="16" || document.formulario.Especifica4.value=="17"){ 
         ValorEspecifica4=EspecificasDesordenadas[3]=eval((document.formulario.NotaEspecifica4.value)+'*'+0.1);
   
  } else ValorEspecifica4=EspecificasDesordenadas[3]=0;
}


if (document.formulario.Carreras.value=="EDUINFANTANT" && document.formulario.NotaGeneral4.value>=5){
  if (document.formulario.FaseGeneralList.value=="FG4.1" || document.formulario.FaseGeneralList.value=="FG4.2" || document.formulario.FaseGeneralList.value=="FG4.3" || document.formulario.FaseGeneralList.value=="FG4.4"){
     ValorEspecificaGeneral=EspecificasDesordenadas[4]=eval((document.formulario.NotaGeneral4.value)+'*'+0.2);
      }else ValorEspecificaGeneral=EspecificasDesordenadas[4]=0;
 }

}



EspecificasDesordenadas=Burbuja(EspecificasDesordenadas);

document.formulario.NotaFaseEspecifica.value=parseFloat(eval(EspecificasDesordenadas[0]+'+'+EspecificasDesordenadas[1])).toFixed(3);

document.formulario.NotaDeCorte.value=NOTAFINALOBTENIDA=parseFloat(eval(MediaBachMultiplicada+'+'+MediaGeneralMultiplicada+'+'+document.formulario.NotaFaseEspecifica.value)).toFixed(3);



if (NOTAFINALOBTENIDA<(document.formulario.NotaDeAdmision.value)*1){
   document.getElementById("NOTAGRANDE").style.background = "#D73535"; 
  } else document.getElementById("NOTAGRANDE").style.background = "#41D244";


if (document.formulario.NotaEspecifica1.value<5 && document.formulario.NotaEspecifica1.value!=""){
    document.getElementById("NOTAESP1").style.background = "grey";
   } else document.getElementById("NOTAESP1").style.background = "#DAF5FF";

if (document.formulario.NotaEspecifica2.value<5 && document.formulario.NotaEspecifica2.value!=""){
    document.getElementById("NOTAESP2").style.background = "grey";
   } else document.getElementById("NOTAESP2").style.background = "#DAF5FF";

if (document.formulario.NotaEspecifica3.value<5 && document.formulario.NotaEspecifica3.value!=""){
    document.getElementById("NOTAESP3").style.background = "grey";
   } else document.getElementById("NOTAESP3").style.background = "#DAF5FF";

if (document.formulario.NotaEspecifica4.value<5 && document.formulario.NotaEspecifica4.value!=""){
    document.getElementById("NOTAESP4").style.background = "grey";
   } else document.getElementById("NOTAESP4").style.background = "#DAF5FF";



}









