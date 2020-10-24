(function(){
 var fileBtn = document.getElementById('file');
 var showName = document.getElementById('showFileName');
 var errorTip = document.getElementById('fileerrorTip');
 var fileImg = document.getElementById('file_img');
 
 fileBtn.onchange = function(){
 try{
 var fileName = this.files[0].name;
 // 限制图片上传类型
 if(fileName.indexOf("jpg") != -1 || fileName.indexOf("png") != -1) {
 errorTip.innerHTML = "";
 showName.innerHTML = fileName;
 //显示预览图片
 var file = this.files[0];
 var reader = new FileReader();
 reader.readAsDataURL(file);
 reader.onloadend = function(e) {
 fileImg.src = e.target.result;
 fileImg.style["display"] = "unset";
 };
 } else {
 showName.innerHTML = "";
 errorTip.innerHTML = "您未上传文件，或者您上传文件类型有误！";
 return false
 }
 }catch(e){}
 }
})()

var motai=document.getElementById('mo')
	 var moimg=document.getElementById("moimg")
	 var file_img=document.getElementById("file_img")
	 var caption=document.getElementById("caption")
	 file_img.onclick=function(){
	  motai.style.display="block"
	  moimg.src=this.src
	  caption.innerHTML=this.alt
	 }
	 var span=document.getElementById("close");
	 span.onclick=function(){
	  motai.style.display="none";
	 }
	 
function file(file) {
	 var prevDiv = document.getElementById('file');
	 if (file.files && file.files[0]) {
	  var reader = new FileReader();
	  reader.onload = function(evt) {
	   prevDiv.innerHTML = '<img src="' + evt.target.result + '" />';
	  }
	  reader.readAsDataURL(file.files[0]);
	 } else {
	  prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
	 }
	}
