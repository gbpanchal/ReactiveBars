/**
 * This is a js file for index.jsp page.
 * This file is having logic of ReactiveJS and basic positive testcases for the same at the end.
 */

/* Reactive variable declaration and initial value assignment */
var valueProgress1 = $R.state(0);
var valueProgress2 = $R.state(0);
var valueProgress3 = $R.state(0);

$(function reactiveBars() {
        
		/*** REACTIVE section of the script is starting from here ***/
	
        var setValueProgress1 = $R(function bar1(valueProgress1) {
			
        	a = parseInt($("#percent1").text().trim().substring(0, ($("#percent1").text().trim().length - 1))) + valueProgress1;
        	if(a >= 0 && a <= 100) {
        		$("#bar1").css("width", a + "%");
        		$("#percent1").text(a + "%");
        		$("#bar1").css("background-color", "skyblue");
        		$("#bar1").css("background-image", "url(./images/pbar-ani.gif)");
        		progress(a, $('#bar1'));
        	} else if(a > 100) {
        		$("#bar1").css("width", "100%");
        		$("#bar1").css("background-color", "red");
        		$("#bar1").css("background-image", "url(./images/pbar-ani2.gif)");
        		$("#percent1").text(a + "%");
        		progress(100, $('#bar1'));
        	} else {
        		$("#bar1").css("width", "0%");
        		$("#percent1").text("0%");
        		progress(0, $('#bar1'));
        	}
        });
        
        var setValueProgress2 = $R(function bar2(valueProgress2) {
        	a = parseInt($("#percent2").text().trim().substring(0, ($("#percent2").text().trim().length - 1))) + valueProgress2;
        	if(a >= 0 && a <= 100) {
        		$("#bar2").css("width", a + "%");
        		$("#percent2").text(a + "%");
        		$("#bar2").css("background-color", "skyblue");
        		$("#bar2").css("background-image", "url(./images/pbar-ani.gif)");
        	} else if(a > 100) {
        		$("#bar2").css("width", "100%");
        		$("#bar2").css("background-color", "red");
        		$("#bar2").css("background-image", "url(./images/pbar-ani2.gif)");
        		$("#percent2").text(a + "%");
        	} else {
        		$("#bar2").css("width", "0%");
        		$("#percent2").text("0%");
        	}
        });
        
        var setValueProgress3 = $R(function bar3(valueProgress3) {
        	a = parseInt($("#percent3").text().trim().substring(0, ($("#percent3").text().trim().length - 1))) + valueProgress3;
        	if(a >= 0 && a <= 100) {
        		$("#bar3").css("width", a + "%");
        		$("#percent3").text(a + "%");
        		$("#bar3").css("background-color", "skyblue");
        		$("#bar3").css("background-image", "url(./images/pbar-ani.gif)");
        	} else if(a > 100) {
        		$("#bar3").css("width", "100%");
        		$("#bar3").css("background-color", "red");
        		$("#bar3").css("background-image", "url(./images/pbar-ani2.gif)");
        		$("#percent3").text(a + "%");
        	} else {
        		$("#bar3").css("width", "0%");
        		$("#percent3").text("0%");
        	}
        });
       
        setValueProgress1.bindTo(valueProgress1);
        setValueProgress2.bindTo(valueProgress2);
        setValueProgress3.bindTo(valueProgress3);
        
        /** Following method is called when any of the button clicked on index.jsp page. 
         * This will invoke the reactive behaviour, as it is setting the value of the reactive variable 
         * */
        $("button").on("click", function updateBars(e) {
			var buttonValue = parseInt($( this ).text());
			if(($("#selectProgress").val()) == 'valueProgress1') {
				valueProgress1.set(buttonValue);
			} else if(($("#selectProgress").val()) == 'valueProgress2') {
				valueProgress2.set(buttonValue);
			} else if(($("#selectProgress").val()) == 'valueProgress3') {
				valueProgress3.set(buttonValue);
			}
        });
        
        /*** REACTIVE section of the script is ending here ***/
        
        /* Method to  smoothly move progress bar*/
        function progress(percent, $element) {
            var progressBarWidth = percent * $element.width() / 100;
            $element.find('div').animate({ width: progressBarWidth }, 100);
        }
        
        /* Utility method to analyze all properties of the object */
        function objToString (obj) {
            var str = '';
            for (var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    str += p + '::' + obj[p] + '\n';
                }
            }
            return str;
        }
    });


/** Unit testcases to test above functions 
 * Following are very basic positive testcases. MAny other testcases need to be written to cover various scenarios, 
 * like, color/image change after 100%, lowest progress value can be "0%", etc.
 * **/
function setUp(){
	$("#button-25").prop("disabled", true);
	$("#button-10").prop("disabled", true);
	$("#button10").prop("disabled", true);
	$("#button25").prop("disabled", true);
	
	$("#button-25").css("background-color", "grey");
	$("#button-10").css("background-color", "grey");
	$("#button10").css("background-color", "grey");
	$("#button25").css("background-color", "grey");
	
	$("#selectProgress").prop("readonly", true);
	$("#navigateToTestPage").hide();
}

function testUpdateProgress1ValueBy10()
{
	setUp();
	var expectedValue = ["10%", "0%", "0%"];
	$("#selectProgress").val("valueProgress1");
	valueProgress1.set(10);
	var actualValue = [$("#percent1").text(), $("#percent2").text(), $("#percent3").text()];
	alert("expectedValue : " + expectedValue + "\n" +
		  "actualValue   : " + actualValue);
	tearDown();
}

function testUpdateProgress2ValueBy10()
{
	setUp();
	var expectedValue = ["0%", "10%", "0%"];
	$("#selectProgress").val("valueProgress2");
	valueProgress2.set(10);
	var actualValue = [$("#percent1").text(), $("#percent2").text(), $("#percent3").text()];
	alert("expectedValue : " + expectedValue + "\n" +
		  "actualValue   : " + actualValue);
	tearDown();
}

function testUpdateProgress3ValueBy10()
{
	setUp();
	var expectedValue = ["0%", "0%", "10%"];
	$("#selectProgress").val("valueProgress3");
	valueProgress3.set(10);
	var actualValue = [$("#percent1").text(), $("#percent2").text(), $("#percent3").text()];
	alert("expectedValue : " + expectedValue + "\n" +
		  "actualValue   : " + actualValue);
	tearDown();
}

function tearDown(){
	valueProgress1.set(0);
	valueProgress2.set(0);
	valueProgress3.set(0);
}

