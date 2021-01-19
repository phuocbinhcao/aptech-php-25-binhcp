var nam = {
    ho : 'cao',
    ten: 'binh',


la: function(){
    console.log(this.ho + this.ten + "");
    return{
        hong : 'dau roi',
    }
}
} var a = nam.la().hong;