
var imageproduct=document.getElementsByClassName("imageproduct");
var productlinks=new Array(18);
var footers=document.getElementsByClassName("footer");
/*LOAD CSS FOOTER.CSS*/
var head=document.getElementsByTagName('HEAD')[0];
var link=document.createElement('link');
link.rel="stylesheet";
link.type="text/css";
link.href="footer.css";
head.appendChild(link);
/*END LOAD CSS FOOTER.CSS*/

productlinks[9]="Tweepsy 90X40cm Baby Foam";
productlinks[10]="Tweepsy Soft Baby Ball Square";
productlinks[11]="IGLU Brand Ball Pool";
productlinks[12]="Toddler Playtime Corner Climber";
productlinks[13]="Climb and Crawl Activity Play Set";
productlinks[14]="Click N' Play Value Pack of 400 Crush Proof";
productlinks[15]="Soft Foam Balls - Pack of 12";
productlinks[16]="Fence Children's Playground";
productlinks[17]="Milliard Ball Pit / Professional Quality";
productlinks[18]=" Corral Ball Pool, 53 by 53 by 12";
productlinks[19]="Pit Balls Pack of 50";
productlinks[20]="UTEX 3 in 1 Pop Up Play Tent with Tunnel";
productlinks[21]="Baby Joy 4-in-1 Slide for Kids";
productlinks[22]="4 in 1 Climber Slide Playset";
productlinks[23]="Toddler Climber and Swing Set";
productlinks[24]="Step2 Sports-Tastic Activity playset";
productlinks[25]="Soft Foam Toddler Stairs and Ramp";
productlinks[26]="Soft Memory Foam play and sleep pad";
productlinks[27]="Learning Resources";
productlinks[28]="Little Tikes Rocking Horse Blue";
productlinks[29]="Soft Foam Wall Climber";
productlinks[30]="SURPCOS Climb and Crawl Activity Play Set";
productlinks[31]="SoftZone Corner Double Tunnel Maze";
productlinks[32]="Children's Factory Lollipop Play Yard";

var prices=new Array(17);
prices[9]="$149<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[10]="$125<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>00</span>";
prices[11]="$325<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>56</span>";
prices[12]="$119<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[13]="$129<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[14]="$45<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[15]="$11<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>97</span>";
prices[16]="$299<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[17]="$99<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>49</span>";
prices[18]="$491<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>66</span>";
prices[19]="$12<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[20]="$34<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>59</span>";
prices[21]="$119<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[22]="$62<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>39</span>";
prices[23]="$159<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[24]="$50<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>34</span>";
prices[25]="$79<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[26]="$46<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>92</span>";
prices[27]="$19<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>95</span>";
prices[28]="$44<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>95</span>";
prices[29]="$229<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[30]="$125<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[31]="$379<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>99</span>";
prices[32]="$651<span style='font-size:15px;color:#c5c9c6;position:relative;bottom:3px;'>11</span>";

var url=new Array(17);
url[9]="tweepsy-sand.html";
url[10]="tweepsy-grey.html";
url[11]="iglu.html";
url[12]="toddler-play.html";
url[13]="toddler-play1.html";
url[14]="www.google.com";
url[15]="www.google.com";
url[16]="www.google.com";
url[17]="www.google.com";
url[18]="www.google.com";
url[19]="www.google.com";
url[20]="www.google.com";
url[21]="www.google.com";
url[22]="www.google.com";
url[23]="www.google.com";
url[24]="www.google.com";
url[25]="www.google.com";
url[26]="www.google.com";
url[27]="www.google.com";
url[28]="www.google.com";
url[29]="www.google.com";
url[30]="www.google.com";
url[31]="www.google.com";
url[32]="www.google.com";
var counter=0;
var size=productlinks.length-9;

window.addEventListener("scroll",function(){
	console.log("Scrolled:"+document.documentElement.scrollTop);
	console.log("ClientHeight:"+document.documentElement.clientHeight);
	console.log("ScrollHeight:"+document.documentElement.scrollHeight);
if((document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight-50 ) && ((counter+8)<=size)){
	
var articles=document.createElement("div");
articles.classList.add("All_products");
document.body.appendChild(articles);
var boxes=document.createElement("div");
boxes.classList.add("boxes");
articles.appendChild(boxes);
for(var i=9;i<=16;i++){
var imagebox=document.createElement("div");
imagebox.classList.add("imagebox");

var imageloader=document.createElement("img");
imageloader.setAttribute("src","product"+(i+counter)+".webp");
imageloader.setAttribute("class","imageproduct");
imagebox.appendChild(imageloader);
var productlink=document.createElement("a");
var linktext=document.createTextNode(productlinks[i+counter]);
productlink.appendChild(linktext);
productlink.href=url[i];

productlink.style.display="block";
productlink.style.textAlign="center";
productlink.classList.add("prodcuttext");
imagebox.appendChild(productlink);
var span=document.createElement("span");
span.innerHTML=prices[i+counter];
span.setAttribute("id","pricebig");
imagebox.appendChild(span);
var hearte=document.createElement("a");
hearte.innerHTML="&#10084;";
hearte.classList.add("heart");
imagebox.appendChild(hearte);
boxes.appendChild(imagebox);
}
counter+=8;
}
else{
if((counter+8)>size && (typeof(footers[0])=='undefined')){


/*CREATE FOOTER AT THE END OF THE PAGE*/
var footer=document.createElement("div");
footer.classList.add("footer");
document.body.appendChild(footer);
/*END CREATE FOOTER AT THE END OF PAGE*/

/*COPYRIGHT TEXT AT THE BOOTOM OF FOOTER*/
var copyright=document.createElement("span");
copyright.innerHTML="<font color='#fff'>Copyright © 2020  WE FLY TODDLER</font>";

copyright.classList.add("copy");
footer.appendChild(copyright);
/*END COPYRIGHT TEXT AT THE BOOTOM OF FOOTER*/

/*DESCRIPTION TEXT OF INPUT EMAIL BOX*/
var description=document.createElement("span");
description.innerHTML="Sign up to get exclusive offers and updates";
description.setAttribute("id","description");
footer.appendChild(description);
/*END DESCRIPTION TEXT OF INPUT EMAIL BOX*/

/*SUBSCRIBE EMAIL INPUT BOX*/
var subscribebox=document.createElement("div");
subscribebox.classList.add("subscribebox");
footer.appendChild(subscribebox);
var subscribe=document.createElement("input");
subscribe.classList.add("subscribelink");
subscribe.setAttribute("placeholder","ENTER EMAIL ADRESS");
subscribebox.appendChild(subscribe);
var submitb=document.createElement("input");
submitb.setAttribute("type","submit");
submitb.classList.add("submitb");
submitb.value="Sign up";
subscribebox.appendChild(submitb);
/*END SUBSCRIBE EMAIL INPUT BOX*/

/*BOTTOM MENU*/
var bottom_menu=document.createElement("div");
bottom_menu.classList.add("bottom_menu");
footer.appendChild(bottom_menu);

var contact=document.createElement("a");
var contacttext=document.createTextNode("Contact");
contact.appendChild(contacttext);
contact.setAttribute("href","");
contact.style.textDecoration="underline";
var faq=document.createElement("a");
faq.setAttribute("href","");
var faqtext=document.createTextNode("FAQ");
faq.appendChild(faqtext);
var about=document.createElement("a");
var abouttext=document.createTextNode("About");
about.appendChild(abouttext);
about.setAttribute("href","");
var privacy=document.createElement("a");
privacy.setAttribute("href","");
var privacytext=document.createTextNode("Privacy Policy");
var instagram=document.createElement("img");
instagram.setAttribute("src","instagram1.jpg");
instagram.style.marginRight="3%";
var facebook=document.createElement("img");
facebook.setAttribute("src","facebook2.jpg");
facebook.style.marginRight="3%";
var youtube=document.createElement("img");
youtube.setAttribute("src","youtube.jpg");
instagram.classList.add("socialmedia");
facebook.classList.add("socialmedia");
youtube.classList.add("socialmedia");

privacy.appendChild(privacytext);
bottom_menu.appendChild(contact);
bottom_menu.appendChild(faq);
bottom_menu.appendChild(about);
bottom_menu.appendChild(privacy);
bottom_menu.appendChild(instagram);
bottom_menu.appendChild(facebook);
bottom_menu.appendChild(youtube);
var socialmedia=document.getElementsByClassName("socialmedia");
socialmedia[0].addEventListener('mouseover',function(){socialmedia[0].src='instagram2.jpg';});
socialmedia[0].addEventListener('mouseout',function(){socialmedia[0].src='instagram1.jpg';});
socialmedia[1].addEventListener('mouseover',function(){socialmedia[1].src='facebook2.jpg';});
socialmedia[1].addEventListener('mouseout',function(){socialmedia[1].src='facebook3.jpg';});
socialmedia[2].addEventListener('mouseover',function(){socialmedia[2].src='youtube1.jpg';});
socialmedia[2].addEventListener('mouseout',function(){socialmedia[2].src='youtube.jpg';});
/*END BOTTOM MENU*/

}
}
var hearts=document.getElementsByClassName("heart");
var value="";
var first=new Array(32);
for(let i=0;i<first.length;i++){
	first[i]=0;
}

for(let f=0;f<hearts.length;f++) {

hearts[f].onclick=function(){if(navigator.userAgent.indexOf("Edge")>-1){hearts[f].style.fontSize="23px";hearts[f].style.bottom="20px";} else {hearts[f].style.color="red";}setCookie(f,"wishlist");};	
	
   }
   
   function setCookie(f,name){
    
     if(getCookie("wishlist")==""){
	 var d=new Date();
     d.setTime(d.getTime() + 365*24*60*60*1000);	 
	 var expires="expires="+d.toUTCString();
     document.cookie=name+"="+f+";"+expires+";path=/";
	 }
	 else{
		var value=getCookie("wishlist");
		value=value+","+f;
	 var d=new Date();
     d.setTime(d.getTime() + 365*24*60*60*1000);	 
	 var expires="expires="+d.toUTCString();
     document.cookie=name+"="+value+";"+expires+";path=/";		
	 }
   }
   
   function getCookie(name){
	  var decodedCookie=decodeURIComponent(document.cookie);
	 var ca=decodedCookie.split(';');  
   var c=ca[0];
   
   if(c.indexOf(name)==0){
   var t;
   t=c.substring(name.length+1,c.length);
   console.log(t);
   return t;
   
   }
   else {console.log("Not found");  return "";}
   }	
})



//COOKIE





