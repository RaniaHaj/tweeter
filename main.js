const tweeter = Tweeter();
const renderer = Renderer();
const postElementId = function (reference) {
  return reference.closest(".post").data().id;
};

renderer.renderPosts(tweeter.getPosts());

const post = function () {
  tweeter.addPost($("#input").val());
  $("#input").val(" ");
  renderer.renderPosts(tweeter.getPosts());
};

$("#posts").on("click", ".delete", function () {
  let postId = postElementId($(this));
  tweeter.removePost(postId);
  renderer.renderPosts(tweeter.getPosts());
});
$("#posts").on("click", ".AddButton", function () {
  let postId = postElementId($(this));
  let commentText = $(this).siblings(".comments-input").val();
  tweeter.addComment(postId, commentText);
  renderer.renderPosts(tweeter.getPosts());
});
$("#posts").on("click", ".delete-comment", function () {
  let postId = postElementId($(this));
  let commentId = $(this).closest(".commentId").data().id;
  tweeter.removeComment(postId, commentId);
  renderer.renderPosts(tweeter.getPosts());
});
