<!DOCTYPE HTML>
<!--
	ZeroFour by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Gangluff's Sound Board</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<!--[if lte IE 8]><script src="css/ie/html5shiv.js"></script><![endif]-->
		<script src="js/Template/jquery.min.js"></script>
		<script src="js/Template/jquery.dropotron.min.js"></script>
		<script src="js/Template/skel.min.js"></script>
		<script src="js/Template/skel-layers.min.js"></script>
		<script src="js/Template/init.js"></script>
		<script src="js/soundsFx.JS"></script>
		<script src="js/jquery-1.11.2.js"></script>
		<script src="js/soundBoardSetup.JS"></script>
		<script src="js/globals.JS"></script>
			
		<noscript>
			<link rel="stylesheet" href="css/skel.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-desktop.css" />
			<link rel="stylesheet" href="css/Table tune.css" />
		</noscript>
		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="css/ie/v9.css" /><![endif]-->
	</head>
	<body class="no-sidebar" onload="checkCookie()">

		<!-- Header Wrapper -->
			<div id="header-wrapper">
				<div class="container">
						
					<!-- Header -->
						<header id="header">
							<div class="inner">
							
								<!-- Logo -->
									<h1><a id="logo">Change Sounds</a></h1>
								
								<!-- Nav -->
									<nav id="nav">
											<ul>
												<li class="current_page_item">
													<a href="">Change Sounds</a>
													<ul>
														<li><a href="index.html">Sound Board</a></li>
													</ul>
												</li>
												<li onclick="toggle()"><button><a id="isMuted">Mute</a></button></li>
											</ul>
										</nav>
							
							</div>
						</header>

				</div>
			</div>
		
		<!-- Main Wrapper -->
			<div id="main-wrapper">
				<div class="wrapper style2">
					<div class="inner">
						<div class="container">
							<div id="content">

								<!-- Content -->
							
									<article>
										<header class="major">
											<h2>Log In</h2>
										</header>

										<!--<h3>More intriguing information</h3>-->
										<?php
								            $username=NULL;
								            $password=NULL;
								            if ($_SERVER["REQUEST_METHOD"] == "POST") {
								                $username = $_POST["username"];
								                $password = $_POST["password"];
								            } 
								        ?>

										<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
											Username: <br><input type="text" name="username"><br>
											Password: <br><input type="password" name="password"><br>
											<input type="submit">
										</form>

								        <?php
								            if ($username=="mgangluff"&&$password=="chemistry") {
								                header( 'Location: uploads.php' ) ;
								            }
								            else if ($_SERVER["REQUEST_METHOD"] == "POST") {
								                echo "<br><p>Invalid username or password.</p>";
								            }
								        ?>
								        <!-- Creates input field for number of sounds-->
										<tag id="writeSound"></tag><br>
										<tag id="saveBtn"></tag>
									
																				
									</article>
						
							</div>
						</div>
					</div>
				</div>
			</div>

		<!-- Footer Wrapper -->
		<div id="footer-wrapper">
			<footer id="footer" class="container">
<!--					<div class="row">-->
						<div class="12u">
<!--							<div id="copyright">-->
								<ul class="menu" align="center">
									<li>Written by Andrew Tu</li><li>Design Template: HTML5 UP</li>
								</ul>
<!--						</div>-->
						</div>
<!--					</div>-->
			</footer>
		</div>

	</body>
</html>