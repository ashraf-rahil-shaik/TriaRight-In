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
            $sql = "SELECT * FROM companycreation";
            $path = explode('/', $_SERVER['REQUEST_URI']);
             //print_r($path);
            if(isset($path[5]) && is_numeric($path[5])) {
                $sql .= " WHERE companyId = :companyId";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':companyId', $path[5]);
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
            $sql = "INSERT INTO companycreation(companyName,companyEmail,companyPhNo,companyRegType,companyWebsite,industry,yearOfEstablishment,subBusinessName,doYouHaveGst,doYouHavePan,address,city,district,state,pincode,representativeName,designation,representativePhoneNo,personalEmail,created_at) VALUES(:companyName,:companyEmail,:companyPhNo,:companyRegType,:companyWebsite,:industry,:yearOfEstablishment,:subBusinessName,:doYouHaveGst,:doYouHavePan,:address,:city,:district,:state,:pincode,:representativeName,:designation,:representativePhoneNo,:personalEmail,:created_at)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
           //$stmt->bindParam(':streamName', $user->name);
            $stmt->bindParam(':companyName', $user->companyName);
            $stmt->bindParam(':companyEmail', $user->companyEmailId);
            $stmt->bindParam(':companyPhNo', $user->companyPhoneNumber);
            $stmt->bindParam(':companyRegType', $user->companyRegistrationType);
            $stmt->bindParam(':companyWebsite', $user->companyWebsite);
            $stmt->bindParam(':industry', $user->industry);
            $stmt->bindParam(':yearOfEstablishment', $user->yearOfEstablishment);
            $stmt->bindParam(':subBusinessName', $user->subBusinessName);
            $stmt->bindParam(':doYouHaveGst', $user->doYouHaveGst);
            $stmt->bindParam(':doYouHavePan', $user->doYouHavePan);
            $stmt->bindParam(':address', $user->address);
            $stmt->bindParam(':city', $user->city);
            $stmt->bindParam(':district', $user->district);
            $stmt->bindParam(':state', $user->state);
            $stmt->bindParam(':pincode', $user->pincode);
            $stmt->bindParam(':representativeName', $user->representativeName);
            $stmt->bindParam(':designation', $user->designation);
            $stmt->bindParam(':representativePhoneNo', $user->representativePhoneNumber);
            $stmt->bindParam(':personalEmail', $user->personalMailId);
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
            $sql = "UPDATE companycreation SET personalEmail=:personalEmail,representativePhoneNo=:representativePhoneNo,designation=:designation,representativeName=:representativeName,pincode=:pincode,state=:state,district=:district,city=:city,address=:address,doYouHavePan=:doYouHavePan,doYouHaveGst=:doYouHaveGst,subBusinessName=:subBusinessName,yearOfEstablishment=:yearOfEstablishment,industry=:industry,companyWebsite=:companyWebsite,companyRegType=:companyRegType,companyPhNo=:companyPhNo,companyName=:companyName,companyEmail=:companyEmail, updated_at =:updated_at WHERE companyId = :companyId";
            $stmt = $conn->prepare($sql);
            $updated_at = date('Y-m-d');
            $stmt->bindParam(':companyId',$user->companyId);
            $stmt->bindParam(':companyName', $user->companyName);
            $stmt->bindParam(':companyEmail', $user->companyEmail);
            $stmt->bindParam(':companyPhNo', $user->companyPhNo);
            $stmt->bindParam(':companyRegType', $user->companyRegType);
            $stmt->bindParam(':companyWebsite', $user->companyWebsite);
            $stmt->bindParam(':industry', $user->industry);
            $stmt->bindParam(':yearOfEstablishment', $user->yearOfEstablishment);
            $stmt->bindParam(':subBusinessName', $user->subBusinessName);
            $stmt->bindParam(':doYouHaveGst', $user->doYouHaveGst);
            $stmt->bindParam(':doYouHavePan', $user->doYouHavePan);
            $stmt->bindParam(':address', $user->address);
            $stmt->bindParam(':city', $user->city);
            $stmt->bindParam(':district', $user->district);
            $stmt->bindParam(':state', $user->state);
            $stmt->bindParam(':pincode', $user->pincode);
            $stmt->bindParam(':representativeName', $user->representativeName);
            $stmt->bindParam(':designation', $user->designation);
            $stmt->bindParam(':representativePhoneNo', $user->representativePhoneNo);
            $stmt->bindParam(':personalEmail', $user->personalEmail);
            $stmt->bindParam(':updated_at', $updated_at);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM companycreation WHERE companyId = :companyId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':companyId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
   }
   ?>
