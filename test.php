<!DOCTYPE html>
<html lang="en">
<head>
	<title>Test</title>
	<?php wp_head(); ?>
</head>

<body>
	<div class="top">
		<h1>about.php</h1>
		<p>where the menu goes</p>
		<?php 
			 wp_nav_menu( array( 
			'theme_location' => 'my-custom-menu', 
			'container_class' => 'custom-menu-class' ) ); 
		?>
		<p>Above this line</p>
	</div>
</body>