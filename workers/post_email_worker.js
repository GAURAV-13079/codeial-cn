const queue = require("../config/kue");

const postMailer = require("../mailers/posts_mailer");

queue.process("post_emails", function(job, done){

    postMailer.newPost(job.data); 
    done();
})