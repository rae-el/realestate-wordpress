<!DOCTYPE html>
<html lang="en">
<?php get_header(); ?>
<body<?php body_class(); ?>>

	<?php
	wp_body_open();
	?>
	
	<?php 
	$get_property = get_transient('get_property');
	?>
	<section class="index-header">
	</section>
	<section class="page-body">
		<h2 class="page-title" id="top">
			<span id="mls-id"><?php print($get_property)?></span>
        		<?php
        		wp_title(false);
        		 ?>
				 Details
        </h2>
		<section id="property-area">
			
		</section>
	</section>
</body>

<?php get_footer(); ?>