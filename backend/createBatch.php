<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
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
            $sql = "SELECT * FROM batchcreation ";
            $path = explode('/', $_SERVER['REQUEST_URI']);
           // print_r($path);
        if(isset($path[5]) && is_numeric($path[5])) {
            $sql .= " WHERE batchId = :batchId";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':batchId', $path[5]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $sql .= "order by batchId";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
            echo json_encode($users);
            break;

        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO batchcreation(batchName, classDuration, courseName,  trainerName, batchStartingDate, batchEndingDate, sessionSlot) VALUES(:batchName, :classDuration,  :courseName,  :trainerName, :batchStartingDate, :batchEndingDate, :sessionSlot)";
           $stmt = $conn->prepare($sql);
           //$stmt->bindParam(':batchId', $user->batchId);
           $stmt->bindParam(':batchName', $user->batchName);
           $stmt->bindParam(':classDuration', $user->classDuration);
        //    $stmt->bindParam(':courseId', $user->courseId);
           $stmt->bindParam(':courseName', $user->courseName);
        //    $stmt->bindParam(':trainerId', $user->trainerId);
           $stmt->bindParam(':trainerName', $user->trainerName);
           $stmt->bindParam(':batchStartingDate', $user->batchStartingDate);
           $stmt->bindParam(':batchEndingDate', $user->batchEndingDate);
           $stmt->bindParam(':sessionSlot', $user->sessionSlot);
           
           if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record created Successfully.'];
            //$alertMessage="Record created Successfully";
           }
           else{
            $response = ['status' => 0, 'message' => 'Failed to created record.'];
            //$alertMessage="Failed to created record";
           }
           // echo json_encode(['message' => $alertMessage]);
           echo json_encode($response);
           break;

           case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE batchcreation SET batchName=:batchName, classDuration=:classDuration,  courseName=:courseName,trainerName=:trainerName, batchStartingDate=:batchStartingDate, batchEndingDate=:batchEndingDate, sessionSlot=:sessionSlot  WHERE batchId = :batchId ";
            $stmt = $conn->prepare($sql);
           $stmt->bindParam(':batchId', $user->batchId);
           $stmt->bindParam(':batchName', $user->batchName);
           $stmt->bindParam(':classDuration', $user->classDuration);
           $stmt->bindParam(':courseName', $user->courseName);
           $stmt->bindParam(':trainerName', $user->trainerName);
           $stmt->bindParam(':batchStartingDate', $user->batchStartingDate);
           $stmt->bindParam(':batchEndingDate', $user->batchEndingDate);
           $stmt->bindParam(':sessionSlot', $user->sessionSlot);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM batchcreation WHERE BatchId = :BatchId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':BatchId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
    }
?>