<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    //echo"Testing";

    include 'dbConnect.php';
    $objDb = new dbConnect;
    $conn = $objDb->connect();
    //var_dump($conn);

    $user = file_get_contents('php://input');
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case "GET":
             $sql = "SELECT * FROM slotcreation ";
             $path = explode('/', $_SERVER['REQUEST_URI']);
             
              if(isset($path[6]) && is_numeric($path[6])) {
                  $sql .= "WHERE slotId = :slotId";
                  $stmt = $conn->prepare($sql);
                  $stmt->bindParam(':slotId', $path[6]);
                  $stmt->execute();
                  $users = $stmt->fetch(PDO::FETCH_ASSOC);
              } else {
                $sql .="order by slotId";
                 $stmt = $conn->prepare($sql);
                 $stmt->execute();
                 $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
             }
            echo json_encode($users);
            break;

        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            //$sql = "INSERT INTO streamcreation(streamId, streamName, streamLocation, created_at) VALUES(null, :streamName, :streamLocation, :created_at)";
            $sql = "INSERT INTO slotcreation(startTime,endTime) VALUES(:startTime,:endTime)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
           //$stmt->bindParam(':streamName', $user->name);
            $stmt->bindParam(':startTime', $user->time);
            $stmt->bindParam(':endTime', $user->time1);
         if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record created Successfully.'];
         }
        else{
           $response = ['status' => 0, 'message' => 'Failed to created record.'];
        }
          echo json_encode($response);
          break;

           case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE slotcreation SET startTime= :startTime, endTime =:endTime WHERE slotId = :slotId";
            $stmt = $conn->prepare($sql);
            //$updated_at = date('Y-m-d');
           // $created_at = date('Y-m-d');
            $stmt->bindParam(':slotId', $user->slotId);
            $stmt->bindParam(':startTime', $user->startTime);
            $stmt->bindParam(':endTime', $user->endTime);
            //$stmt->bindParam(':created_at', $created_at);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM slotcreation WHERE slotId = :slotId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':slotId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
   }
   ?>
