<?php
    include("connect.php");
    $result = array();


function getAllCars($conn) {

    $query = "SELECT * FROM tbl_minicoop";

    $runQuery = $conn->query($query);

    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)){
        $result[] = $row;
    }

    echo (json_encode($result));

}

function getSingleCar($conn, $id) {

    $query = "SELECT * FROM tbl_minicoop WHERE id=" . $id . "";

    $runQuery = $conn->query($query);

    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)){
        $result[] = $row;
    }

    echo (json_encode($result));

}