$(document).ready(function($) {
   //    var current = $('body').attr('class');
   //    // console.log('current='+current);
   //    // console.log('last='+$.cookie('last'));
   //    $("#nav").click(function(){
   //    $.cookie('last', current, { path: '/'});
   // });
   //    var subnavs = $.map($('#nav ul ul'), function(el){
   //       return $(el).parent().attr('class');
   //    });
   //    // console.log(subnavs);
   //    $("#nav ul ul").hide();
   // if($.cookie('last')==current){
   //    $("#nav ."+current+" > ul").show();
   // }else{
   //    $.each(subnavs, function(i, name){
   //       if($.cookie('last')==name){
   //             $("#nav ."+name+" > ul").show();
   //             $("#nav ."+name+" > ul").slideUp("slow");
   //          }
   //          if(current==name){
   //             $("#nav ."+name+" > ul").slideDown("slow");
   //          }
   //    });
   // }
   $('#nav ul').helyenav();
});