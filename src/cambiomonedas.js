function cambiar(a) {
    let cambio;
    if (a==0.1 || a==0.2 || a==0.5 || a==1 ||a==2 ||a==5) {
        cambio=a;
    }
    else{
        cambio = "1,1,1,1,1,1";
    }
    return cambio;
  }
  
export default cambiar;
  