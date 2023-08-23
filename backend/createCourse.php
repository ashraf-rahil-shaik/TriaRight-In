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
            $sql = "SELECT * FROM coursecreation ";
            $path = explode('/', $_SERVER['REQUEST_URI']);
             //print_r($path);
            if(isset($path[5]) && is_numeric($path[5])) {
                $sql .= " WHERE courseId = :courseId";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':courseId', $path[5]);
                $stmt->execute();
                $users = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
            $sql .="order by courseId";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
           }
            echo json_encode($users);
            break;
        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            //$sql = "INSERT INTO streamcreation(streamId, streamName, streamLocation, created_at) VALUES(null, :streamName, :streamLocation, :created_at)";
            $sql = "INSERT INTO coursecreation(Images,Stream,Duration,Providers,trainingType,Hours1,coarseDescription,TopicsCovered,Benefits,Price,created_at) VALUES(:Images,:Stream,:Duration,:Providers,:trainingType,:Hours1,:coarseDescription,:TopicsCovered,:Benefits,:Price,:created_at)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
           //$stmt->bindParam(':streamName', $user->name);
           $file=$user->image;
           $file=str_replace("C:\\fakepath\\","",$file);
            $stmt->bindParam(':Images', $file);
            $stmt->bindParam(':Stream', $user->stream);
            $stmt->bindParam(':Duration', $user->duration);
            $stmt->bindParam(':Providers', $user->provider);
            $stmt->bindParam(':trainingType', $user->type);
            $stmt->bindParam(':Hours1', $user->hours);
            $stmt->bindParam(':coarseDescription', $user->courseDescription);
            $stmt->bindParam(':TopicsCovered', $user->topicsCovered);
            $stmt->bindParam(':Benefits', $user->benefits);
            $stmt->bindParam(':Price', $user->price);
            $stmt->bindParam(':created_at', $created_at);
         if($stmt->execute())
         {
               $response = ['status' => 1, 'message' => 'Record created Successfully.'];
         }
        else{
           $response = ['status' => 0, 'message' => 'Failed to created record.'];
        }
          echo json_encode($response);
          break;

           case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE coursecreation SET Images= :Images, Stream =:Stream, Duration=:Duration, Providers=:Providers,trainingType=:trainingType,Hours1=:Hours1, coarseDescription=:coarseDescription, TopicsCovered=:TopicsCovered, Benefits=:Benefits, Price=:Price, updated_at =:updated_at WHERE courseId = :courseId";
            $stmt = $conn->prepare($sql);
            $updated_at = date('Y-m-d');
            
            $stmt->bindParam(':courseId', $user->courseId);
            $stmt->bindParam(':Images', $user->Images);
            $stmt->bindParam(':Stream', $user->Stream);
            $stmt->bindParam(':Duration', $user->Duration);
            $stmt->bindParam(':Providers', $user->Providers);
            $stmt->bindParam(':trainingType', $user->trainingType);
            $stmt->bindParam(':Hours1', $user->Hours1);
            $stmt->bindParam(':coarseDescription', $user->coarseDescription);
            $stmt->bindParam(':TopicsCovered', $user->TopicsCovered);
            $stmt->bindParam(':Benefits', $user->Benefits);
            $stmt->bindParam(':Price', $user->Price);
            $stmt->bindParam(':updated_at', $updated_at);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
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
