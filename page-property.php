<!DOCTYPE html>
<html lang="en">
<?php get_header(); ?>
<body<?php body_class(); ?>>

	<?php
	wp_body_open();
	?>
	<section class="index-header">
	</section>
	<section class="page-body">
		<form>
			<input id="mlsinput" type="text">
			<input type="button" value="Details" onclick="GetDetails();">
		</form>
		<?php
		$test = "test";
		set_transient('get_property',$test,HOUR_IN_SECONDS);
		?>
		
		<h2 class="page-title" id="top">
        		<?php
        		wp_title(false);
        		 ?>
        </h2>
		<section id="property-area">
				<?php 
				 $get_property = get_transient('get_property');
				 $get_test_property = get_transient('test_property');
				 ?>
			<?php print($get_property)?>
			<?php print($get_test_property)?>
		</section>
	</section>
</body>

<?php get_footer(); ?>