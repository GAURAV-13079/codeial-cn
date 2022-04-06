const nodeMailer = require("../config/nodemailer");

// this is another way of exporting a method
exports.newComment = (comment, post) => {
    
    let htmlString = nodeMailer.renderTemplate({comment: comment, post: post}, "/comments/new_comment.ejs");

    nodeMailer.transporter.sendMail({
        from: "gauravsingla482@gmail.com",  
        to: post.user.email,
        subject: "New Comment Published!",
        html: htmlString
    }, (err, info) => {
        if (err){ console.log("Error in sending mail", err); return;}
        return;
    })
}

