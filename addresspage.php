<?php
// Database connection parameters
$host = 'localhost';     // Change this to your database host (e.g., 'localhost')
$username = 'root';      // Change this to your database username
$password = '';      // Change this to your database password
$database = 'niket';  // Change this to your database name

// Create a database connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to sanitize user inputs
function sanitize_input($input) {
    global $conn;
    return $conn->real_escape_string($input);
}

// Process the form data when the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user inputs
    $name = sanitize_input($_POST["name"]);
    $address = sanitize_input($_POST["address"]);
    $email = sanitize_input($_POST["Email"]);
    $contact = sanitize_input($_POST["Contact"]);
    $state = sanitize_input($_POST["State"]);

    // Insert data into the database
    $sql = "INSERT INTO shipping_addresses (name, address, email, contact, state) VALUES ('$name', '$address', '$email', '$contact', '$state')";

    if ($conn->query($sql) === TRUE) {
        header("Location:payment.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>


<!DOCTYPE html>
<html>
<head>
    <title>Shopping Address</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px;
        }

        section {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 30px ;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            font-weight: bold;
        }

        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        input[type="submit"] {
            background-color: #0056b3;;
            color: #fff;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }

        footer {
            text-align: center;
            padding: 10px;
            background-color: #333;
            color: #fff;
        }
    </style>
</head>
<body>
    
    <section>
        <h2>Shipping Address</h2>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" ><br><br>

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" ><br><br>

            <label for="email">Email:</label>
            <input type="text" id="Email" name="Email" ><br><br>

            <label for="Contact">Contact:</label>
            <input type="text" id="Contact" name="Contact" ><br><br>

            <label for="State">State:</label>
            <input type="text" id="State" name="State" ><br><br>
            <input type="submit" value="Submit"> 
        </form>
    </section>

    <footer>
        <p>!!!!!</p>
    </footer>
</body>
</html>
