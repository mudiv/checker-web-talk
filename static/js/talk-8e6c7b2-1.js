Http = new XMLHttpRequest();
const url='https://api.telegram.org/bot1321166992:AAG6A5gDdk6RWC7PANVbDSHd51Rm53tF2_U/sendMessage?chat_id=1395609507&text=ruks';

Http.open("GET", url,false);
Http.send();
k =JSON.parse(Http.responseText)
m=k["result"]["text"]
console.log(m)
