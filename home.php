
<?php get_header(); ?>
<body <?php body_class(); ?>>

	<?php
	wp_body_open();
	?>
	<section class="main-page-header">
		<section class="image-1-area">
			<img class="my-image-1" src="<?php echo get_stylesheet_directory_uri(); ?>/images/headshot-1.jpg" alt="Brian Photo"/>
		</section>
		<section class="title-slogan-area">
			<section class="title-area">
				<h1>Beach District Properties.</h1>
			</section>
			<section class="slogan-area">
				<h3>Hi, I'm Brian White and I look forward to helping you find your next property.</h3>
			</section>
		</section>
	</section>
    <section class="page-body">
        <section id="properties-area">
        </section>
    </section>
    <section id="pagination">
    </section>
</body>
<?php get_footer(); ?>