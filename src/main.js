let html = document.querySelector("#html")
let style = document.querySelector('#style')
let n = 0
let string = `/*你好,我是个前端工程师
*接下来我要展示我的前端功底
*首先我要准备一个div
*/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*接下来我把div变成一个八卦图
*注意看好了
*/
#div1 {
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*再加上两个神秘的小球*/
#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background:radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background:radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`
let string2 = ''
//string = string.replace(/\n/g,"<br>")  页面会出现 < 这个符号 很烦

let step = ()=>{
  setTimeout(()=>{
    
    if (string[n] === "\n"){ 
      //如果是回车,换成换行
      string2 = string2 + "<br>"
    }else if(string[n]===" "){
      //有缩进,换成HTML里面的空格 &nbsp
      string2 = string2 + '&nbsp'
    }else{
      //如果没有回车,直接照搬
      string2 = string2 + string[n]
    }
    
    //string2 += string[n] === "\n" ? "<br>" : string[n]  如果只有两个条件
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0,9999);
    html.scrollTo(0,9999)
    if (n < string.length-1){ 
      n += 1
      step()
    }else {

    }
  },5)
}
step()