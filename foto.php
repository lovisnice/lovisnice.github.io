<html>
<head>
<meta charset="UTF-8">
  <title>Сайт web-студії "Web-DECO"</title>
  <style>
    .big{ transform: scale(2);}
  </style>
  <script src = "js/clock.js"></script>
 <style> .shadowtext{
   text-shadow : 1px 3px 2px white,0 0 1em red;
   color: #210042;
   font-size : 2em; 
   }
    </style>

<script type ="text/javascript">
  function send()
  {
    var valid = true;
    var elems = document.forms[0].elements;
    for(var i = 0;i<document.forms[0].length;i++)
    {
      if(elems[i].getAttribute('type') == 'text'||
      elems[i].getAttribute('type') == 'password'||
      elems[i].getAttribute('type') == 'email')
      {
        if(elems[i].value == '')
        {
          elems[i].style.border = '2px solid red';
          valid = false;
        }
      }
    }
    if(!valid)
    {
      alert('Заповніть всі поля')
      return false;
    }
  }
</script>

<script>
  window.onload = function()
  {
    setInterval(clockPainting,1000);
  }
</script>
</head background="images/bg.jpg">

<body>
<table border="1" align="center" cellpadding="10">
<tr>
<td background = "images/bg-3.jpg" colspan="2" height="150" align="right">(<font size="5"><h1>Сайт web-студії "Web-DECO"</h1></font>)</td>
</tr>
<tr>
<td colspan="2"><font size="4"><b>
  <a href="#">Головна</a>&nbsp;&nbsp;
  <a href="#">Фотогалерея</a>&nbsp;&nbsp;
  <a href="#">Телефони</a>&nbsp; &nbsp;
  <a href="#">Статистика</a>&nbsp; &nbsp;
  <a href="#">Зареєстровані</a></b>
  </font></td>
</tr>
<tr>
<td width="30%" valign="top" >
  <center><canvas id = "canvas" height = "120" width = "120"></canvas></center>
  <hr>
<font size ="5" color = "navy">
  <h2>
    Новини
  </h2>
</font>
<ul>
  <li><a href = "#"> Сайт будывельної компанії </a></li>
  <li><a href = "#"> Сайт ТМ "Новашкола" </a></li>
  <li><a href = "#"> Редизайн сайту classno.com.ua </a></li>
  <li><a href = "#"> Розробка CMS для Metro Cash&Carry</a></li>
  <li><a href = "#"> Сайт-візитка дизайнера інтерфейсів </a></li>
  <p align = "right"><a href = "#"> ... </a></p>
</ul>

<hr>
<H1 align="center"><font color="green">Реєстрація</font></H1>
<form action="forma.php" method="post" onsubmit="return send();">
<TABLE align="center">
<TR>
<TD><font color="green">Прізвище</font>: </TD>
<TD><input type="text" size="10" maxlength="20" name="name2"> </TD>
</TR>

<TR>
<TD><font color="green">Ім'я</font> : </TD>
<TD><input type="text" size="10" maxlength="20" name="name1"> </TD>
</TR>
<TR>
<TD><font color="green">Бажаний Login</font> : </TD>
<TD><input type="text" size="10" maxlength="20" name="nic1"> </TD>
</TR>
<TR>
<TD><font color="green">E-Mail</font> : </TD>
<TD><input type="email" size="10" maxlength="20" name="email"></TD>
</TR>
<TR>
<TD><font color="green">Пароль</font> : </TD>
<TD><input type="password" size="10" maxlength="20" name="password"></TD>
</TR>
</TABLE>
.
<p align="center">
<input type="submit" value="Зареєструватись" >
<input type="reset" value="Очистити">
</p>
</form>
<hr>

<h1 align ="center"></h1>
<?php
function excess($files)
{
  $result =array();
  for($i = 0;$i < count($files);$i++)
  {
    if($files[$i] != "." && $files[$i] != "..") $result[] = $files[$i];
  }
  return $result;
}
$dir = "pic";
$files = scandir($dir);
$files = excess($files);
?>
<?php
for($i =0;$i < count($files);$i++)
{
?>
<img src="<?=$dir."/".$files[$i]?>" alt = "" width = "350"
height = "250" hspace="5" vspace = "7" border = "5" onclick = "this.classList.toggle('big')"/>
<?php
if(($i + 1) % 4 == 0)
{
  ?> <br/> <?php
}
?>
<?php }?>
</td>
</tr>
</table>


</body>
</html>
