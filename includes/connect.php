<?php 
    $db_dsn = array( 
        'host' => 'localhost',
        'dbname' => 'db_minicoop',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = '';

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);
        // // var_dump($pdo);
        // echo "you're in! enjoy the show!";
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }