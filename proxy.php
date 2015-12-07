<?php 

$response = http_get($_POST['address'], array("timeout"=>1), $info);
print_r($info);
?>