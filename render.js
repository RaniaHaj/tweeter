const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    let count = 1;
    for (let relpost of posts) {
      $("#posts").append(`<div class='post' data-id=${relpost.id}>
                <div class='post-text'>${relpost.text}</div>
                <div class='comments'></div>
                <input class="comments-input" placeholder="Add Comment">
                <button class=AddButton>Comment</button>
                <button class=delete>Delete Post</button>
            </div>`);

      for (let comment of relpost.comments) {
        $(`[data-id=${relpost.id}]>.comments`).append(
          `<div class=commentId data-id=${comment.id}><span class=delete-comment>X</span>${comment.text}</div> `
        );
      }
      count++;
    }
  };

  return { renderPosts: renderPosts };
};
