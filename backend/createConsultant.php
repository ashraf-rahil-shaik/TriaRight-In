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
            $sql = "SELECT * FROM consultantcreation";
            $path = explode('/', $_SERVER['REQUEST_URI']);
           //print_r($path);
            if(isset($path[5]) && is_numeric($path[5])) {
                $sql .= " WHERE consultantId = :consultantId";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':consultantId', $path[5]);
                $stmt->execute();
                $users = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $sql .=" order by consultantId";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
                echo json_encode($users);
                break;

        case "POST":
            $user = json_decode(file_get_contents('php://input'));
        //     if (isset($_FILES['uploadPanDocument']) && $_FILES['uploadPanDocument']['error'] === UPLOAD_ERR_OK && 
        //     isset($_FILES['uploadGSTDocument']) && $_FILES['uploadGSTDocument']['error'] === UPLOAD_ERR_OK && 
        // isset($_POST['companyName']) &&
        // isset($_POST['companyEmailId']) &&
        // isset($_POST['companyPhoneNumber']) &&
        // isset($_POST['companyRegistrationType']) &&
        // isset($_POST['companyWebsite']) &&
        // isset($_POST['yearOfEstablishment']) &&
        // isset($_POST['subBusinessName']) &&
        // isset($_POST['doYouHaveGST']) &&
        // isset($_POST['companyGSTNo']) &&
        // isset($_POST['doYouHavePan']) &&
        // isset($_POST['companyPanNo']) &&
        // isset($_POST['address']) &&
        // isset($_POST['city']) &&
        // isset($_POST['district']) &&
        // isset($_POST['state']) &&
        // isset($_POST['pincode']) &&
        // isset($_POST['representativeName']) &&
        // isset($_POST['designation']) &&
        // isset($_POST['representativePhoneNumber']) &&
        // isset($_POST['personalMailId']) &&
        // isset($_POST['java']) &&
        // isset($_POST['python']) && 
        // isset($_POST['webTechnology']) &&
        // isset($_POST['couldComputing']) &&
        // isset($_POST['dataScience']) &&
        // isset($_POST['artificialIntelligenceandmachineLearning']) &&
        // isset($_POST['testingTools']) &&
        // isset($_POST['deepLearning']) &&
        // isset($_POST['matLab']) &&
        // isset($_POST['vlsiDesign'])  &&
        // isset($_POST['embeddedSystem']) &&
        // isset($_POST['matLab1']) &&
        // isset($_POST['visio']) &&
        // isset($_POST['tSim']) &&
        // isset($_POST['autoCad']) &&
        // isset($_POST['sedPro']) &&
        // isset($_POST['payRolls']) &&
        // isset($_POST['hr']) && 
        // isset($_POST['usItRecruitment']) &&
        // isset($_POST['digitalMarketing']) &&
        // isset($_POST['businessAnalysis']) &&
        // isset($_POST['medicalTranscription']) &&
        // isset($_POST['medicalCoding']) &&
        // isset($_POST['tallyandgst']) &&
        // isset($_POST['incomeTax']) &&
        // isset($_POST['usTaxation']))  {
        //     $file = $_FILES['uploadPanDocument'];
        //     $filename = $file['name'];
        //     $file1 = $_FILES['uploadGSTDocument'];
        //     $filename1 = $file['name'];

        //     // Define the directory where the uploaded images will be saved
        //     $uploadDirectory = "./ConsultantImages/";

        //     // Generate a unique filename to avoid overwriting
        //     $uniqueFilename =  $filename;
        //     $uniqueFilename =  $filename1;

        //     // Move the uploaded image to the desired directory
        //     if (move_uploaded_file($file['tmp_name'], $uploadDirectory . $uniqueFilename) && move_uploaded_file($file1['tmp_name'], $uploadDirectory . $uniqueFilename1)) {
                // Image uploaded successfully
                // Now proceed with inserting the other form data into the database
            $sql = "INSERT INTO consultantcreation(companyName, companyMailId, companyphoneNo, 
      companyRegistrationType,companyWebsite, yearOfEstablishment,subBusinessName,doYouHaveGST,companyGSTNo, 
      uploadGSTDocument,doYouHavePan, companyPanNo, uploadPanDocument,companyAddress,companyCity,companyState, 
      companyDistrict,companyPincode, representiveName, designation, representativePhNo, personalMailId, java, 
      python,webTechnology,cloudComputing,dataScience,AIandML,testingTools,deepLearning,matLabECE,vlsiDesign,
      embeddedSystems,matLabEEE,visio,tSim,autoCad,sedPro,Payrolls,hr,usItRecruitment,digitalMarketing,
      businessAnalysis,medicalTransciption,medicalCoding,tallyandGst,incomeTax,usTaxation) 
      VALUES(:companyName, :companyMailId, :companyPhoneNo, :companyRegistrationType, 
             :companyWebsite, :yearOfEstablishment, :subBusinessName, :doYouHaveGST, :companyGSTNo, 
             :uploadGSTDocument, :doYouHavePan, :companyPanNo, :uploadPanDocument, :companyAddress, 
             :companyCity, :companyDistrict, :companyState, :companyPincode, :representiveName,
             :designation,:representativePhNo, :personalMailId, :java,:python,:webTechnology,:cloudComputing,
             :dataScience,:AIandML,:testingTools,:deepLearning,:matLabECE,:vlsiDesign,:embeddedSystems,:matLabEEE,
             :visio,:tSim,:autoCad,:sedPro,:Payrolls,:hr,:usItRecruitment,:digitalMarketing,:businessAnalysis,
             :medicalTransciption,:medicalCoding,:tallyandGst,:incomeTax,:usTaxation)";
           $stmt = $conn->prepare($sql);
           $file=$user->uploadGSTDocument;
           $file=str_replace("C:\\fakepath\\","",$file);
           $file1=$user->uploadPanDocument;
           $file1=str_replace("C:\\fakepath\\","",$file1);

           $stmt->bindParam(':companyName', $user->companyName);
           $stmt->bindParam(':companyMailId', $user->companyEmailId);
           $stmt->bindParam(':companyPhoneNo', $user->companyPhoneNumber);
           $stmt->bindParam(':companyRegistrationType', $user->companyRegistrationType);
           $stmt->bindParam(':companyWebsite', $user->companyWebsite);
           $stmt->bindParam(':yearOfEstablishment', $user->yearOfEstablishment);
           $stmt->bindParam(':subBusinessName', $user->subBusinessName);
           $stmt->bindParam(':doYouHaveGST', $user->doYouHaveGST);
           $stmt->bindParam(':companyGSTNo', $user->companyGSTNo);
           $stmt->bindParam(':uploadGSTDocument', $file);
            $stmt->bindParam(':doYouHavePan', $user->doYouHavePan);
            $stmt->bindParam(':companyPanNo', $user->companyPanNo);
            $stmt->bindParam(':uploadPanDocument', $file1);
            $stmt->bindParam(':companyAddress', $user->address);
            $stmt->bindParam(':companyCity', $user->city);
            $stmt->bindParam(':companyDistrict', $user->district);
            $stmt->bindParam(':companyState', $user->state);
            $stmt->bindParam(':companyPincode', $user->pincode);
            $stmt->bindParam(':representiveName', $user->representativeName);
            $stmt->bindParam(':designation', $user->designation);
            $stmt->bindParam(':representativePhNo', $user->representativePhoneNumber);
            $stmt->bindParam(':personalMailId', $user->personalMailId);
            $stmt->bindParam(':java', $user->java);
            $stmt->bindParam(':python', $user->python);
            $stmt->bindParam(':webTechnology', $user->webTechnology);
            $stmt->bindParam(':cloudComputing', $user->couldComputing);
            $stmt->bindParam(':dataScience', $user->dataScience);
            $stmt->bindParam(':AIandML', $user->artificialIntelligenceandmachineLearning);
            $stmt->bindParam(':testingTools', $user->testingTools);
            $stmt->bindParam(':deepLearning', $user->deepLearning);
            $stmt->bindParam(':matLabECE', $user->matLab);
            $stmt->bindParam(':vlsiDesign', $user->vlsiDesign);
            $stmt->bindParam(':embeddedSystems', $user->embeddedSystem);
            $stmt->bindParam(':matLabEEE', $user->matLab1);
            $stmt->bindParam(':visio', $user->visio);
            $stmt->bindParam(':tSim', $user->tSim);
            $stmt->bindParam(':autoCad', $user->autoCad);
            $stmt->bindParam(':sedPro', $user->sedPro);
            $stmt->bindParam(':Payrolls', $user->payRolls);
            $stmt->bindParam(':hr', $user->hr);
            $stmt->bindParam(':usItRecruitment', $user->usItRecruitment);
            $stmt->bindParam(':digitalMarketing', $user->digitalMarketing);
            $stmt->bindParam(':businessAnalysis', $user->businessAnalysis);
            $stmt->bindParam(':medicalTransciption', $user->medicalTranscription);
            $stmt->bindParam(':medicalCoding', $user->medicalCoding);
            $stmt->bindParam(':tallyandGst', $user->tallyandgst);
            $stmt->bindParam(':incomeTax', $user->incomeTax);
            $stmt->bindParam(':usTaxation', $user->usTaxation);
         
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
           $sql="UPDATE consultantcreation SET companyName=:companyName,companyMailId=:companyMailId,companyPhoneNo=:companyPhoneNo,
           companyRegistrationType=:companyRegistrationType,companyWebsite=:companyWebsite,yearOfEstablishment=:yearOfEstablishment,
           subBusinessName=:subBusinessName,doYouHaveGST=:doYouHaveGST,companyGSTNo=:companyGSTNo,uploadGSTDocument=:uploadGSTDocument,
           doYouHavePan=:doYouHavePan,companyPanNo=:companyPanNo,uploadPanDocument=:uploadPanDocument,companyAddress=:companyAddress,
           companyCity=:companyCity,companyDistrict=:companyDistrict,companyState=:companyState,companyPincode=:companyPincode,
           representiveName=:representiveName,designation=:designation,representativePhNo=:representativePhNo,personalMailId=:personalMailId,
           java=:java,python=:python,webTechnology=:webTechnology,cloudComputing=:cloudComputing,dataScience=:dataScience,AIandML=:AIandML,
           testingTools=:testingTools,deepLearning=:deepLearning,matLabECE=:matLabECE,vlsiDesign=:vlsiDesign,embeddedSystems=:embeddedSystems,
           matLabEEE=:matLabEEE,visio=:visio,tSim=:tSim,autoCad=:autoCad,sedPro=:sedPro,Payrolls=:Payrolls,hr=:hr,usItRecruitment=:usItRecruitment,
           digitalMarketing=:digitalMarketing,businessAnalysis=:businessAnalysis,medicalTransciption=:medicalTransciption,medicalCoding=:medicalCoding,
           tallyandGst=:tallyandGst,incomeTax=:incomeTax,usTaxation=:usTaxation where consultantId=:consultantId";
            $stmt = $conn->prepare($sql);
            $file=$user->uploadGSTDocument;
           $file=str_replace("C:\\fakepath\\","",$file);
           $file1=$user->uploadPanDocument;
           $file1=str_replace("C:\\fakepath\\","",$file1);

            $stmt->bindParam(':consultantId', $user->consultantId);
            $stmt->bindParam(':companyName', $user->companyName);
            $stmt->bindParam(':companyMailId', $user->companyMailId);
            $stmt->bindParam(':companyPhoneNo', $user->companyPhoneNo);
            $stmt->bindParam(':companyRegistrationType', $user->companyRegistrationType);
            $stmt->bindParam(':companyWebsite', $user->companyWebsite);
            $stmt->bindParam(':yearOfEstablishment', $user->yearOfEstablishment);
            $stmt->bindParam(':subBusinessName', $user->subBusinessName);
            $stmt->bindParam(':doYouHaveGST', $user->doYouHaveGST);
            $stmt->bindParam(':companyGSTNo', $user->companyGSTNo);
            $stmt->bindParam(':uploadGSTDocument', $file);
            $stmt->bindParam(':doYouHavePan', $user->doYouHavePan);
            $stmt->bindParam(':companyPanNo', $user->companyPanNo);
            $stmt->bindParam(':uploadPanDocument', $file1);
            $stmt->bindParam(':companyAddress', $user->companyAddress);
            $stmt->bindParam(':companyCity', $user->companyCity);
            $stmt->bindParam(':companyDistrict', $user->companyDistrict);
            $stmt->bindParam(':companyState', $user->companyState);
            $stmt->bindParam(':companyPincode', $user->companyPincode);
            $stmt->bindParam(':representiveName', $user->representiveName);
            $stmt->bindParam(':designation', $user->designation);
            $stmt->bindParam(':representativePhNo', $user->representativePhNo);
            $stmt->bindParam(':personalMailId', $user->personalMailId);
            $stmt->bindParam(':java', $user->java);
            $stmt->bindParam(':python', $user->python);
            $stmt->bindParam(':webTechnology', $user->webTechnology);
            $stmt->bindParam(':cloudComputing', $user->cloudComputing);
            $stmt->bindParam(':dataScience', $user->dataScience);
            $stmt->bindParam(':AIandML', $user->AIandML);
            $stmt->bindParam(':testingTools', $user->testingTools);
            $stmt->bindParam(':deepLearning', $user->deepLearning);
            $stmt->bindParam(':matLabECE', $user->matLabECE);
            $stmt->bindParam(':vlsiDesign', $user->vlsiDesign);
            $stmt->bindParam(':embeddedSystems', $user->embeddedSystems);
            $stmt->bindParam(':matLabEEE', $user->matLabEEE);
            $stmt->bindParam(':visio', $user->visio);
            $stmt->bindParam(':tSim', $user->tSim);
            $stmt->bindParam(':autoCad', $user->autoCad);
            $stmt->bindParam(':sedPro', $user->sedPro);
            $stmt->bindParam(':Payrolls', $user->Payrolls);
            $stmt->bindParam(':hr', $user->hr);
            $stmt->bindParam(':usItRecruitment', $user->usItRecruitment);
            $stmt->bindParam(':digitalMarketing', $user->digitalMarketing);
            $stmt->bindParam(':businessAnalysis', $user->businessAnalysis);
            $stmt->bindParam(':medicalTransciption', $user->medicalTransciption);
            $stmt->bindParam(':medicalCoding', $user->medicalCoding);
            $stmt->bindParam(':tallyandGst', $user->tallyandGst);
            $stmt->bindParam(':incomeTax', $user->incomeTax);
            $stmt->bindParam(':usTaxation', $user->usTaxation);
           if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record updated Successfully.'];
           }
           else{
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
           }
           echo json_encode($response);
           break;

           case "DELETE":
            $sql = "DELETE FROM consultantcreation WHERE consultantId = :consultantId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':consultantId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
    }
?>
