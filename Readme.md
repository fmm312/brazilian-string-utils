## JavaScript library to convert string to different Brazilian formats

### Install

`npm install brazilian-string-utils` <br />
`yarn add brazilian-string-utils`

### Functions

#### currency

`currency(0000000000)`
<span style="color:gray">// output R$ 00,000,000,00</span>

#### bankAccount

`bankAccount(0000000000)`
<span style="color:gray">// output 0000000000-0</span>

#### cep

`cep(0000000000)`
<span style="color:gray">// output 00000-000</span>

#### cnpj

`cnpj(00000000000000)`
<span style="color:gray">// output 00.000.000/0000-00</span>

#### phone

`phone(0000000000)`
<span style="color:gray">// output (00)00000-0000</span>

#### cpf

`cpf(000000000000)`
<span style="color:gray">// output 000.000.000-00</span>

#### onlyNumbers

`onlyNumbers(a0b0c0)`
<span style="color:gray">// output 000</span>

#### onlyLetters

`onlyLetters(a0b0c0)`
<span style="color:gray">// output abc</span>

#### capitalize

`capitalize(abc)`
<span style="color:gray">// output Abc</span>

#### truncate

`truncate(0000000000, 3)`
<span style="color:gray">// output 000...</span>
