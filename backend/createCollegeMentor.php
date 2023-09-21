<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    //echo"Testing";

    include 'DbConnect.php';
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    //var_dump($conn);

    $user = file_get_contents('php://input');
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case "GET":
            $sql = "SELECT * FROM collegementorcreation";
            $path = explode('/', $_SERVER['REQUEST_URI']);
           // print_r($path);
        if(isset($path[4]) && is_numeric($path[4])) {
            $sql .= " WHERE mentorId = :mentorId";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':mentorId', $path[4]);
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
            $sql = "INSERT INTO collegementorcreation(collegeName, mentorName, mentorPhoneNo, designation, department, professionalMailId) VALUES(:collegeName, :mentorName, :mentorPhoneNo, :designation, :department, :professionalMailId)";
           $stmt = $conn->prepare($sql);
           //$stmt->bindParam(':mentorId', $user->mentorId);
           $stmt->bindParam(':collegeName', $user->collegeName);
           $stmt->bindParam(':mentorName', $user->mentorName);
           $stmt->bindParam(':mentorPhoneNo', $user->phoneNumber);
           $stmt->bindParam(':designation', $user->designation);
           $stmt->bindParam(':department', $user-> department);
           $stmt->bindParam(':professionalMailId', $user->professionalMailId);
           
           
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
            $sql = "UPDATE collegementorcreation SET collegeName=:collegeName, mentorName=:mentorName, mentorPhoneNo= :mentorPhoneNo, designation= :designation, department= :department, professionalMailId= :professionalMailId WHERE mentorId = :mentorId";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':mentorId', $user->mentorId);
           $stmt->bindParam(':collegeName', $user->collegeName);
           $stmt->bindParam(':mentorName', $user->mentorName);
           $stmt->bindParam(':mentorPhoneNo', $user->mentorPhoneNo);
           $stmt->bindParam(':designation', $user->designation);
           $stmt->bindParam(':department', $user->department);
           $stmt->bindParam(':professionalMailId', $user->professionalMailId);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM collegementorcreation WHERE mentorId = :mentorId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':mentorId', $path[4]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
    }
?>