var mongoose = require("mongoose");
require("./mekansema");
var dbURI = "mongodb+srv://erhan:1693@mekanbul.oep33aa.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);

function kapat(msg, callback){
    mongoose.connection.close(function() {
        console.log(msg);
        callback;
    });
}

process.on("SIGINT", function() {
    kapat("Uygulama Kapatıldı!", function() {
        process.exit(0);
    });
});

mongoose.connection.on("connected", function() {
    console.log(dbURI + " adresindeki veritabanına bağlandı! \n")
});

mongoose.connection.on("disconnected", function() {
    console.log(dbURI + " adresindeki veritabanı bağlantısı koptu! \n")
});

mongoose.connection.on("error", function() {
    console.log("Bağlantı Hatası!")
});
