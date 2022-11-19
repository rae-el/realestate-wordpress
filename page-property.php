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
		<form>
			<input id="mlsinput" type="text">
			<input type="button" value="Details" onclick="GetDetails();">
			<a class="test-btn">new</a>
		</form>
		
		<h2 class="page-title" id="top">
        		<?php
        		wp_title(false);
        		 ?>
				 <?php print($get_property)?>
        </h2>
		<section id="property-area">
		</section>
	</section>
</body>

<?php get_footer(); ?>