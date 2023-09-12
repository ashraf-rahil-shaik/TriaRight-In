<?php
   error_reporting(E_ALL);
   ini_set('display_errors', 1);
   
       header("Access-Control-Allow-Origin: *");
       header("Access-Control-Allow-Headers: *");
       header("Access-Control-Allow-Methods: *");
    //echo"Testing";

    include 'dbConnect.php';
    // $objDb = new dbConnect;
    // $conn = $objDb->connect();
    //var_dump($conn);
    try {
        $objDb = new dbConnect;
        $conn = $objDb->connect();
    } catch (PDOException $e) {
        echo "Database connection failed: " . $e->getMessage();
        die();
    }
    // $postdata = file_get_contents("php://input");
$method = $_SERVER['REQUEST_METHOD'];
$response = ['status' => 0, 'message' => 'Validation errors:', 'errors' => []];
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
            // var_dump($user);
            //$sql = "INSERT INTO streamcreation(streamId, streamName, streamLocation, created_at) VALUES(null, :streamName, :streamLocation, :created_at)";
            case "POST":
                $postdata = file_get_contents("php://input");
                if (!empty($postdata)) {
                    // Decode the JSON data into an associative array
                    $data = json_decode($postdata, true);
            
                    // Access studentInfo, educationalDetails, and essentials from the decoded data
                    $studentInfo = $data['studentInfo'];
                    $educationalDetails = $data['educationalDetails'];
                    $essentials = $data['essentials'];
            
                    // Insert data into the students table
                    $sql = "INSERT INTO studentwithoutplacementcreation(registrationType, fullName, email, phoneNumber, gender, dateOfBirth, address, city, district, state, pinCode, qualification, qualificationStatus, semester, qualificationIndustry, qualificationType, branchOrstream, othersBranch, specialization, othersSpecialization, instituteName, uploadCv, userName, password, accountType, paymentType, nameOnCertificate, studentRegNo, collegeName, industry, domain, course, duration, sessionSlot) 
                            VALUES (:registerType, :fullName, :email, :phoneNumber, :gender, :dob, :address, :city, :district, :state, :pinCode, :qualification, :qualificationStatus, :semester, :qualificationIndustry, :qualificationType, :branchORstream, :othersBranch, :specialization, :othersSpecialization, :instituteName, :cvFile, :uName, :password, :accountType, :paymentType, :nameOnCertificate, :studentRegNo, :collegeName, :industry, :domain, :course, :duration, :slots)";
            
                    $stmt = $conn->prepare($sql);
            
                    if ($stmt) {
                        // Bind parameters
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
                        $stmt->bindParam(':slots', $essentials['slots']);
            
                        // Execute the statement
                        if ($stmt->execute()) {
                            $response = [
                                "status" => 1, // Success status code
                                "message" => "Registration successful", // Success message
                            ];
                        } else {
                            $response = [
                                "status" => 0, // Error status code
                                "message" => "Error inserting data into the database", // Error message
                            ];
                        }
                    } else {
                        $response = [
                            "status" => 0, // Error status code
                            "message" => "Database error", // Error message
                        ];
                    }
                } else {
                    $response = [
                        "status" => 0, // Error status code
                        "message" => "No data received", // Error message
                    ];
                }
            
                // Set the response content type to JSON
                header('Content-Type: application/json');
            
                // Encode the response as JSON and send it back to React
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