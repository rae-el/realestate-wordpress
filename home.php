
<?php get_header(); ?>
<body <?php body_class(); ?>>

	<?php
	wp_body_open();
	?>
	<section class="main-page-header">
		<section class="image-1-area">
			<img class="my-image-1" src="<?php echo get_stylesheet_directory_uri(); ?>/images/headshot-1.jpg" alt="<?php esc_attr_e( 'Image 1', 'textdmomain' );?>" width="185" height="250"/>
		</section>
		<section class="title-slogan-area">
			<section class="title-area">
				<h1>Beach District Properties.</h1>
			</section>
			<section class="slogan-area">
				<h2>Hi, I'm Brian White and I look forward to helping you find your next property.</h2>
			</section>
		</section>
	</section>
    <section class="page-body">
        <section id="properties-area">
        </section>
    </section>
</body>
<?php get_footer(); ?>