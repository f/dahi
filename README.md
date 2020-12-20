# 🧠 dahi.js

Dahi `de`/`-de` farkını ve soru eklerinin yazılışını ayıran NLP projesidir.

**⚠️ Bu proje şaka amaçlıdır, kullanmayın** ⚠️

## Yükleme

```shell script
npm install dahijs
# ya da
yarn add dahijs
```

## Kullanım

```js
const dahi = require('dahijs')

dahi.fix('Bende sizinle geleceğimmi') # => 'Ben de sizinle geleceğim mi'
```

## Katkı ve Test

Projeye katkı yaparken lütfen tüm testlerden geçtiğini test edin.

Testi çalıştırmak için:

```shell script
npm test
```

komutunu çalşıtırın. Aşağıdaki şekilde çıktı alacaksınız.

```shell script
"Bende gelecekmiyim" değerinin "Ben de gelecek miyim" olması bekleniyor.
"Bende seni seviyorummu" değerinin "Ben de seni seviyorum mu" olması bekleniyor.
"Sanada iyi geceler" değerinin "Sana da iyi geceler" olması bekleniyor.
"Gelipte gittimi" değerinin "Gelip de gitti mi" olması bekleniyor.
"Raphael Benitezdemi" değerinin "Raphael Benitez de mi" olması bekleniyor.
"Memnuniyetin bizide çok mutlu etti." değerinin "Memnuniyetin bizi de çok mutlu etti." olması bekleniyor.
"Seninde yüreğin yansın" değerinin "Senin de yüreğin yansın" olması bekleniyor.
"Böyle yapıpta nereye varmak istiyorsun" değerinin "Böyle yapıp da nereye varmak istiyorsun" olması bekleniyor.
```

## Yanlış Pozitivite Oranı

Program mevcut testler **%20** oranında yanlış pozitivite çıktı üretir. Aşağıdaki örnekler buna dahildir.

```shell script
"Bende toplanıp şalgamı içtik" değerinin "Ben de toplanıp şalga mı içtik" olması bekleniyor.
"Benim evde toplandık" değerinin "Benim ev de toplandık" olması bekleniyor.
```

# Lisans
MIT
