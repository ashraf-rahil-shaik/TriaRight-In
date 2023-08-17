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
             $sql = "SELECT * FROM streamcreation";
             $path = explode('/', $_SERVER['REQUEST_URI']);
             
              if(isset($path[6]) && is_numeric($path[6])) {
                  $sql .= " WHERE streamId = :streamId";
                  $stmt = $conn->prepare($sql);
                  $stmt->bindParam(':streamId', $path[6]);
                  $stmt->execute();
                  $users = $stmt->fetch(PDO::FETCH_ASSOC);
              } else {
                 $stmt = $conn->prepare($sql);
                 $stmt->execute();
                 $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
             }
            echo json_encode($users);
            break;

        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            //$sql = "INSERT INTO streamcreation(streamId, streamName, streamLocation, created_at) VALUES(null, :streamName, :streamLocation, :created_at)";
            $sql = "INSERT INTO streamcreation(streamLocation,streamName,created_at) VALUES(:streamLocation,:streamName,:created_at)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
           //$stmt->bindParam(':streamName', $user->name);
            $stmt->bindParam(':streamName', $user->streamName);
            $stmt->bindParam(':streamLocation', $user->streamLocation);
            $stmt->bindParam(':created_at', $created_at);
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
            $sql = "UPDATE streamcreation SET streamName= :streamName, streamLocation =:streamLocation, updated_at =:updated_at WHERE streamId = :streamId";
            $stmt = $conn->prepare($sql);
            $updated_at = date('Y-m-d');
           // $created_at = date('Y-m-d');
            $stmt->bindParam(':streamId', $user->streamId);
            $stmt->bindParam(':streamName', $user->streamName);
            $stmt->bindParam(':streamLocation', $user->streamLocation);
            $stmt->bindParam(':updated_at', $updated_at);
            //$stmt->bindParam(':created_at', $created_at);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM streamcreation WHERE streamId = :streamId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':streamId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
   }
   ?>
