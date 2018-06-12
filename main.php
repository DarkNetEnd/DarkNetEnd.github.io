<!--<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!--//#############################################-->
<!--//# Cкрипт из библиотеки SEARCHER             #-->
<!--//# Библиотека Javascript насчитывает         #-->
<!--//# более 3500 скриптов и динамических стилей #-->
<!--//# Библиотека создана в 1997 году            #-->
<!--//#                        #-->
<!--//#############################################-->
<!--//#                  SE@RCHER                 #-->
<!--//#############################################-->
<!--<title>Форма в которой текст автоматически набирается при нажатии на любые клавиши</title>
<META content="text/html; charset=windows-1251" http-equiv=Content-Type>
<SCRIPT>
var val=""
var counter="0"
themessage=new Array()
themessage[0]="Жми не жми а здесь будет мой текст"
themessage[1]="А теперь будет этот текст!"
themessage[2]="Или вот такой Можно добавить еще сообщений."

x=Math.floor(Math.random()*themessage.length)

function changer(){
if(counter>=themessage[x].length){return false}
else{
val+=themessage[x].charAt(counter)
document.myform.mytext.value=val
counter++
return false
}
}
function resetit(){
alert("Спасибо за работу. Можно посмотреть таким же образом другой текст")
document.myform.mytext.value=""
counter="0"
val=""
x=Math.floor(Math.random()*themessage.length)
}

</SCRIPT>

<DIV align=left>
<TABLE height=182 cellSpacing=0 cellPadding=0 width=542 border=0>
  <TBODY>
  <TR>
    <TD vAlign=top width=542 height=182><FONT face=Arial>
      <FORM name=myform>
      <P><SMALL>Type in here:</SMALL></FONT></P>
      <P><FONT face=Arial><TEXTAREA onkeypress="return changer()" name=mytext rows=10 wrap=virtual cols=40>-->