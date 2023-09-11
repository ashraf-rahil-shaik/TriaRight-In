<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'dbConnect.php';
$objDb = new dbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
        $sql = "SELECT * FROM coursecreation ";
        $path = explode('/', $_SERVER['REQUEST_URI']);
         //print_r($path);
        if(isset($path[6]) && is_numeric($path[6])) {
            $sql .= " WHERE courseId = :courseId";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':courseId', $path[6]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } 
        // else if(issset($path[6]))
        // {
        //     $sql .= " WHERE Stream = $path[6]";
        //     $stmt = $conn->prepare($sql);
        //     $stmt->bindParam(':Stream', $path[6]);
        //     $stmt->execute();
        //     $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        // }
        else {
        $sql .="order by courseId";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
       }
        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));

        // Check if an image was uploaded
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK && 
        isset($_POST['stream']) &&
        isset($_POST['duration']) &&
        isset($_POST['provider']) &&
        isset($_POST['type']) &&
        isset($_POST['hours']) &&
        isset($_POST['jobRole1']) &&
        isset($_POST['jobRole2']) &&
        isset($_POST['jobRole3']) &&
        isset($_POST['courseDescription']) &&
        isset($_POST['topicsCovered']) &&
        isset($_POST['benefits']) &&
        isset($_POST['course']) &&
        isset($_POST['subStream']))  {
            $file = $_FILES['image'];
            $filename = $file['name'];

            // Define the directory where the uploaded images will be saved
            $uploadDirectory = "./CoursesImages/";

            // Generate a unique filename to avoid overwriting
            $uniqueFilename =  $filename;

            // Move the uploaded image to the desired directory
            if (move_uploaded_file($file['tmp_name'], $uploadDirectory . $uniqueFilename)) {
                // Image uploaded successfully
                // Now proceed with inserting the other form data into the database

                $sql = "INSERT INTO coursecreation(jobRole1,jobRole2,jobRole3,subStream,Images,course, Stream, Duration, Providers, trainingType, Hours1, coarseDescription, TopicsCovered, Benefits, Price, created_at) 
                        VALUES (:jobRole1,:jobRole2,:jobRole3,:subStream,:Images,:course, :Stream, :Duration, :Providers, :trainingType, :Hours1, :coarseDescription, :TopicsCovered, :Benefits, :Price, :created_at)";
                $stmt = $conn->prepare($sql);
                
                $created_at = date('Y-m-d');

                $stmt->bindParam(':Images', $uniqueFilename);
                $stmt->bindParam(':subStream', $_POST['subStream']);
                $stmt->bindParam(':Stream', $_POST['stream']);
                $stmt->bindParam(':course', $_POST['course']);
                $stmt->bindParam(':jobRole1', $_POST['jobRole1']);
                $stmt->bindParam(':jobRole2', $_POST['jobRole2']);
                $stmt->bindParam(':jobRole3', $_POST['jobRole3']);
                $stmt->bindParam(':Duration', $_POST['duration']);
                $stmt->bindParam(':Providers',  $_POST['provider']);
                $stmt->bindParam(':trainingType', $_POST['type']);
                $stmt->bindParam(':Hours1', $_POST['hours']);
                $stmt->bindParam(':coarseDescription',$_POST['courseDescription']);
                $stmt->bindParam(':TopicsCovered', $_POST['topicsCovered']);
                $stmt->bindParam(':Benefits', $_POST['benefits']);
                $stmt->bindParam(':Price', $_POST['price']);
                $stmt->bindParam(':created_at', $created_at);

                if ($stmt->execute()) 
                {
                    $response = ['status' => 1, 'message' => 'Record created Successfully.'];
                } 
                else
                 {
                    $response = ['status' => 0, 'message' => 'Failed to create record.'];
                }
            } else {
                $response = ['status' => 0, 'message' => 'Failed to move uploaded image.'];
            }
        } else {
            $response = ['status' => 0, 'message' => 'Image upload failed.'];
        }

        echo json_encode($response);
        break;

        case "PUT":
            if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK )  {
                $file = $_FILES['image'];
                $filename = $file['name'];
    
                // Define the directory where the uploaded images will be saved
                $uploadDirectory = "./CoursesImages/";
    
                // Generate a unique filename to avoid overwriting
                $uniqueFilename =  $filename;
    
                // Move the uploaded image to the desired directory
                if (move_uploaded_file($file['tmp_name'], $uploadDirectory . $uniqueFilename)) {
                    // Image uploaded successfully
                    // Now proceed with inserting the other form data into the database
            $sql = "UPDATE coursecreation SET jobRole1=:jobRole1, jobRole2=:jobRole2,jobRole3=:jobRole3,subStream=:subStream,Images= :Images,course=:course, Stream =:Stream, Duration=:Duration, Providers=:Providers,trainingType=:trainingType,Hours1=:Hours1, coarseDescription=:coarseDescription, TopicsCovered=:TopicsCovered, Benefits=:Benefits, Price=:Price WHERE courseId = :courseId";
            $stmt = $conn->prepare($sql);
            $updated_at = date('Y-m-d');
            
            $stmt->bindParam(':Images', $fileName);
            $stmt->bindParam(':subStream', $_POST['subStream']);
            $stmt->bindParam(':Stream', $_POST['stream']);
            $stmt->bindParam(':course', $_POST['course']);
            $stmt->bindParam(':jobRole1', $_POST['jobRole1']);
                $stmt->bindParam(':jobRole2', $_POST['jobRole2']);
                $stmt->bindParam(':jobRole3', $_POST['jobRole3']);
            $stmt->bindParam(':Duration', $_POST['duration']);
            $stmt->bindParam(':Providers',  $_POST['provider']);
            $stmt->bindParam(':trainingType', $_POST['type']);
            $stmt->bindParam(':Hours1', $_POST['hours']);
            $stmt->bindParam(':coarseDescription',$_POST['courseDescription']);
            $stmt->bindParam(':TopicsCovered', $_POST['topicsCovered']);
            $stmt->bindParam(':Benefits', $_POST['benefits']);
            $stmt->bindParam(':Price', $_POST['price']);
            if ($stmt->execute()) 
                {
                    $response = ['status' => 1, 'message' => 'Record created Successfully.'];
                } 
                else
                 {
                    $response = ['status' => 0, 'message' => 'Failed to create record.'];
                }
            } else {
                $response = ['status' => 0, 'message' => 'Failed to move uploaded image.'];
            }
        } else {
            $response = ['status' => 0, 'message' => 'Image upload failed.'];
        }

    

        
            // Move the uploaded image to the desired direct
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM coursecreation WHERE courseId = :courseId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':courseId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
   }
   ?>
