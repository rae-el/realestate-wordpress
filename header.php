<!DOCTYPE html>
<html lang="en">
<head>
	<title> Brian White <?php wp_title( '|', true, 'left' ); ?> </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php
	wp_body_open();
	?>
	<header>
		<section class="pre-header">
			<nav>
				<ul><li class="contact-info">
					<a id="pre-header-name" href="/wordpress">BrianWhite.</a>
					<a href="mailto:groupw@telus.net">groupw@telus.net</a>
					<a href="tel:(604)961-4104">(604)961-4104</a>
				</li></ul>
			</nav>
		</section>
		<section class="menu-area">
			<nav class="navbar">
				<div class=hamburger>
					<i class="fa-solid fa-bars"></i>
				</div>
				<ul class="nav-menu">
					<li class="nav-item">
						<a href="/wordpress/residential" class="nav-link">Residential</a>
					</li>
					<li class="nav-item">
						<a href="/wordpress/commercial" class="nav-link">Commercial</a>
					</li>
					<li class="nav-item">
						<a href="/wordpress/resources" class="nav-link">Resources</a>
					</li>
					<li class="nav-item">
						<a href="/wordpress/about" class="nav-link">About</a>
					</li>
					<li class="nav-item">
						<a href="/wordpress/contact" class="nav-link">Contact</a>
					</li>
					<!--
					<li class="nav-item">
                        <a href="/wordpress/search" class="nav-link"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </li>
-->
				</ul>
			</nav>
		</section>
	</header>
</body>
