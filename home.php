<!DOCTYPE html>
<html lang="en">
<?php get_header(); ?>
<body <?php body_class(); ?>>

	<?php
	wp_body_open();
	?>
	<section class="main-page-header">
		<section class="image-1-area">
			<img class="my-image-1" src="<?php echo get_stylesheet_directory_uri(); ?>/images/headshot-1.jpg" alt="<?php esc_attr_e( 'Image 1', 'textdmomain' );?>" width="185" height="250"/>
		</section>
		<section class="title-slogan-area">
			<section class="title-area">
				<h1>Brian White</h1>
			</section>
			<section class="slogan-area">
				<h2>Beach District Properties.</h2>
			</section>
		</section>
	</section>
<!-- NOT A WORKING SEARCH -->
	<section class="home-search">
		<section class="search-and-click">
			<section class="search-area">
				<form id="search-form" role="search">
					<input type="search" id="mls-search" name="mls-search" placeholder="MLS Search">
					<button id="mls-search-btn" onclick="getapiresponse()">
						<img class="search-image" src="<?php echo get_stylesheet_directory_uri(); ?>/images/search-icon.png" alt="<?php esc_attr_e( 'Search', 'textdmomain' );?>" width="43.5" height="28.5"/>
					</button>
				</form>
			</section>
		</section>
	</section>
	<section id="properties-area"></section>
	<section id="mls-property-area"></section>
</body>
<?php get_footer(); ?>