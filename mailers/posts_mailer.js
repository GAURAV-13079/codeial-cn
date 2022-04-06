const nodeMailer = require("../config/nodemailer");

exports.newPost = (post) => {
    let htmlString = nodeMailer.renderTemplate({post: post}, "/posts/new_post.ejs");

    nodeMailer.transporter.sendMail({
        from: "gauravsingla482@gmail.com",
        to: post.user.email,
        subject: "New Post Published!",
        html: htmlString
    }, (err, info) => {
        if (err){ console.log("Error in sending mail", err); return;}
        return;
    })
}