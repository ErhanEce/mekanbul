var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', 
    { 
        "baslik" : 'Anasayfa',
        "sayfaBaslik" : {
            "siteAd" : "MekanBul",
            "slogan" : "Civardaki Mekanları Keşfet!"
        },
        "mekanlar" : [
            {
                "ad" : "Starbucks",
                "puan" : "4",
                "adres" : "Centrum Garden AVM",
                "imkanlar" : ["Kahve", "Çay", "Pasta"],
                "mesafe" : "8 km"
            },
            {
                "ad" : "Gloria Kafe",
                "puan" : "3",
                "adres" : "Sdü Doğu Kampüsü",
                "imkanlar" : ["Kahve", "Çay", "Kek"],
                "mesafe" : "4 km"
            }
        ]
    });
};

const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi', 
    { 
        "baslik" : 'Mekan Bilgisi',
        "mekanBaslik" : "Starbucks",
        "mekanDetay" : {
            "ad" : "Starbucks",
            "puan" : "4",
            "adres" : "Centrum Garden AVM",
            "saatler" : [
                {
                    "gunler":"Pazartesi-Cuma",
                    "acilis":"8:00",
                    "kapanis":"23:00",
                    "kapali": false
                },
                {
                    "gunler":"Cumartesi-Pazar",
                    "acilis":"9:00",
                    "kapanis":"22:00",
                    "kapali": false
                },
                {
                    "gunler":"Pazar",
                    "kapali": true
                }
            ],
            "imkanlar" : ["Dünya Kahveleri", "Kekler", "Pastalar"],
            "koordinatlar" : {
                "enlem" : "37.78",
                "boylam" : "30.56"
            },
            "yorumlar" : [
                {
                    "yorumYapan" : "Erhan",
                    "yorumMetni" : "Ortalama",
                    "tarih" : "20 Ekim 2022",
                    "puan" : "3"
                }
            ]
        }
    });
};

const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
};

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
