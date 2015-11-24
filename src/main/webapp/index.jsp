<!--
  This is a home page of the application.
  This page will demonstrate ReactiveJS behaviour for progress bar.
  User need to select specific progress bar from "select list" and then click on one of the "button" to set the value of the specific progress bar.
  This page is depending on reactiveBar.js for js functions and reactiveBar.css for styling of various controls.
  Basic positive testcases for this page has been called from testIndex.jsp page, which needs to be explicitly call.
-->

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Reactive Progress Bars</title>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.js"></script>
		<script src="./js/reactive.js"></script>
		<script src="./js/reactiveBars.js"></script>
		<link rel="stylesheet" type="text/css" href="./css/reactiveBars.css">
	</head>
	<body style="background-color: lightbrown;">
	
		<div>
			<b>Click the buttons and witness the magic!</b>
		</div>
		<div><br></div>
	
		<div>Progress Bar - 1:
			<div id="progress1" class="progress">
				<span id="percent1" class="percent">0%</span>
				<div id="bar1" class="bar"
					style="background-color: skyblue; width: 0%; background-image: url(./images/pbar-ani.gif);"></div>
			</div>
		</div>
	
		<div><br></div>
	
		<div>Progress Bar - 2:
			<div id="progress2" class="progress">
				<span id="percent2" class="percent">0%</span>
				<div id="bar2" class="bar"
					style="background-color: skyblue; width: 0%; background-image: url(./images/pbar-ani.gif);"></div>
			</div>
		</div>
	
		<div><br></div>
	
		<div>Progress Bar - 3:
			<div id="progress3" class="progress">
				<span id="percent3" class="percent">0%</span>
				<div id="bar3" class="bar"
					style="background-color: skyblue; width: 0%; background-image: url(./images/pbar-ani.gif);"></div>
			</div>
		</div>
	
		<div><br></div>
	
		<div>
			Please Select : <select id="selectProgress" size="1" class="select">
				<option value="valueProgress1">Progress Bar - 1</option>
				<option value="valueProgress2">Progress Bar - 2</option>
				<option value="valueProgress3">Progress Bar - 3</option>
			</select> and Click :
			<button type='button' id="button-25" class="button" style="background-color: green;">-25</button>
			<button type='button' id="button-10" class="button" style="background-color: green;">-10</button>
			<button type='button' id="button10" class="button" style="background-color: green;">10</button>
			<button type='button' id="button25" class="button" style="background-color: green;">25</button>
		</div>
		
		<button type='submit' id="navigateToTestPage" onclick="window.location = 'testIndex.jsp';">Navigate to Test Page to test this page!</button>
	</body>
</html>