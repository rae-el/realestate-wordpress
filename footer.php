<!DOCTYPE html>
<html lang="en">
<head>
	<?php wp_footer(); ?>
</head>

<section class="footer">
	<section class="footer-left">
		<section class="contact-section">
			<h3>Contact</h3>
			<h4>Brian White</h4>
			<a href="mailto:groupw@telus.net">groupw@telus.net</a>
			<a href="tel:(604)961-4104">(604)961-4104</a>
		</section>
		<section class="social-icons">
			<a href="https://www.linkedin.com/in/brian-j-white-realtor/"><i class="fa-brands fa-linkedin-in"></i></a>
			<a href="https://twitter.com/brian_j_white"><i class="fa-brands fa-twitter"></i></a>
		</section>
	</section>
	<section class="footer-middle">
		<section class="group-logo-section">
			<a href="/wordpress"><img class="group-logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/site-logo-beach-district.jpg" alt="<?php esc_attr_e( 'logo', 'textdmomain' );?>" width="263" height="97"/></a>
		</section>
	</section>
	<section class="footer-right">
		<section class="site-navigation">
			<h3>Site Navigation</h3>
            <a href="<?php echo home_url(); ?>">Home</a>
			<?php wp_nav_menu( array(
					'theme_location' => 'primary-menu',
					'container_class' => 'nav-menu' ) ); ?>
					<!--
            <a href="<?php echo home_url(); ?>/residential/">Residential Properties</a>
            <a href="<?php echo home_url(); ?>/commercial">Commercial Properties</a>
            <a href="<?php echo home_url(); ?>/resources">Resources</a>
			<a href="<?php echo home_url(); ?>/about">About</a>
			<a href="<?php echo home_url(); ?>/contact">Contact</a>-->
		</section>
	</section>
</section>
