	
	var check = window.localStorage.length;
	if(check == 0){
		var init_set = confirm("Welcome to PJ Masks weekly sheet!");
		inti_mon = new Date().getMonth();
		inti_day = new Date().getDate();
		if(init_set){
			get_local_storage();
		}else{
			get_local_storage();
		}
	}

		//location.reload();
    	//Initialize 
    	const EVENT = 9;
    	var money;
    	localStorage.monSlide = 0;
    	localStorage.tueSlide = 0;
    	localStorage.wenSlide = 0;
    	localStorage.thuSlide = 0;
    	localStorage.friSlide = 0;
    	localStorage.satSlide = 0;
    	localStorage.sunSlide = 0;
    	//localStorage.monCount = 'NaN'

    	$('#gifts').height($('.carousel-item').height());

    	var myCarousel = $('.daily_carousel');
    	myCarousel.each(function(i,c){
    	var carousel = new bootstrap.Carousel(c,{
    			pause: true,
    			interval:false
    		});

    	});

    	get_local_storage();

		//Get the current date
    	var current_date = new Date().getDay();

    	var date_card = {'1':'mon_card', '2':'tue_card', '3':'wen_card', '4':'thu_card', '5':'fri_card','6':'sat_card', '0':'sun_card'};
    	$.each(date_card,function(key,val){
    		if(current_date == 0){

    		}else{
	    		if(key <= current_date && key !=0){
	    			$('#'+val).css('opacity',1);
	    			$('#'+val).find('button.undo').addClass('happy');
	    			$('#'+val).find('button.carousel-control-next').removeClass('hide');
	    			$('#'+val).find('button.carousel-control-prev').removeClass('hide');

	    		}else{
	    			$('#'+val).css('opacity',0.4);
	    			$('#'+val).find('button').removeClass('happy').addClass('disabled');
	    			$('#'+val).find('button.carousel-control-next').addClass('hide');
	    			$('#'+val).find('button.carousel-control-prev').addClass('hide');
	    		}
    		}
    	})

    	//get_local_storage();

   		function get_local_storage(){

			if (typeof(Storage) != "undefined") {

			money = (parseFloat(localStorage.clickcount)/2).toFixed(2);
			$('#total_money').text(money);
			if(localStorage.spentMoney == 'NaN' || localStorage.spentMoney < 0 || localStorage.spentMoney == undefined){
				localStorage.spentMoney = 0;
			}
			$('#spent_money').text('$'+parseFloat(localStorage.spentMoney).toFixed(2));
			$('#left_money').text('$'+(money-parseFloat(localStorage.spentMoney)).toFixed(2));
			
			// var text= "Not set yet";
			// if(localStorage.goal == null || localStorage.goal == ""){
			// 	$('#info_card').find('i').addClass('hide');
			// }else{
			// 	text = localStorage.goal;
			// 	$('#info_card').find('i').removeClass('hide');
			// }
			// $('#goal').text(text + " ");

			// var prize_text = "Not set yet";
			// console.log(localStorage.prize)
			// if(localStorage.prize == null || localStorage.prize == ""){
			// }else{
			// 	prize_text = localStorage.prize;
			// }
			// $('#prize').text(prize_text);


			if(localStorage.clickcount == 'NaN' || localStorage.clickcount < 0 || localStorage.clickcount == undefined){
    		localStorage.clickcount = 0;
	    	}
			if(localStorage.monCount == 'NaN' || localStorage.monCount < 0 || localStorage.monCount == undefined){
	    		localStorage.monCount = 0;
	    	}
	    	if(localStorage.tueCount == 'NaN' || localStorage.tueCount < 0 || localStorage.tueCount == undefined){
	    		localStorage.tueCount = 0;
	    	}
	    	if(localStorage.wenCount == 'NaN' || localStorage.wenCount < 0 || localStorage.wenCount == undefined){
	    		localStorage.wenCount = 0;
	    	}
	    	if(localStorage.thuCount == 'NaN' || localStorage.thuCount < 0 || localStorage.thuCount == undefined){
	    		localStorage.thuCount = 0;
	    	}
	    	if(localStorage.friCount == 'NaN' || localStorage.friCount < 0 || localStorage.friCount == undefined){
	    		localStorage.friCount = 0;
	    	}
	    	if(localStorage.satCount == 'NaN' || localStorage.satCount < 0 || localStorage.satCount == undefined){
	    		localStorage.satCount = 0;
	    	}
	    	if(localStorage.sunCount == 'NaN' || localStorage.sunCount < 0 || localStorage.sunCount == undefined){
	    		localStorage.sunCount = 0;
	    	}
			
			  // Retrieve	
			 var active_slides = [localStorage.monSlide,localStorage.tueSlide, localStorage.wenSlide, localStorage.thuSlide, localStorage.friSlide, localStorage.satSlide, localStorage.sunSlide];
			    var span_id = [];
			    var week = ['mon_carousel','tue_carousel', 'wen_carousel', 'thu_carousel', 'fri_carousel', 'sat_carousel', 'sun_carousel']
			    week.forEach(function(w,i){
			    	$("#"+w).find('h5 span').each(function(k,span){
			    		span_id.push(span.id);
			    	});

			    	$("#"+w).find('div.carousel-item').each(function(j,d){
					if(j == active_slides[i]){
						$(this).addClass('active');
					}else{
						$(this).removeClass('active');
					}
				});
			    })


			    span_id.forEach((s) => {
			    	document.getElementById(s).className = localStorage.getItem(s);
			    	if(localStorage.getItem(s) == null){
			    		localStorage.setItem(s, "happy_span hide");
			    	}
			    	var name = s.toString().split('_')[2];
			    	if(localStorage.getItem(s).includes("hide") && $('#'+s).parent().parent().parent().attr('class').includes('active')){
			    		switch(name){
			    			case 'mon':
				    			$('#mon_carousel').parent().find('button.sad.mon_btn').addClass('disabled');
				    			$('#mon_carousel').parent().find('button.happy.mon_btn').removeClass('disabled');
				    			break;
			    			case 'tue':
			    				$('#tue_carousel').parent().find('button.sad.tue_btn').addClass('disabled');
			    				$('#tue_carousel').parent().find('button.happy.tue_btn').removeClass('disabled');
			    				break;
			    			case 'wen':
			    				$('#wen_carousel').parent().find('button.sad.wen_btn').addClass('disabled');
			    				$('#wen_carousel').parent().find('button.happy.wen_btn').removeClass('disabled');
			    				break;
			    			case 'thu':
			    				$('#thu_carousel').parent().find('button.sad.thu_btn').addClass('disabled');
			    				$('#the_carousel').parent().find('button.happy.thu_btn').removeClass('disabled');
			    				break;
			    			case 'fri':
			    				$('#fri_carousel').parent().find('button.sad.fri_btn').addClass('disabled');
			    				$('#fri_carousel').parent().find('button.happy.fri_btn').removeClass('disabled');
			    				break;
			    			case 'sat':
			    				$('#sat_carousel').parent().find('button.sad.sat_btn').addClass('disabled');
			    				$('#sat_carousel').parent().find('button.happy.sat_btn').removeClass('disabled');
			    				break;
			    			case 'sun':
			    				$('#sun_carousel').parent().find('button.sad.sun_btn').addClass('disabled');
			    				$('#sun_carousel').parent().find('button.happy.sun_btn').removeClass('disabled');
			    				break;
			    		}

			    	}else if(!localStorage.getItem(s).includes("hide") && $('#'+s).parent().parent().parent().attr('class').includes('active')) 
			    	 {
			    		switch(name){
			    			case 'mon':
				    			$('#mon_carousel').parent().find('button.sad.mon_btn').removeClass('disabled');
				    			$('#mon_carousel').parent().find('button.happy.mon_btn').addClass('disabled');
				    			break;
			    			case 'tue':
			    				$('#tue_carousel').parent().find('button.sad.tue_btn').removeClass('disabled');
			    				$('#tue_carousel').parent().find('button.happy.tue_btn').addClass('disabled');
			    				break;
			    			case 'wen':
			    				$('#wen_carousel').parent().find('button.sad.wen_btn').removeClass('disabled');
			    				$('#wen_carousel').parent().find('button.happy.wen_btn').addClass('disabled');
			    				break;
			    			case 'thu':
			    				$('#thu_carousel').parent().find('button.sad.thu_btn').removeClass('disabled');
			    				$('#thu_carousel').parent().find('button.happy.thu_btn').addClass('disabled');
			    				break;
			    			case 'fri':
			    				$('#fri_carousel').parent().find('button.sad.fri_btn').removeClass('disabled');
			    				$('#fri_carousel').parent().find('button.happy.fri_btn').addClass('disabled');
			    				break;
			    			case 'sat':
			    				$('#sat_carousel').parent().find('button.sad.sat_btn').removeClass('disabled');
			    				$('#sat_carousel').parent().find('button.happy.sat_btn').addClass('disabled');
			    				break;
			    			case 'sun':
			    				$('#sun_carousel').parent().find('button.sad.sun_btn').removeClass('disabled');
			    				$('#sun_carousel').parent().find('button.happy.sun_btn').addClass('disabled');
			    				break;
			    		}

			    	}
			    })
			    
			} else {
				console.log("no");
			   // document.getElementById("full_week").innerHTML = "Sorry, your browser does not support Web Storage...";
			}
			$("#weekly_stars").html("");
			if(localStorage.clickcount){
				for (var i = 0; i < localStorage.clickcount; i++){
					$('#weekly_stars').append('<span class="happy_span"><i class="fas fa-heart fa-2x"></i></span> ');
				}
			}
	
			daily_star(localStorage.monCount, "mon_stars");
			daily_star(localStorage.tueCount, "tue_stars");
			daily_star(localStorage.wenCount, "wen_stars");
			daily_star(localStorage.thuCount, "thu_stars");
			daily_star(localStorage.friCount, "fri_stars");
			daily_star(localStorage.satCount, "sat_stars");
			daily_star(localStorage.sunCount, "sun_stars");


			function daily_star(store, id){
				$('#'+id).html("");
				if(store){
					for(var i = 0; i < store; i++){
						$('#'+id).append('<i class="fas fa-heart"></i> ');
					}
				}
			}

		}


    	function save_on_local_storage(classes,id,count, daily_count) { 
			// Check browser support
			if (typeof(Storage) != "undefined") {
			    // Store
			    localStorage.setItem(id, classes);
			} else {
			  //  document.getElementById(id).innerHTML = "Sorry, your browser does not support Web Storage...";
			}
			
			if(count){
				localStorage.clickcount = Number(localStorage.clickcount) + 1;
			}else if(localStorage.clickcount > 0) {
				localStorage.clickcount = Number(localStorage.clickcount) - 1;
			}

			console.log(daily_count);
			console.log(localStorage.tueCount);
			switch(daily_count){
				case "mon+":
					localStorage.monCount = Number(localStorage.monCount) + 1;
					break;
				case "mon-":
					localStorage.monCount = Number(localStorage.monCount) - 1;
					break;
				case "tue+":
					localStorage.tueCount = Number(localStorage.tueCount) + 1;
					break;
				case "tue-":
					localStorage.tueCount = Number(localStorage.tueCount) - 1;
					break;
				case "wen+":
					localStorage.wenCount = Number(localStorage.wenCount) + 1;
					break;
				case "wen-":
					localStorage.wenCount = Number(localStorage.wenCount) - 1;
					break;
				case "thu+":
					localStorage.thuCount = Number(localStorage.thuCount) + 1;
					break;
				case "thu-":
					localStorage.thuCount = Number(localStorage.thuCount) - 1;
					break;
				case "fri+":
					localStorage.friCount = Number(localStorage.friCount) + 1;
					break;
				case "fri-":
					localStorage.friCount = Number(localStorage.friCount) - 1;
					break;
				case "sat+":
					localStorage.satCount = Number(localStorage.satCount) + 1;
					break;
				case "sat-":
					localStorage.satCount = Number(localStorage.satCount) - 1;
					break;
				case "sun+":
					localStorage.sunCount = Number(localStorage.sunCount) + 1;
					break;
				case "sun-":
					localStorage.sunCount = Number(localStorage.sunCount) - 1;
					break;

			}
			console.log(localStorage.tueCount);

		}

		////////////////////////////////////////////////////////////////////////////////////////////
		//This function is to add or remove the disabled class to happy and sad buttons dynamically 
    	//based on the span class.
    	//If span's classes includes hide, then remove disabled class from the happy button.
    	//Else add disable class to the happy buttons. 
    	//Parameters: index is to determine the current slide, arrow is to determine the slide
    	//coordinator that triger this event
		////////////////////////////////////////////////////////////////////////////////////////////
    	function check_btn_status(index, arrow){
			arrow.parent().find('div .carousel-item').each(function(i,d){
    			if(i == (index)){
    				if($(this).find('span:first').attr('class').includes('hide')){
    					$(this).parent().parent().parent().find('button.happy').removeClass('disabled');
    					$(this).parent().parent().parent().find('button.sad').addClass('disabled');
    				}else{
    					$(this).parent().parent().parent().find('button.happy').addClass('disabled');
    					$(this).parent().parent().parent().find('button.sad').removeClass('disabled');
    				}

    			}
    			
    		})
		}

		// function set_goal(){
		// 	var text;
		// 	var goal = prompt("Please enter your gaol for this week", "50");
		// 	if(goal == null || goal == ""){
		// 		text= "Not set yet";
		// 		$('#info_card').find('i').addClass('hide');
		// 	}else{
		// 		text = goal;
		// 		$('#info_card').find('i').removeClass('hide');	
		// 	}
		// 	localStorage.goal = goal;
		// 	$('#goal').text(text + " ");
		// }

		// function set_gift(){
		// 	var text;
		// 	var prize = prompt("Please enter the prize for this week", "");
		// 	console.log(prize == "")
		// 	if(prize == null || prize == ""){
		// 		text= "Not set yet";
		// 	}else{
		// 		text = prize;
		// 	}
		// 	localStorage.prize = prize;
		// 	$('#prize').text(text);
		// }


		function shopping(){
			var price = prompt("Please enter the price", money);

			var left = money - Number(localStorage.spentMoney);
			if(price == null){
				return;
			}
			if(price == ""){
				alert("You haven't filled the price!\nPress Ok to continue");
				shopping();
			}else{
				if(left < parseFloat(price)){
					alert("Oops!\nSeems you don't have enough money...\nTry to earn more hearts!")
				}else{
					left = (left-Number(price)).toFixed(2);
					localStorage.spentMoney = price;
					$('#left_money').text('$'+left);
					$('#spent_money').text('$'+price);
					$('#shopping_sound')[0].currentTime=0;
					$('#shopping_sound')[0].play();
					$("#dollar").addClass('animate');
				}
				
			}
			
			
		}

		$("#dollar").on('animationed',function(){
			$(this).removeClass('animate');
		});


		function shopping_return(){
			var price = prompt("Please enter the price of your return", " ");
			var left = money - Number(localStorage.spentMoney);
			if(price == null){
				return;
			}
			if(price == ""){
				alert("You haven't filled the price!\nPress Ok to continue");
				shopping_return();
			}else{
				if(money < parseFloat(price) || Number(localStorage.spentMoney) <= 0){
					alert("Emmmmm.....\nSeems the price is not correct...\nPlease check it again!")
				}else{
					left = (left+Number(price)).toFixed(2);
					localStorage.spentMoney = money-left;
					$('#left_money').text('$'+left);
					$('#spent_money').text('$'+(money-left).toFixed(2));
					$('#shopping_sound')[0].currentTime=0;
					$('#shopping_sound')[0].play();
				}
				
			}

		}


		function clear_storage() {
			var confirmed = confirm("Are you sure to reset everything?");
			if(confirmed){
				localStorage.clear();
				get_local_storage();
				location.reload();

			}
		}






		//////////////////////////////////////
		//Button click events
		//////////////////////////////////////

		// Date hash to store the botton class(key) and the carousel id(value)
		var date = {'mon_btn':'mon_carousel', 'tue_btn':'tue_carousel', 'wen_btn':'wen_carousel', 'thu_btn':'thu_carousel', 'fri_btn':'fri_carousel', 'sat_btn':'sat_carousel', 'sun_btn':'sun_carousel'};

		//Happy face buttons on click
    	$(".happy").click(function(){
  			$(this).parent().find('button.sad').removeClass('disabled');
  			var classes;
  			var id
  			var count = true;
  			var daily_count;
  			var this_btn = $(this);
  			var active
  			$.each(date,function(key,val){
  				if(this_btn.attr('class').includes(key)){
  					$("#"+ val +" div.active").find('span:first').removeClass('hide');
  					classes = $("#"+ val +" div.active").find('span:first').attr('class');
  					id = $("#"+ val +" div.active").find('span:first').attr('id');
  					switch(val){
  						case "mon_carousel":
  							localStorage.monSlide = $("#"+ val +" div.active").index();
  							daily_count = "mon+";
  							break;
  						case "tue_carousel":
  							localStorage.tueSlide = $("#"+ val +" div.active").index();
  							daily_count = "tue+";
  							break;
  						case "wen_carousel":
  							localStorage.wenSlide = $("#"+ val +" div.active").index();
  							daily_count = "wen+";
  							break;
  						case "thu_carousel":
  							localStorage.thuSlide = $("#"+ val +" div.active").index();
  							daily_count = "thu+";
  							break;
  						case "fri_carousel":
  							localStorage.friSlide = $("#"+ val +" div.active").index();
  							daily_count = "fri+";
  							break;
  						case "sat_carousel":
  							localStorage.satSlide = $("#"+ val +" div.active").index();
  							daily_count = "sat+";
  							break;
  						case "sun_carousel":
  							localStorage.sunSlide = $("#"+ val +" div.active").index();
  							daily_count = "sun+";
  							break;

  					}
  				}

  			});
  			$('#hooray_sound')[0].currentTime=0;
			$('#hooray_sound')[0].play();
  			save_on_local_storage(classes,id,count,daily_count);
  			get_local_storage();
  			
    	});

    	//Sad face buttons on click
    	$(".sad").click(function(){
    		if(money - parseFloat(localStorage.spentMoney) < 0.5){
    			alert("Sorry, you don't have enough money to cancel a heart\nPlease return a shopping item");
    			return;
    		}
  			$(this).parent().find('button:first').removeClass('disabled');
  			var classes;
    		var id;
    		var count = false
    		var daily_count;
			var this_btn = $(this);
			var active
    		$.each(date,function(key,val){
  				if(this_btn.attr('class').includes(key)){
  					$("#"+ val +" div.active").find('span:first').addClass('hide');
  					classes = $("#"+ val +" div.active").find('span:first').attr('class');
  					id = $("#"+ val +" div.active").find('span:first').attr('id');
  					switch(val){
  						case "mon_carousel":
  							localStorage.monSlide = $("#"+ val +" div.active").index();
  							daily_count = "mon-";
  							break;
  						case "tue_carousel":
  							localStorage.tueSlide = $("#"+ val +" div.active").index();
  							daily_count = "tue-";
  							break;
  						case "wen_carousel":
  							localStorage.wenSlide = $("#"+ val +" div.active").index();
  							daily_count = "wen-";
  							break;
  						case "thu_carousel":
  							localStorage.thuSlide = $("#"+ val +" div.active").index();
  							daily_count = "thu-";
  							break;
  						case "fri_carousel":
  							localStorage.friSlide = $("#"+ val +" div.active").index();
  							daily_count = "fri-";
  							break;
  						case "sat_carousel":
  							localStorage.satSlide = $("#"+ val +" div.active").index();
  							daily_count = "sat-";
  							break;
  						case "sun_carousel":
	  						localStorage.sunSlide = $("#"+ val +" div.active").index();
	  						daily_count = "sun-"
  							break;
  					}

  				}
  			});
  			$('#sad_sound')[0].currentTime=0;
			$('#sad_sound')[0].play();
    		save_on_local_storage(classes, id, count, daily_count);
    		get_local_storage();

    	});



    	//Click on the slide coordinators
    	//Call function check_btn_status to dynamically modify the button classes
    	$('.carousel-control-prev').click(function(){
    		var index = $(this).parent().find('div.active').index();
    		if(index == 0){
    			index = EVENT;
    		}
    		index -= 1;
    		check_btn_status(index, $(this)); //call function to modify the button class

    	})


    	$('.carousel-control-next').click(function(){
    		var index = $(this).parent().find('div.active').index();
    		if(index == (EVENT-1)){
    			index = -1;
    		}
    		index += 1
    		check_btn_status(index, $(this)); //call function to modify the button class
    		
    	});







