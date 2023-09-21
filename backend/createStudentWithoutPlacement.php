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

    $postdata = file_get_contents('php://input');
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case "GET":
            $sql = "SELECT * FROM studentwithoutplacementcreation";
            $path = explode('/', $_SERVER['REQUEST_URI']);
             //print_r($path);
            if(isset($path[6]) && is_numeric($path[6])) {
                $sql .= " WHERE studentWithoutPlacementId = :studentWithoutPlacementId";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':studentWithoutPlacementId', $path[6]);
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
            // $user = json_decode(file_get_contents('php://input'));
            // var_dump($user);
            $data = json_decode($postdata, true);
            
                    // Access studentInfo, educationalDetails, and essentials from the decoded data
                    $studentInfo = $data['studentInfo'];
                    $educationalDetails = $data['educationalDetails'];
                    $essentials = $data['essentials'];
            //$sql = "INSERT INTO streamcreation(streamId, streamName, streamLocation, created_at) VALUES(null, :streamName, :streamLocation, :created_at)";
            if($essentials['password'] === $essentials['confirmPassword'])
            {
            $sql = "INSERT INTO studentwithoutplacementcreation(registrationType, fullName, email, phoneNumber, gender, dateOfBirth, address, city, district, state, pinCode, qualification, qualificationStatus, semester, qualificationIndustry, qualificationType, branchOrstream, othersBranch, specialization, othersSpecialization, instituteName, uploadCv,userName, password, accountType, paymentType, nameOnCertificate, studentRegNo, collegeName, industry, domain, course, duration, sessionSlot) 
                            VALUES (:registerType, :fullName, :email, :phoneNumber, :gender, :dob, :address, :city, :district, :state, :pinCode, :qualification, :qualificationStatus, :semester, :qualificationIndustry, :qualificationType, :branchORstream, :othersBranch, :specialization, :othersSpecialization, :instituteName, :cvFile, :uName, :password, :accountType, :paymentType, :nameOnCertificate, :studentRegNo, :collegeName, :industry, :domain, :course, :duration, :sessionSlot)";
            
            $stmt = $conn->prepare($sql);
            
           //$stmt->bindParam(':streamName', $user->name);
           $stmt->bindParam(':registerType', $studentInfo['registerType']);
                        $stmt->bindParam(':fullName', $studentInfo['fullName']);
                        $stmt->bindParam(':email', $studentInfo['email']);
                        $stmt->bindParam(':phoneNumber', $studentInfo['phoneNumber']);
                        $stmt->bindParam(':gender', $studentInfo['gender']);
                        $stmt->bindParam(':dob', $studentInfo['dob']);
                        $stmt->bindParam(':address', $studentInfo['address']);
                        $stmt->bindParam(':city', $studentInfo['city']);
                        $stmt->bindParam(':district', $studentInfo['district']);
                        $stmt->bindParam(':state', $studentInfo['state']);
                        $stmt->bindParam(':pinCode', $studentInfo['pinCode']);
                        $stmt->bindParam(':qualification', $educationalDetails['qualification']);
                        $stmt->bindParam(':qualificationStatus', $educationalDetails['qualificationStatus']);
                        $stmt->bindParam(':semester', $educationalDetails['semester']);
                        $stmt->bindParam(':qualificationIndustry', $educationalDetails['qualificationIndustry']);
                        $stmt->bindParam(':qualificationType', $educationalDetails['qualificationType']);
                        $stmt->bindParam(':branchORstream', $educationalDetails['branchORstream']);
                        $stmt->bindParam(':othersBranch', $educationalDetails['othersBranch']);
                        $stmt->bindParam(':specialization', $educationalDetails['specialization']);
                        $stmt->bindParam(':othersSpecialization', $educationalDetails['othersSpecialization']);
                        $stmt->bindParam(':instituteName', $educationalDetails['instituteName']);
                        $stmt->bindParam(':cvFile', $educationalDetails['cvFile']);
                        $stmt->bindParam(':uName', $essentials['uName']);
                        $stmt->bindParam(':password', $essentials['password']);
                        $stmt->bindParam(':accountType', $essentials['accountType']);
                        $stmt->bindParam(':paymentType', $essentials['paymentType']);
                        $stmt->bindParam(':nameOnCertificate', $essentials['nameOnCertificate']);
                        $stmt->bindParam(':studentRegNo', $essentials['studentRegNo']);
                        $stmt->bindParam(':collegeName', $essentials['collegeName']);
                        $stmt->bindParam(':industry', $essentials['industry']);
                        $stmt->bindParam(':domain', $essentials['domain']);
                        $stmt->bindParam(':course', $essentials['course']);
                        $stmt->bindParam(':duration', $essentials['duration']);
                        $stmt->bindParam(':sessionSlot', $essentials['slots']);
          
         if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record created Successfully.'];
         }
        else{
           $response = ['status' => 0, 'message' => 'Failed to created record.'];
        }}
        else{
            $response = ['status' => 0, 'message' => 'Password and Confirm Password do not match'];
        }
          echo json_encode($response);
          break;

          case "PUT":

            $data = json_decode($postdata, true);
            
            // Access studentInfo, educationalDetails, and essentials from the decoded data
            $studentInfo = $data['studentInfo'];
            $educationalDetails = $data['educationalDetails'];
            $essentials = $data['essentials'];
            if($essentials['password'] === $essentials['confirmPassword'])
            { 
    $sql = "UPDATE studentwithoutplacementcreation SET registrationType=:registerType,fullName=:fullName,email=:email,phoneNumber=:phoneNumber,
    gender=:gender,dateofBirth=:dob,address=:address,city=:city,
    district=:district,state=:state,pinCode=:pinCode,qualification=:qualification,qualificationStatus=:qualificationStatus,semester=:semester,
    qualificationIndustry=:qualificationIndustry,qualificationType=:qualificationType,branchOrstream=:branchORstream,othersBranch=:othersBranch,
    specialization=:specialization,othersSpecialization=:othersSpecialization,
    instituteName=:instituteName,uploadCv=:cvFile,userName=:uName,password=:password,accountType=:accountType,paymentType=:paymentType,
    nameOnCertificate=:nameOnCertificate,studentRegNo=:studentRegNo,collegeName=:collegeName,industry=:industry,
    domain=:domain,course=:course,duration=:duration,sessionSlot=:sessionSlot where studentWithoutPlacementId =:studentWithoutPlacementId";
    $stmt = $conn->prepare($sql);
    $path = explode('/', $_SERVER['REQUEST_URI']);
    $stmt->bindParam(':studentWithoutPlacementId', $path[5]);
    $stmt->bindParam(':registerType', $studentInfo['registrationType']);
                $stmt->bindParam(':fullName', $studentInfo['fullName']);
                $stmt->bindParam(':email', $studentInfo['email']);
                $stmt->bindParam(':phoneNumber', $studentInfo['phoneNumber']);
                $stmt->bindParam(':gender', $studentInfo['gender']);
                $stmt->bindParam(':dob', $studentInfo['dateofBirth']);
                $stmt->bindParam(':address', $studentInfo['address']);
                $stmt->bindParam(':city', $studentInfo['city']);
                $stmt->bindParam(':district', $studentInfo['district']);
                $stmt->bindParam(':state', $studentInfo['state']);
                $stmt->bindParam(':pinCode', $studentInfo['pinCode']);
                $stmt->bindParam(':qualification', $educationalDetails['qualification']);
                $stmt->bindParam(':qualificationStatus', $educationalDetails['qualificationStatus']);
                $stmt->bindParam(':semester', $educationalDetails['semester']);
                $stmt->bindParam(':qualificationIndustry', $educationalDetails['qualificationIndustry']);
                $stmt->bindParam(':qualificationType', $educationalDetails['qualificationType']);
                $stmt->bindParam(':branchORstream', $educationalDetails['branchOrstream']);
                $stmt->bindParam(':othersBranch', $educationalDetails['othersBranch']);
                $stmt->bindParam(':specialization', $educationalDetails['specialization']);
                $stmt->bindParam(':othersSpecialization', $educationalDetails['othersSpecialization']);
                $stmt->bindParam(':instituteName', $educationalDetails['instituteName']);
                $stmt->bindParam(':cvFile', $educationalDetails['uploadCv']);
                $stmt->bindParam(':uName', $essentials['userName']);
                $stmt->bindParam(':password', $essentials['password']);
                $stmt->bindParam(':accountType', $essentials['accountType']);
                $stmt->bindParam(':paymentType', $essentials['paymentType']);
                $stmt->bindParam(':nameOnCertificate', $essentials['nameOnCertificate']);
                $stmt->bindParam(':studentRegNo', $essentials['studentRegNo']);
                $stmt->bindParam(':collegeName', $essentials['collegeName']);
                $stmt->bindParam(':industry', $essentials['industry']);
                $stmt->bindParam(':domain', $essentials['domain']);
                $stmt->bindParam(':course', $essentials['course']);
                $stmt->bindParam(':duration', $essentials['duration']);
                $stmt->bindParam(':sessionSlot', $essentials['sessionSlot']);
    
                // Execute the statement
                if ($stmt->execute()) {
                    $response = [
                        "status" => 1, // Success status code
                        "message" => "update  successful", // Success message
                    ];
                } else {
                    $response = [
                        "status" => 0, // Error status code
                        "message" => "Error inserting data into the database", // Error message
                    ];
                }
            
            }
            else{
                $response = ['status' => 0, 'message' => 'Confirm password and password is mismatch.'];
            }
            echo json_encode($response);
            break;
      
        
            echo json_encode($response);
            break;
        case "DELETE":
            $sql = "DELETE FROM studentwithoutplacementcreation WHERE studentWithoutPlacementId = :studentWithoutPlacementId";
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
