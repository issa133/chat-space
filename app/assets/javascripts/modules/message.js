$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class=".MessageArea-box" data-message-id=${message.id}>
          <div class=".MessageInfo">
            <div class="Message__name">
              ${message.user_name}
            </div>
            <div class="Message__time">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__text">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageArea-box" data-message-id=${message.id}>
        <div class="MessageInfo">
          <div class="Message__name">
            ${message.user_name}
          </div>
          <div class="Message__time">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      console.log(data)
      $('.Chatmain-message').append(html);   
      $('.Chatmain-message').animate({ scrollTop: $('.Chatmain-message')[0].scrollHeight});
      $('Form')[0].reset();
      $('.Form__submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  });
});