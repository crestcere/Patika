1-) Sayfa açıldığında "https://jsonplaceholder.typicode.com/posts"  api'sine istek atıp verileri sayfada gösteriyorsunuz.
2-) sayfanın üst kısmında bir header olacak ve bu header içerisinde bir tane search filtresi olacak. Bu search gelen verideki "title" ve "body" içerisinde eşleşen postları göstericek. Boş olursa, tüm veri gelecek.
3-) her post card şeklinde gösterilecek ve bir delete butonu olacak. O butona tıklayınca o post silenecek.
4-) Post'un üzerine tıklanırsa eğer o post id'si ile "https://jsonplaceholder.typicode.com/posts/$%7BpostId%7D/comments" istek atıp, çıkan sonucu modal içerisinde göstericek.
5-) Css önemli, flex veya grid kullanıp responsive tasarlamanızı istiyorum. Ekran küçüldüğünde de sorunsuz bir görüntü olmalı.

Ekstralar: Silerken bir confirm modalı çıkarsa güzel olur. Ayrıca kendini denemek isteyen arkadaşlar, search kısmına debounce koyabilir.
