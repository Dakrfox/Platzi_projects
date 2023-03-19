function apply_disc_id_exist(){
    let precio = document.getElementById("precio").value;
    const lista =    [{name:'cupon1',
                        discount:15},
                        {name:'cupon2',
                        discount:25},
                        {name:'cupon3',
                        discount:35}];
    let cupon = document.getElementById("descuento").value; 
    let v_cupon = function(coupon){
        return coupon.name===cupon;
    };
    let userC = lista.find(v_cupon);
    if(!userC){
        alert(`El cupón ${cupon} no es valido :c`);
        let txt_ttl = document.getElementById("total").value=`el precio total es de: ${precio}`;
    }
    else{
        let total = precio - precio*(userC.discount/100);
        let txt_ttl = document.getElementById("total").value=`el precio total es de: ${total}`;
    }
    
}