$(function(){
  $('body').fadeIn(2300);
});

$("#new").click(function () {
  $(".container").append('<div id="card" class="newcard"><img alt="woman_in_glasses" class="img-responsive" src="images/build/woman.jpg"><h6 class="date">nowember 26, 2017</h6><textarea style="border:none" rows="3" cols="16" id="input"></textarea><img alt="profile_photo" class="img-responsive" id="profile" src="images/build/profile.jpg"></div>');
  	$(".newcard").fadeIn('slow',function(){
  $(this).animate({'top': '-=25px'}, 2500);
});
});


$("#card , .label").fadeIn('slow',function(){
  $(this).animate({'top': '-=25px'}, 2500);
});



















