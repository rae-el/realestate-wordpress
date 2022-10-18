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
		<section class="page-content">
		<h2 class="page-title" id="top">
        		<?php
        		wp_title(false);
        		 ?>
        </h2>
        <!--<form onsubmit="searchMLS()">
            <input id="mls-input" type="text" placeholder="search by mls number...">
            <button id="search-mls" type="submit">
        </form>-->
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