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
		<section id="properties-area">
		</section>
	</section>
	<section id="pagination">
	</section>
</body>

<?php get_footer(); ?>