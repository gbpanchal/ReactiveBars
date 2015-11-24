<!--
  This is a page to invoke unit testcases in reactiveBar.js to test reactive behaviour of index.jsp page.
  This file is having logic of ReactiveJS and testcases for the same at the end.
-->

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Test Reactive Progress Bars</title>
		<jsp:include page="index.jsp" />
	</head>
	<body style="background-color: lightbrown;" onload="setUp()">
	<button type='button' id="testProgressBar1" onclick="testUpdateProgress1ValueBy10()">Click to Test Progress Bar - 1</button>
	<button type='button' id="testProgressBar2" onclick="testUpdateProgress2ValueBy10()">Click to Test Progress Bar - 2</button>
	<button type='button' id="testProgressBar3" onclick="testUpdateProgress3ValueBy10()">Click to Test Progress Bar - 3</button>
	</body>
</html>