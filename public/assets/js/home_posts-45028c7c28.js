{let t=function(){let t=$("#new-posts");t.submit((function(s){s.preventDefault(),$.ajax({type:"post",url:"/posts/create",data:t.serialize(),success:function(t){let s=e(t.data.post);$("#display-post>ul").prepend(s),$("#post_content").val(""),n($(" .delete-post-button",s)),o($(" .like-post-button",s)),new Noty({theme:"relax",text:"Post published!",type:"success",layout:"topRight",timeout:1500}).show()},error:function(t){console.log(t.responseText)}})}))},e=function(t){return $(`<li id="post-${t._id}">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t<po>0</po> <a class="like-post-button" href="/likes/toggle/?id=${t._id}&type=Post"><i class="fa-solid fa-thumbs-up"></i></a>\n\t\t\t\t\t\t</small>\n\t\t\t\t\t\t${t.content}\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t<a class="delete-post-button" href="/posts/destroy/${t._id}">X</a>\n\t\t\t\t\t\t</small>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<small>${t.user.name}</small>\n\t\t\t\t\t\t<div class="post-comments">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<form action="/comments/create" method="POST">\n\t\t\t\t\t\t\t\t<input type="text" name="content" placeholder="Add your comments here..." required>\n\t\t\t\t\t\t\t\t<input type="hidden" name="post" value="${t._id}">\n\t\t\t\t\t\t\t\t<input type="submit" value="Add Comment">\n\t\t\t\t\t\t\t</form> \n\t\t\t\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\t\t<div class="post-comments-list">\n\t\t\t\t\t\t\t\t<ul id="post-comments-${t._id}">\n\t\t\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</p>\n\t\t\t\t\t\n\t\t\t\t</li>`)},n=function(t){$(t).click((function(e){e.preventDefault(),$.ajax({type:"get",url:$(t).prop("href"),success:function(t){$(`#post-${t.data.post_id}`).remove(),new Noty({theme:"relax",text:"Post and associated Comments Deleted",type:"success",layout:"topRight",timeout:1500}).show()},error:function(t){console.log("Error",t.responseText)}})}))},o=function(t){$(t).click((function(e){e.preventDefault(),$.ajax({type:"get",url:$(t).prop("href"),success:function(t){if("Post"==t.data.type){$(`#post-${t.data.id} po`).text(t.data.len)}else{$(`#comment-${t.data.id} co`).text(t.data.len)}},error:function(t){console.log("Error",t.responseText)}})}))},s=function(){$("#display-post>ul>li").each((function(){let t=$(this),e=$(" .delete-post-button",t),s=$(" .like-post-button",t);o(s),n(e)}))};t(),s()}