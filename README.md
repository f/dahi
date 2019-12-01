# 🧠 dahi.js

Dahi `de`/`-de` farkını ayıran NLP projesidir.

## Kullanım

```js
const dahi = require('dahi')

dahi.fix('Bende sizinle geleceğim') # => 'Ben de sizinle geleceğim'
```

## Katkı ve Test

Projeye katkı yaparken lütfen tüm testlerden geçtiğini test edin.

Testi çalıştırmak için:

```shell script
npm test
```

komutunu çalşıtırın. Aşağıdaki şekilde çıktı alacaksınız.

```shell script
"Bende geleceğim" değerinin "Ben de geleceğim" olması bekleniyor.
"Bende seni seviyorum" değerinin "Ben de seni seviyorum" olması bekleniyor.
"Sanada iyi geceler" değerinin "Sana da iyi geceler" olması bekleniyor.
"Gelipte gitti" değerinin "Gelip de gitti" olması bekleniyor.
"Raphael Benitez" değerinin "Raphael Benitez" olması bekleniyor.
"Memnuniyetin bizide çok mutlu etti." değerinin "Memnuniyetin bizi de çok mutlu etti." olması bekleniyor.
"Seninde yüreğin yansın" değerinin "Senin de yüreğin yansın" olması bekleniyor.
"Böyle yapıpta nereye varmak istiyorsun" değerinin "Böyle yapıp da nereye varmak istiyorsun" olması bekleniyor.
```

## Yanlış Pozitivite Oranı

Program mevcut testler **%20** oranında yanlış pozitivite çıktı üretir. Aşağıdaki örnekler buna dahildir.

```shell script
"Bende toplandık" değerinin "Ben de toplandık" olması bekleniyor.
"Benim evde toplandık" değerinin "Benim ev de toplandık" olması bekleniyor.
```

# Lisans
MIT
