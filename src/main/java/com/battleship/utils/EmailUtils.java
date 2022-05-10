package com.battleship.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.*;
import javax.mail.internet.*;


@Component
public class EmailUtils {

    @Autowired
    private JavaMailSender mailSender;

    public void send(String email, String object, String text) throws MessagingException {

        // Creazione del messaggio da inviare
        MimeMessage message = mailSender.createMimeMessage();
        message.setSubject(object, "UTF-8");
        message.setText("text/html", text);
        MimeMessageHelper helper = new MimeMessageHelper(message);
        helper.setFrom("mar.fantini@outlook.it");
        helper.setTo(email);
        helper.setSubject(object);

        Multipart mp = new MimeMultipart();
        MimeBodyPart htmlPart = new MimeBodyPart();

        htmlPart.setContent(text, "text/html");
        mp.addBodyPart(htmlPart);
        message.setContent(mp);
        mailSender.send(message);
    }
}
