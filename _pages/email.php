<?php
  $name=$_POST['name'];
  $email=$_POST['email'];
  $msg=$_POST['msg'];
  echo "Done"
  $message="Name : " + $name + "    Email : " + $email + "     Message : " + $msg ;
  mail("umeshmeena141@gmail.com","newmsg",$message);
 ?>
