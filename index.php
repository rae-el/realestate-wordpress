<!DOCTYPE html>
<html lang="en">
<?php get_header(); ?>
<body<?php body_class(); ?>>

	<?php
	wp_body_open();
	?>
	<section class="index-header">
		<section class="index-title-area">
			<h2 class="index-title">
			</h2>
		</section>
	</section>
	<section class="page-body">
	<h3>
    <?php
    global $post;
    $post_slug=$post->post_name;
    echo $post_slug;
    ?>
    </h3>
		<h2 class="page-title" id="top">
		<?php
		wp_title(false);
		 ?>
		</h2>
		<section class="page-content">
			<?php
				$pageid = get_the_id();
				$content_post = get_post($pageid);
				$content = $content_post->post_content;
				echo $content;
				?>
		</section>
		<section id="properties-area">
		</section>
		<section id="mls-property-area">
		</section>
	</section>
	<section id="pagination">
	</section>
</body>

<?php get_footer(); ?>