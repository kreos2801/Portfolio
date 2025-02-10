<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Charge PHPMailer via Composer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; 
        $mail->SMTPAuth = true;
        $mail->Username = 'yanngaouditz@gmail.com'; 
        $mail->Password = 'kvjp lswg qzan fqca'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Expéditeur & destinataire
        $mail->setFrom($email, "$prenom $nom");
        $mail->addAddress('gaouditz@et.esiea.fr'); // Email du destinataire

        // Contenu du mail
        $mail->isHTML(true);
        $mail->Subject = "Message de $prenom $nom";
        $mail->Body    = "<h3>Nom : $nom</h3><h3>Prénom : $prenom</h3><h3>Email : $email</h3><p>$message</p>";
        $mail->AltBody = "Nom : $nom\nPrénom : $prenom\nEmail : $email\nMessage :\n$message"; // Version texte

        $mail->send();
        echo "<p style='color:green;'>Merci pour votre message ! Nous vous répondrons dès que possible.</p>";
    } catch (Exception $e) {
        echo "<p style='color:red;'>Erreur : l'e-mail n'a pas pu être envoyé. Mailer Error: {$mail->ErrorInfo}</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Formulaire de contact">
    <title>Formulaire de Contact</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<?php include('header.html'); ?> <!-- Inclusion du header -->

<body>
    <div class="contact-form-container">
        <h2>Contactez-moi</h2>
        <p>Remplissez le formulaire ci-dessous pour m'envoyer un mail !</p>
        
        <form action="contact-form.php" method="POST">
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required>

            <label for="prenom">Prénom :</label>
            <input type="text" id="prenom" name="prenom" required>

            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message :</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Envoyer le mail</button>
        </form>
    </div>

    <?php include('footer.html'); ?> <!-- Inclusion du footer -->
</body>
</html>
