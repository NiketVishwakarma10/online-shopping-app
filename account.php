<?php
// Initialize the database connection
$mysqli = new mysqli("localhost", "root", "", "niket");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Variables to store form data and error messages
$username = $password = $signupUsername = $signupPassword = "";
$loginError = $signupError = "";

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate and authenticate the user from the database
    // (You should hash the passwords for security)
    $query = "SELECT id FROM users WHERE username = '$username' AND password = '$password'";
    $result = $mysqli->query($query);

    if ($result->num_rows == 1) {
        // Successful login
        // You can set session variables here and redirect the user
        // For example: $_SESSION["username"] = $username;
        // Then redirect the user to a dashboard or another page
        header("Location:index.html");
    } else {
        $loginError = "Invalid username or password";
    }
}

// Handle signup form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["signup"])) {
    $signupUsername = $_POST["signupUsername"];
    $signupPassword = $_POST["signupPassword"];

    // Validate and insert the new user into the database
    // (You should hash the passwords for security)
    $query = "INSERT INTO users (username, password) VALUES ('$signupUsername', '$signupPassword')";

    if ($mysqli->query($query) === TRUE) {
        // Successful signup
        // You can set session variables here and redirect the user
        // For example: $_SESSION["username"] = $signupUsername;
        // Then redirect the user to a dashboard or another page
    } else {
        $signupError = "Error: " . $mysqli->error;
    }
}

// Close the database connection
$mysqli->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login and Signup</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color:white;
            margin: 0;
            padding: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
        .container {
            background-color:#5C8374 ;
            border:5px solid black;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
            width: 400px;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        label {
            display: block;
            margin-bottom: 8px;
            color: #777;
        }
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 5px;
            margin-bottom: 15px;
            border: 2px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            background-color: #333;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #555;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <div class="container">
        <div>
        <h2>Signup</h2>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="signupUsername">Username:</label>
            <input type="text" id="signupUsername" name="signupUsername" value="<?php echo $signupUsername; ?>">
            <br>
            <label for="signupPassword">Password:</label>
            <input type="password" id="signupPassword" name="signupPassword">
            <br>
            <span class="error"><?php echo $signupError; ?></span>
            <br>
            <input type="submit" name="signup" value="Signup">
        </form>
        </div>
        <div>
        <h2>Login</h2>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value="<?php echo $username; ?>">
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
            <br>
            <span class="error"><?php echo $loginError; ?></span>
            <br>
            <input type="submit" name="login" value="Login">
        </form>
    </div>
    </div>
</body>
</html>

