<?php
          // include_once("home.html");
          $name = $_POST["full_name"];
          $mobile = $_POST["mobile"];
          $email = $_POST["email"];
          $message = $_POST["message"];
          $messageFinal = 'Name: '.$name ."\n".'Number: '.$mobile ."\n"."\n".'Message: '.$message;
          mail("suchitraayappa@gmail.com", "Mail from website", $messageFinal);
          $respose = "success";
          json_encode($response);
        ?>