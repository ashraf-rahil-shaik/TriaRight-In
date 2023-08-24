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
            $sql = "SELECT * FROM collegecreation";
            $path = explode('/', $_SERVER['REQUEST_URI']);
             //print_r($path);
            if(isset($path[5]) && is_numeric($path[5])) {
                $sql .= " WHERE collegeId = :collegeId";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':collegeId', $path[5]);
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
            $sql = "INSERT INTO studentintcreation(registrationType,pincode,studentName,emailId,phoneNo,alternatePhoneNo,gender,dateOfBirth,currentaddress,city,district,state,created_at) 
                    VALUES(:registrationType,:pincode,:studentName,:emailId,:phoneNo,:alternatePhoneNo,:gender,:dateOfBirth,:currentaddress,:city,:district,:state,:created_at)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
            $regtype="Internship";
           //$stmt->bindParam(':streamName', $user->name);
            $stmt->bindParam(':studentName', $user->studentName);
            $stmt->bindParam(':emailId', $user->emailId);
            $stmt->bindParam(':phoneNo', $user->phoneNo);
            $stmt->bindParam(':alternatePhoneNo', $user->alternatePhoneNo);
            $stmt->bindParam(':gender', $user->gender);
            $stmt->bindParam(':dateOfBirth', $user->dateOfBirth);
            $stmt->bindParam(':currentaddress', $user->address);
            $stmt->bindParam(':city', $user->city);
            $stmt->bindParam(':district', $user->district);
            $stmt->bindParam(':state', $user->state);
            $stmt->bindParam(':pincode', $user->pincode);
            $stmt->bindParam(':registrationType',$regtype);
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
            $sql = "UPDATE collegecreation SET collegeWebsite=:collegeWebsite,affiliatedUniversity=:affiliatedUniversity,collegeStreams=:collegeStreams,colleeRepresMail=:colleeRepresMail,colleRepresPhNo=:colleRepresPhNo,collegeRepresName=:collegeRepresName,pincode=:pincode,collegePhNo=:collegePhNo, collegeMail=:collegeMail,Address=:Address, District=:District, state=:state, collegeName= :collegeName, collegeCode =:collegeCode, updated_at =:updated_at WHERE collegeId = :collegeId";
            $stmt = $conn->prepare($sql);
            $updated_at = date('Y-m-d');
            $stmt->bindParam(':collegeId', $user->collegeId);
            $stmt->bindParam(':collegeName', $user->collegeName);
            $stmt->bindParam(':collegeCode', $user->collegeCode);
            $stmt->bindParam(':Address', $user->Address);
            $stmt->bindParam(':District', $user->District);
            $stmt->bindParam(':state', $user->state);
            $stmt->bindParam(':pincode', $user->pincode);
            $stmt->bindParam(':collegePhNo', $user->collegePhNo);
            $stmt->bindParam(':collegeMail', $user->collegeMail);
            $stmt->bindParam(':collegeRepresName', $user->collegeRepresName);
            $stmt->bindParam(':colleRepresPhNo', $user->colleRepresPhNo);
            $stmt->bindParam(':colleeRepresMail', $user->colleeRepresMail);
            $stmt->bindParam(':collegeStreams', $user->collegeStreams);
            $stmt->bindParam(':affiliatedUniversity', $user->affiliatedUniversity);
            $stmt->bindParam(':collegeWebsite', $user->collegeWebsite);
            $stmt->bindParam(':updated_at', $updated_at);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM collegecreation WHERE collegeId = :collegeId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':collegeId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
   }
   ?>
