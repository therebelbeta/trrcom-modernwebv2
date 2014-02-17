var $$ = {};
$$.s = { // services
	init:function(page){
		if (!$$.m.initRan){
			$$.m.initRan = true;
			$(document).on('ready',function(){
				$$.m.initReady = true;
				console.log('before waypoints');
				$('.page-container').each(function(){
					var thisid = $(this).attr('id');
					console.log('waypoints'+thisid);
					$(this).waypoint(function(){
						console.log('scrolled to ' + thisid); 

						$$.m.nameOnly = true;
						window.location.hash = '/'+thisid;
					},{
				  	offset: '50%'
					});
				});
				$$.s.goto(page);
			});
			// on page load stuff here

		}
	},
	goto:function(page){
		var scroll = function(){
			$(document.body).animate({
	    	'scrollTop':   $('#'+page).offset().top-81
			}, 2000);
		};
		if($$.m.initReady && !$$.m.nameOnly){
			scroll();
		};
	}
};
$$.c = { // controllers
	main:function(){
		$$.s.init('main');
		$$.s.goto('main');
		$$.m.nameOnly = false;
		console.log('mainpage');
		// main page
	},
	stack:function(){
		$$.s.init('stack');
		$$.s.goto('stack');
		$$.m.nameOnly = false;
		console.log('stack');
		// stack
	},
	projects:function(){
		$$.s.init('projects');
		$$.s.goto('projects');
		$$.m.nameOnly = false;
		console.log('projects');
		// projects
	},
	contact:function(){
		$$.s.init('contact');
		$$.s.goto('contact');
		$$.m.nameOnly = false;
		console.log('contact');
		// contact form and links
	},
	catchall:function(){
		routie('/');
	}
};
$$.m = { // non-vue models
	initRan:false,
	initReady:false,
	nameOnly:false
};

routie('/',$$.c.main);
routie('/stack',$$.c.stack); 
routie('/projects',$$.c.projects); 
routie('/contact',$$.c.contact);
routie('*',$$.c.catchall);

