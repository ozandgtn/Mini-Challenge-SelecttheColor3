function color(sayi){
    if (sayi <= 0 || sayi >= 50){
       return 'GEÇERSİZ SAYI GİRDİNİZ'
    }
    if(sayi > 0 && sayi < 10 ){
       return 'SARI' ;
    }else if (sayi >=10 && sayi < 20){
       return 'LACİVERT';
    }else if (sayi >= 20 && sayi < 30){
       return 'BEYAZ';
    }else if (sayi >= 30 && sayi < 40){
       return 'SİYAH' ;
    }else if (sayi >= 40 && sayi < 50){
       return 'MAVİ' ;
    }

    
  }
  console.log(color(22));  // BEYAZ
  console.log(color(50));  // GEÇERSİZ SAYI GİRDİNİZ
  console.log(color(44));  // MAVİ
  console.log(color(8)) ;  // SARI 
  console.log(color(16));  // LACİVERT