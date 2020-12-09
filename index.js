function currency(e){let r=`${e}`;return(r=r.replace(/([0-9]{2})$/g,",$1")).length>6&&(r=r.replace(/([0-9]{3}),([0-9]{2}$)/g,".$1,$2")),"R$ "+r}function bankAccount(e){return(e=e.replace(/\D/g,"")).length>1?`${e.substring(0,e.length-1)}-${e.substring(e.length-1)}`:e}function cep(e){return e.replace(/\D/g,"").replace(/(\d{5})(\d)/,"$1-$2").replace(/(-\d{3})\d+?$/,"$1")}function cnpj(e){return e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{2})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")}function phone(e){return 9===(e=(e=(e=(e=(e=e.toString()).replace(/\D/g,"")).slice(0,11)).replace(/^(\d)/,"($1")).replace(/(.{3})(\d)/,"$1) $2")).length?e=e.replace(/(.{1})$/,"-$1"):10===e.length?e=e.replace(/(.{2})$/,"-$1"):11===e.length?e=e.replace(/(.{3})$/,"-$1"):12===e.length?e=e.replace(/(.{4})$/,"-$1"):e.length>12&&(e=e.replace(/(.{4})$/,"-$1")),e}function cpf(e){return e=(e=(e=(e=(e=e.replace(/\D/g,"")).slice(0,11)).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function onlyNumbers(e){return e=e.replace(/\D/g,"")}function onlyLetters(e){return e=e.replace(/[0-9]/g,"")}function capitalize(e){for(var r=e.toLowerCase().split(" "),n=0;n<r.length;n++)r[n]=r[n].charAt(0).toUpperCase()+r[n].substring(1);return r.join(" ")}function truncateString(e,r){return e.length>r?e.slice(0,r)+"...":e}

module.exports = {
    currency,
    bankAccount,
    cep,
    cnpj,
    phone,
    cpf,
    onlyNumbers,
    onlyLetters,
    capitalize,
    truncateString
}