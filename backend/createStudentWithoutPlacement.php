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
            $sql = "INSERT INTO studentwithoutplacementcreation(confirmPassword,registrationType,fullName,email,phoneNumber,gender,dateOfBirth,address,city,district,state,pinCode,qualification,qualificationStatus,semester,qualificationIndustry,qualificationType,branchOrstream,othersBranch,specialization,othersSpecialization,instituteName,uploadCv,userName,password,accountType,paymentType,nameOnCertificate,studentRegNo,collegeName,industry,domain,course,duration,sessionSlot) 
                    VALUES(:confirmPassword,:registrationType,:fullName,:email,:phoneNumber,:gender,:dateOfBirth,:address,:city,:district,:state,:pinCode,:qualification,:qualificationStatus,:semester,:qualificationIndustry,:qualificationType,:branchOrstream,:othersBranch,:specialization,:othersSpecialization,:instituteName,:uploadCv,:userName,:password,:accountType,:paymentType,:nameOnCertificate,:studentRegNo,:collegeName,:industry,:domain,:course,:duration,:sessionSlot)";
            $stmt = $conn->prepare($sql);
           //$stmt->bindParam(':streamName', $user->name);
           $stmt->bindParam(':registrationType', $user->registerType);
            $stmt->bindParam(':fullName', $user->fullName);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':phoneNumber', $user->phoneNumber);
            $stmt->bindParam(':gender', $user->gender);
            $stmt->bindParam(':dateOfBirth', $user->dob);
            $stmt->bindParam(':address', $user->address);
            $stmt->bindParam(':city', $user->city);
            $stmt->bindParam(':district', $user->district);
            $stmt->bindParam(':state', $user->state);
            $stmt->bindParam(':pinCode', $user->pinCode);
            $stmt->bindParam(':qualification',$user->qualification);
            $stmt->bindParam(':qualificationStatus', $user->qualificationStatus);
            $stmt->bindParam(':semester', $user->semester);
            $stmt->bindParam(':qualificationIndustry', $user->qualificationIndustry);
            $stmt->bindParam(':qualificationType', $user->qualificationType);
            $stmt->bindParam(':branchOrstream', $user->branchORstream);
            $stmt->bindParam(':othersBranch', $user->othersBranch);
            $stmt->bindParam(':specialization', $user->specialization);
            $stmt->bindParam(':othersSpecialization', $user->othersSpecialization);
            $stmt->bindParam(':instituteName', $user->instituteName);
            $stmt->bindParam(':uploadCv', $user->cvFile);
            $stmt->bindParam(':userName', $user->uName);
            $stmt->bindParam(':password', $user->password);
            $stmt->bindParam(':confirmPassword', $user->confirmPassword);
            $stmt->bindParam(':accountType', $user->accountType);
            $stmt->bindParam(':paymentType', $user->paymentType);
            $stmt->bindParam(':nameOnCertificate', $user->nameOnCertificate);
            $stmt->bindParam(':studentRegNo', $user->studentRegNo);
            $stmt->bindParam(':collegeName', $user->collegeName);
            $stmt->bindParam(':industry', $user->industry);
            $stmt->bindParam(':domain', $user->domain);
            $stmt->bindParam(':course', $user->course);
            $stmt->bindParam(':duration', $user->duration);
            $stmt->bindParam(':sessionSlot', $user->slots);
          
         if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record created Successfully.'];
         }
        else{
           $response = ['status' => 0, 'message' => 'Failed to created record.'];
        }
          echo json_encode($response);
          break;

          case "PUT":
            $user = json_decode(file_get_contents('php://input'));
            
            $sql = "UPDATE studentwithoutplacementcreation SET studentWithoutPlacementId=:studentWithoutPlacementId,registrationType=:registrationType,fullName=:fullName,email=:email,gender=:gender,dateOfBirth=:dateOfBirth,address=:address,city=:city,district=:district,state=:state,pincode=:pincode,qualification=:qualification,qualificationStatus=:qualificationStatus, semester=:semester,industry=:industry, qualificationType=:qualificationType, branch=:branch, institutionName=:institutionName, uploadCv=:uploadCv,userName=:userName,password=:password,confirmPassword=:confirmPassword,accountType=:accountType,selectIndustry=:selectIndustry,domain=:domain, duration=:duration,sessionSlot=:sessionSlot,updated_at=:updated_at WHERE collegeId = :collegeId";
            
            $stmt_put = $conn->prepare($sql);
            $updated_at = date('Y-m-d');
            
            $stmt_put->bindParam(':studentWithoutPlacementId', $user->name);
            $stmt_put->bindParam(':registrationType', $user->registrationType);
            $stmt_put->bindParam(':fullName', $user->fullName);
            $stmt_put->bindParam(':email', $user->email);
            $stmt_put->bindParam(':phoneNumber', $user->phoneNumber);
            $stmt_put->bindParam(':gender', $user->gender);
            $stmt_put->bindParam(':dateOfBirth', $user->dateOfBirth);
            $stmt_put->bindParam(':address', $user->address);
            $stmt_put->bindParam(':city', $user->city);
            $stmt_put->bindParam(':district', $user->district);
            $stmt_put->bindParam(':state', $user->state);
            $stmt_put->bindParam(':pincode', $user->pincode);
            $stmt_put->bindParam(':qualification', $user->qualification);
            $stmt_put->bindParam(':qualificationStatus', $user->qualificationStatus);
            $stmt_put->bindParam(':semester', $user->semester);
            $stmt_put->bindParam(':industry', $user->industry);
            $stmt_put->bindParam(':qualificationType', $user->qualificationType);
            $stmt_put->bindParam(':branch', $user->branch);
            $stmt_put->bindParam(':institutionName', $user->institutionName);
            $stmt_put->bindParam(':uploadCv', $user->uploadCv);
            $stmt_put->bindParam(':userName', $user->userName);
            $stmt_put->bindParam(':password', $user->password);
            $stmt_put->bindParam(':confirmPassword', $user->confirmPassword);
            $stmt_put->bindParam(':accountType', $user->accountType);
            $stmt_put->bindParam(':selectIndustry', $user->selectIndustry);
            $stmt_put->bindParam(':domain', $user->domain);
            $stmt_put->bindParam(':duration', $user->duration);
            $stmt_put->bindParam(':sessionSlot', $user->sessionSlot);
            $stmt_put->bindParam(':updated_at', $updated_at);
        
            if ($stmt_put->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
        case "DELETE":
            $sql = "DELETE FROM studentwithoutplacement WHERE studentWithoutPlacementId = :studentWithoutPlacementId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':studentWithoutPlacementId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
   }
   ?>

