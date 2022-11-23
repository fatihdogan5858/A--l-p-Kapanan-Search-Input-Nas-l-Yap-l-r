const open = document.getElementById('open');/*open ı çağırıyoruz*/
const close = document.getElementById('close');/*close ı çağırıyoruz*/
const container = document.querySelector('.container');/*container ı çağırıyoruz*/


open.addEventListener("click", ()=> {  /*open içine etkinlik ekliyoruz click olunca yapacağı işlemi tanımlıyoruz*/
  container.classList.add("show-nav")/**konteynır içindeki classliste eklesin */  /*neyi eklesin show-nav ı*/

})
close.addEventListener("click", () => { /**close de click olunca */
    container.classList.remove("show-nav")/**container içindeki classliste ulaş ve içindeki show-nav ı kaldır */
    

})