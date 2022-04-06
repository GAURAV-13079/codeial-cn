const queue = require("../config/kue");

const commentMailer = require("../mailers/comments_mailer");

queue.process("comment_emails", function(job, done){

    commentMailer.newComment(job.data[0], job.data[1]); 
    done();
})