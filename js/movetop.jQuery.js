jQuery.fn.movetop=function(title,options){myoptions=jQuery.extend({width:80,minusTopOffset:10,minusLeftOffset:20,background:"#4F7ABE",color:'#ffffff',border:"1px solid blue"},options);var element=this;$(this).click(function(){$('html, body').animate({scrollTop:0},'slow');});$(window).load(function(){$(element).html(title).width(myoptions.width);positionElement();$(window).bind("resize scroll",function(){positionElement();});function positionElement(){var windowHeight=$(window).height();var windowWidth=$(window).width();var elementHeight=$(element).height();$(element).css({"position":"absolute","cursor":"pointer","top":windowHeight+ $(window).scrollTop()- elementHeight- myoptions.minusTopOffset- 32,"left":windowWidth- myoptions.width- myoptions.minusLeftOffset,"z-index":100,"text-align":"center","background":myoptions.background,"color":myoptions.color,"border":myoptions.border,"padding":"3px 5px 3px 5px","font-weight":"bold","opacity":0.4});}});};