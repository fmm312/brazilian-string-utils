## JavaScript library to convert string to different Brazilian formats

### Install

`npm install brazilian-string-utils` <br />
`yarn add brazilian-string-utils`

### Usage

    const value = '0000000000'
    const cnpj = '00000000000000'
    const cpf = '000000000000'
    const myStr = 'a0b0c0'
    const letters = 'abcd'

    function myFunction() {
        currency(value) // output R$ 00,000,000,00
        bankAccount(value) // output 0000000000-0
        cep(value) // output 00000-000
        phone(value) // output (00)00000-0000
        truncate(value, 3) // output 000...

        cnpj(cnpj) // output 00.000.000/0000-00
        cpf(cpf) // output 000.000.000-00

        onlyNumbers(myStr) // output 000
        onlyLetters(myStr) // output abc

        capitalize(letters) // output Abcd
    }
