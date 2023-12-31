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
            $sql = "SELECT * FROM companycreation ";
            $path = explode('/', $_SERVER['REQUEST_URI']);
             //print_r($path);
            if(isset($path[5]) && is_numeric($path[5])) {
                $sql .= " WHERE companyId = :companyId";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':companyId', $path[5]);
                $stmt->execute();
                $users = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
            $sql .="order by companyId";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($users);
            break;

        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            //$sql = "INSERT INTO streamcreation(streamId, streamName, streamLocation, created_at) VALUES(null, :streamName, :streamLocation, :created_at)";
            if($user->password === $user->confirmPassword)
            { 
            $sql = "INSERT INTO companycreation(companyName,companyEmail,companyPhNo,companyRegType,companyWebsite,industry,yearOfEstablishment,subBusinessName,doYouHaveGst,GSTno,GSTfile,doYouHaveCompanyPan,PANno,PANfile,address,city,district,state,pincode,representativeName,designation,representativePhoneNo,personalEmail,userName,password) VALUES(:companyName,:companyEmail,:companyPhNo,:companyRegType,:companyWebsite,:industry,:yearOfEstablishment,:subBusinessName,:doYouHaveGst,:GSTno,:GSTfile,:doYouHaveCompanyPan,:PANno,:PANfile,:address,:city,:district,:state,:pincode,:representativeName,:designation,:representativePhoneNo,:personalEmail,:userName,:password)";
            $stmt = $conn->prepare($sql);
            
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
            $stmt->bindParam(':GSTno', $user->gstNo);
            $stmt->bindParam(':GSTfile', $user->gstFile);
            $stmt->bindParam(':doYouHaveCompanyPan', $user->doYouHavePan);
            $stmt->bindParam(':PANno', $user->panNo);
            $stmt->bindParam(':PANfile', $user->panFile);
            $stmt->bindParam(':address', $user->address);
            $stmt->bindParam(':city', $user->city);
            $stmt->bindParam(':district', $user->district);
            $stmt->bindParam(':state', $user->state);
            $stmt->bindParam(':pincode', $user->pincode);
            $stmt->bindParam(':representativeName', $user->representativeName);
            $stmt->bindParam(':designation', $user->designation);
            $stmt->bindParam(':representativePhoneNo', $user->representativePhoneNumber);
            $stmt->bindParam(':personalEmail', $user->personalMailId);
            $stmt->bindParam(':userName',$user->userName);
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
            $sql = "UPDATE companycreation SET PANfile=:PANfile,PANno=:PANno,GSTfile=:GSTfile,GSTno=:GSTno,personalEmail=:personalEmail,representativePhoneNo=:representativePhoneNo,designation=:designation,representativeName=:representativeName,pincode=:pincode,state=:state,district=:district,city=:city,address=:address,doYouHaveCompanyPan=:doYouHaveCompanyPan,doYouHaveGst=:doYouHaveGst,subBusinessName=:subBusinessName,yearOfEstablishment=:yearOfEstablishment,industry=:industry,companyWebsite=:companyWebsite,companyRegType=:companyRegType,companyPhNo=:companyPhNo,companyName=:companyName,companyEmail=:companyEmail, userName=:userName, password=:password WHERE companyId = :companyId";
            $stmt = $conn->prepare($sql);
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
            $stmt->bindParam(':GSTno', $user->GSTno);
            $stmt->bindParam(':GSTfile', $user->GSTfile);
            $stmt->bindParam(':doYouHaveCompanyPan', $user->doYouHaveCompanyPan); 
            $stmt->bindParam(':PANno', $user->PANno);
            $stmt->bindParam(':PANfile', $user->PANfile);
            $stmt->bindParam(':address', $user->address);
            $stmt->bindParam(':city', $user->city);
            $stmt->bindParam(':district', $user->district);
            $stmt->bindParam(':state', $user->state);
            $stmt->bindParam(':pincode', $user->pincode);
            $stmt->bindParam(':representativeName', $user->representativeName);
            $stmt->bindParam(':designation', $user->designation);
            $stmt->bindParam(':representativePhoneNo', $user->representativePhoneNo);
            $stmt->bindParam(':personalEmail', $user->personalEmail);
            $stmt->bindParam(':userName',$user->userName);
            $stmt->bindParam(':password',$user->password);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
        }
        else{
            $response = ['status' => 0, 'message' => 'Confirm password and password is mismatch.'];
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
