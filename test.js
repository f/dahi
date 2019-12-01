const dahi = require('./')
const assert = require('assert')

function test(actual, expected) {
  try {
    console.log(`"${actual}" değerinin "${expected}" olması bekleniyor.`)
    const fixed = dahi.fix(actual)
    assert(expected === fixed, `Beklenen: ${expected}, Asıl: ${fixed}`)
  } catch (e) {
    console.error(e.message)
  }
}

test('Bende geleceğim', 'Ben de geleceğim')
test('Bende seni seviyorum', 'Ben de seni seviyorum')
test('Sanada iyi geceler', 'Sana da iyi geceler')
test('Gelipte gitti', 'Gelip de gitti')
test('Raphael Benitez', 'Raphael Benitez')
test('Bende toplandık', 'Ben de toplandık') // false pos
test('Benim evde toplandık', 'Benim ev de toplandık') // false pos
test('Memnuniyetin bizide çok mutlu etti.', 'Memnuniyetin bizi de çok mutlu etti.')
test('Seninde yüreğin yansın', 'Senin de yüreğin yansın')
test('Böyle yapıpta nereye varmak istiyorsun', 'Böyle yapıp da nereye varmak istiyorsun')