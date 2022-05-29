<!DOCTYPE html>
<html lang="en">
<?php get_header(); ?>
<body <?php body_class(); ?>>

	<?php
	wp_body_open();
	?>
	<section class="index-header">
		<section class="index-title-area">
			<h2 class="index-title">
				<!--<a href="/wordpress">Brian White</a>-->
			</h2>
		</section>
	</section>
	<section class="page-body">
		<!-- NOT A WORKING SEARCH -->
		<section class="search-and-click">
			<section class="search-area">
				<form id="search-form" role="search">
                    <label for="mls-search"></label>
                    <input type="search" id="mls-search" name="mls-search" placeholder="MLS Search">
					<button id="mls-search-btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
					</button>
				</form>
			</section>
		</section>
		<h2 class="page-title">
		<?php wp_title(false); ?>	</h2>
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
</body>

<?php get_footer(); ?>