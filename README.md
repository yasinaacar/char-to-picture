# Char To Picture NEDİR ?

Char to Picture Node JS öğrenme sürecinde geliştirdiğim ilk Rest API projesidir. Bu proje uygulamanızda kullanıcının girdiği isim bilgisinin baş harfine göre varsayılan olarak bir profil fotoğrafı ayarlamanızı sağlar. Örneğin adı "Ahmet" olan bir kullanıcı için profil fotoğrafı varsayılan olarak "A" harfini içeren resim olarak ayarlanır.

## Kullanılan Paketler 
1. #### [BCRYPT](https://www.npmjs.com/package/bcrypt)
   ```npm i bcrypt@5.1.1```
2. #### [COMPRESSION](https://www.npmjs.com/package/compression)
     ```npm i compression@1.7.4```
3. #### [CONFIG](https://www.npmjs.com/package/config)
     ```npm i config@3.3.8```
4. #### [CORS](https://www.npmjs.com/package/cors)
     ```npm i cors@2.8.5```
5. #### [EXPRESS](https://www.npmjs.com/package/express)
     ```npm i express@4.8.12```
6. #### [EXPRESS ASYNC ERRORS](https://www.npmjs.com/package/express-async-errors)
     ```npm i express-async-errors@3.1.1```
7. #### [HELMET](https://www.npmjs.com/package/helmet)
     ```npm i helmet@6.0.0```
8. #### [JOI](https://www.npmjs.com/package/joi)
     ```npm i joi@17.11.0```
9. #### [JSON WEB TOKEN](https://www.npmjs.com/package/jsonwebtoken)
     ```npm i jsonwebtoken@8.5.1```
10. #### [MONGOOSE](https://mongoosejs.com/docs/6.x/index.html)
     ```npm i mongoose@8.3.1```
11. #### [WINSTON](https://www.npmjs.com/package/winston)
     ```npm i winston@3.8.2```
12. #### [WINSTON MONGODB](https://www.npmjs.com/package/winston-mongodb)
     ```npm i winston-mongodb@5.1.0```
13. #### [NODEMON](npm i nodemon)
    ```npm i nodemon```

## Nasıl Kurulur ? How to install ?
*  Projeyi kendinize klonlayın
*  Yukarıda belirttiğim paketleri versiyonlarına göre projeye kurun Bknz: Kullanılan Paketler 
*  Config klasörünün içindeki development.json ve production.js dosylarında "db" kısmındaki bilgileri kendi veri tabanı bilgilerinize göre güncelleyin
*  package.json dosyasına giderek JWTPRIVATEKEY kısmındaki bilgileri kendi bilgilerinize göre güncelleyin.
  JWTPRIVATEKEY : Token oluşturma işlemlerinde kullanılmak üzere rastgele verceğiniz bir değer
* app.js dosyasına giderek 32. satırda bulunan ```await dummyData()``` fonksiyonunu yorum satırından kaldırın ve sonrasında terminale ```npm run dev ``` komutunu yazarak uygulamayı başlatabilirsiniz. Uygulamayı başlattıktan sonra ```await dummyData()``` fonksiyonunu tekrar yorum içine alabilirsiniz.

## API'nin Kullanımı :
API'nin nasıl kullanıldığını göstermek için bir proje geliştirdim ve bunu başka bir repo olarak paylaştım. [Bu linke](https://github.com/yasinaacar/char-to-picture-test-application) tıklayarak projeyi görebilirsiniz. Aşağıdaki videoyu izleyerek API kullanımını inceleyebilirsiniz

https://github.com/yasinaacar/char-to-picture/assets/70544990/9fd1a2a8-159b-4816-ab3d-2827f2c51d27

## Hata ve Öneriler İçin:
[Bana Ulaş](mailto:yasinaacar@outlook.com)
