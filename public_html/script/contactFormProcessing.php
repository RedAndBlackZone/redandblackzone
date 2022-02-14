<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form processing</title>
    </head>
    <body>
        <h1>Form processing</h1>
        <?php
            $firstName = $_POST["firstName"];
            $lastName = $_POST["lastName"];
            $email = $_POST["email"];
            $phone = $_POST["phone"];
            $comment = $_POST["comment"];
            echo "Thanks $firstName you'll hear from me soon.";
        ?>
    </body>
</html>