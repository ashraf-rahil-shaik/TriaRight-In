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
            $sql = "SELECT * FROM trainercreation ";
            $path = explode('/', $_SERVER['REQUEST_URI']);
             
              if(isset($path[6]) && is_numeric($path[6])) {
                  $sql .= " WHERE trainerId = :trainerId";
                  $stmt = $conn->prepare($sql);
                  $stmt->bindParam(':trainerId', $path[6]);
                  $stmt->execute();
                  $users = $stmt->fetch(PDO::FETCH_ASSOC);
              } else {
            $sql .="order by trainerId";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
              }
            echo json_encode($users);
            break;

        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            if($user->password === $user->confirmPassword)
            { 
            $sql = "INSERT INTO trainercreation(trainerName,personalEmail,phNumber,Gender,DateOfBirth,DateOfJoining,aadharNumber,panNumber,aadharImage,panImage,qualification,experience,previousOrganization,designation,trainerDocuments) VALUES(:trainerName,:personalEmail,:phNumber,:Gender,:DateOfBirth,:DateOfJoining,:aadharNumber,:panNumber,:aadharImage,:panImage,:qualification,:experience,:previousOrganization,:designation,:trainerDocuments)";
            $stmt = $conn->prepare($sql);
           //$stmt->bindParam(':streamName', $user->name);
            $stmt->bindParam(':trainerName', $user->trainerName);
            $stmt->bindParam(':personalEmail', $user->personalEmail);
            $stmt->bindParam(':phNumber', $user->personalPhone);
            $stmt->bindParam(':Gender', $user->gender);
            $stmt->bindParam(':DateOfBirth', $user-> dob);
            $stmt->bindParam(':DateOfJoining', $user-> doj);
            $stmt->bindParam(':aadharNumber', $user->aadharNumber);
            $stmt->bindParam(':panNumber', $user->panNumber);
            $stmt->bindParam(':aadharImage', $user->aadharPhoto);
            $stmt->bindParam(':panImage', $user->panPhoto);
            $stmt->bindParam(':qualification', $user->qualification);
            $stmt->bindParam(':experience', $user->hasExperience);
            $stmt->bindParam(':previousOrganization', $user->prevOrgName);
            $stmt->bindParam(':designation', $user->designation);
            $stmt->bindParam(':trainerDocuments', $user->trainerDocuments);
            $stmt->bindParam(':userName',$user->uName);
            $stmt->bindParam(':password',$user->password);
         if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record created Successfully.'];
         }
        else{
           $response = ['status' => 0, 'message' => 'Failed to created record.'];
        }
      }
      else{
        $response = ['status' => 0, 'message' => 'Confirm password and password is mismatch.'];
      }
          echo json_encode($response);
          break;

           case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            if($user->password === $user->confirmPassword)
            {
                $sql = "UPDATE trainercreation SET trainerDocuments=:trainerDocuments,designation=:designation,previousOrganization=:previousOrganization,experience=:experience,panImage=:panImage,qualification=:qualification,aadharImage=:aadharImage,panNumber=:panNumber,aadharNumber=:aadharNumber, DateOfJoining=:DateOfJoining,DateOfBirth=:DateOfBirth,Gender=:Gender,trainerName= :trainerName, personalEmail=:personalEmail, phNumber=:phNumber, userName=:userName, password=:password WHERE trainerId = :trainerId";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':trainerId', $user->trainerId);
            $stmt->bindParam(':trainerName', $user->trainerName);
            $stmt->bindParam(':personalEmail', $user->personalEmail);
            $stmt->bindParam(':phNumber', $user->phNumber);
            $stmt->bindParam(':Gender', $user->Gender);
            $stmt->bindParam(':DateOfBirth', $user->DateOfBirth);
            $stmt->bindParam(':DateOfJoining', $user->DateOfJoining);
            $stmt->bindParam(':aadharNumber', $user->aadharNumber);
            $stmt->bindParam(':panNumber', $user->panNumber);
            $stmt->bindParam(':aadharImage', $user->aadharImage);
            $stmt->bindParam(':panImage', $user->panImage);
            $stmt->bindParam(':qualification', $user->qualification);
            $stmt->bindParam(':experience', $user ->experience);
            $stmt->bindParam(':previousOrganization', $user->previousOrganization);
            $stmt->bindParam(':designation', $user->designation);
            $stmt->bindParam(':trainerDocuments', $user->trainerDocuments);
            $stmt->bindParam(':userName',$user->userName);
            $stmt->bindParam(':password',$user->password);
         if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record updated Successfully.'];
         }
        else{
           $response = ['status' => 0, 'message' => 'Failed to created record.'];
        }
      }
        else{
          $response = ['status' => 0, 'message' => 'Confirm password and password is mismatch.'];
        }
          echo json_encode($response);
          break;
    
        case "DELETE":
            $sql = "DELETE FROM trainercreation WHERE trainerId = :trainerId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':trainerId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
   }
   ?>
