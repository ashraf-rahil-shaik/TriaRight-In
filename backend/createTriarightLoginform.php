<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

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
            $sql = "SELECT * FROM triarightlogincreation ";
            $path = explode('/', $_SERVER['REQUEST_URI']);
           // print_r($path);
        if(isset($path[5]) && is_numeric($path[5])) {
            $sql .= " WHERE triarightLoginId = :triarightLoginId";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':triarightLoginId', $path[5]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $sql .="order by triarightLoginId";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
            echo json_encode($users);
            break;

        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO triarightlogincreation(userName, password, registerAs, created_at) VALUES(:userName, :password, :registerAs, :created_at)";
           $stmt = $conn->prepare($sql);
           $created_at = date('Y-m-d');
        
           $stmt->bindParam(':userName', $user->userName);
           $stmt->bindParam(':password', $user->password);
           $stmt->bindParam(':registerAs', $user->registerAs);
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
            $sql = "UPDATE triarightlogincreation SET userName=:userName, password=:password, registerAs= :registerAs, updated_at= :updated_at WHERE triarightLoginId  = :triarightLoginId";
            $stmt = $conn->prepare($sql);
            $updated_at = date('Y-m-d');
            $stmt->bindParam(':triarightLoginId', $user->triarightLoginId);
           $stmt->bindParam(':userName', $user->userName);
           $stmt->bindParam(':password', $user->password);
           $stmt->bindParam(':registerAs', $user->registerAs);
           $stmt->bindParam(':updated_at', $updated_at);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM triarightlogincreation WHERE triarightLoginId = :triarightLoginId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':triarightLoginId', $path[5]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
    }
?>