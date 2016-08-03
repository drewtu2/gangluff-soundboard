<!DOCTYPE HTML>
<!--
	Design Scheme by ZeroFour by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<!--
	Sound Board programmed by Andrew Tu
	2014-2015 Senior
	Period 1 AP Chemistry
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
		<script src="js/zounds.JS"></script>
		<script src="js/globals.JS"></script>
		<script src="js/soundBoardSetup.JS"></script>
		<script src="js/jquery-1.11.2.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-desktop.css" />
			<link rel="stylesheet" href="css/Table tune.css" />
		</noscript>
		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="css/ie/v9.css" /><![endif]-->
	</head>
	<body class="no-sidebar">

		<!-- Header Wrapper -->
			<div id="header-wrapper">
				<div class="container">
					<!-- Header -->
						<header id="header">
							<div class="inner">
							
								<!-- Logo -->
									<h1><a id="logo">Gangluff SoundBoard</a></h1>
								<!-- Nav -->
										<nav id="nav">
											<ul>
												<li class="current_page_item">
													<a href="">Gangluff Swag</a>
													<ul>
														<li><a href="login.php">Change Sounds</a></li>
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
				<div class="wrapper style3">
					<!--Get Raw input-->
					<script> 
						document.onkeydown = function myKeyPress(input) {
							//Get input into keynum
							if(window.event){ // IE					
								keynum = input.keyCode;
							}
							else{
								if(e.which){ // Netscape/Firefox/Opera					
									keynum = input.which;
								}
							}
							soundControl();
						}
					</script>

                    <?php
                        $nameArray=array();
                        $soundArray=array();

                        $names = fopen("names.txt","r");
                        $sounds = fopen("sounds.txt","r");

                        $index=0;

                        while(!feof($sounds)) {
                            $sound=fgets($sounds);
                            $name=fgets($names);

                            $nameArray[$index]=trim($name);
                            $soundArray[$index]=trim($sound);

                            $index++;
                        }
                    ?>

                    <!-- Table full of buttons -->
					<table align="center" id = "button board"> <!--Table is 100% of screen-->
						 <tr>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[0];?>')"></button>
                                    <p id="label"><?php echo $nameArray[0];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[1];?>')"></button>
                                    <p id="label"><?php echo $nameArray[1];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[2];?>')"></button>
                                    <p id="label"><?php echo $nameArray[2];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[3];?>')"></button>
                                    <p id="label"><?php echo $nameArray[3];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[4];?>')"></button>
                                    <p id="label"><?php echo $nameArray[4];?></p>
                                </div>
                            </td>
						</tr>

						 <tr>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[5];?>')"></button>
                                    <p id="label"><?php echo $nameArray[5];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[6];?>')"></button>
                                    <p id="label"><?php echo $nameArray[6];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[7];?>')"></button>
                                    <p id="label"><?php echo $nameArray[7];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[8];?>')"></button>
                                    <p id="label"><?php echo $nameArray[8];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[9];?>')"></button>
                                    <p id="label"><?php echo $nameArray[9];?></p>
                                </div>
                            </td>
						</tr>

						 <tr>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[10];?>')"></button>
                                    <p id="label"><?php echo $nameArray[10];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[11];?>')"></button>
                                    <p id="label"><?php echo $nameArray[11];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[12];?>')"></button>
                                    <p id="label"><?php echo $nameArray[12];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[13];?>')"></button>
                                    <p id="label"><?php echo $nameArray[13];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[14];?>')"></button>
                                    <p id="label"><?php echo $nameArray[14];?></p>
                                </div>
                            </td>
						</tr>

						 <tr>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[15];?>')"></button>
                                    <p id="label"><?php echo $nameArray[15];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[16];?>')"></button>
                                    <p id="label"><?php echo $nameArray[16];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[17];?>')"></button>
                                    <p id="label"><?php echo $nameArray[17];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[18];?>')"></button>
                                    <p id="label"><?php echo $nameArray[18];?></p>
                                </div>
                            </td>
							<td>
                                <div align="center">
                                    <button class="btn" onclick="aud_play_pause('Sound Files/<?php echo $soundArray[19];?>')"></button>
                                    <p id="label"><?php echo $nameArray[19];?></p>
                                </div>
                            </td>
						</tr>
		
					</table>

				</div>
			</div>

		<!-- Footer Wrapper -->
			<div id="footer-wrapper">
				<footer id="footer" class="container">
<!--					<div class="row">-->
							<div class="12u">
	<!--							<div id="copyright">-->
									<ul class="menu" style="margin-left: auto;margin-right: auto">
										<li>Written by Andrew Tu</li><li>Design Template: HTML5 UP</li>
									</ul>
	<!--						</div>-->
							</div>
<!--					</div>-->
				</footer>
			</div>

	</body>
</html>


<!-- Audio TagFiles are located in the folder "Sound Files" -->
	<audio id="Audio" type="audio/mp3">
		 Your user agent does not support the HTML5 Audio element.
	</audio>