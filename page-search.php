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
		
		<h2 class="page-title" id="top">
        		<?php
        		wp_title(false);
        		 ?>
        </h2>
		<section class="search-area">
			<form>
				<input id="mls-input" type="text" placeholder="search by mls number...">
				<button id="search-mls" type="submit">
			</form>
		</section>
		<section id="property-area">
		</section>
	</section>
</body>

<?php get_footer(); ?>