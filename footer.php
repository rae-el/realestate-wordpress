<!DOCTYPE html>
<html lang="en">
<head>
	<?php wp_footer(); ?>
</head>

<section class="footer">
	<section class="footer-left">
		<section class="contact-section">
			<h2>Contact</h2>
			<h3>Brian White</h3>
			<h4><a href="mailto:groupw@telus.net">groupw@telus.net</a></h4>
			<h4><a href="tel:(604)961-4104">(604)961-4104</a></h4>
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
			<h2>Site Navigation</h2>
            <a href="/">Home</a>
            <a href="/index.php/residential/">Residential Properties</a>
            <a href="/index.php/commercial">Commercial Properties</a>
            <a href="/index.php/resources">Resources</a>
			<a href="/index.php/about">About</a>
			<a href="/index.php/contact">Contact</a>
		</section>
	</section>
</section>
