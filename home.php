
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
				<!-- could change this into widget-->
			</section>
			<section class="slogan-area">
				<h3>Hi, I'm Brian White and I look forward to helping you find your next property.</h3>
				<!-- could change this into widget-->
			</section>
		</section>
	</section>
    <section class="page-body">
	<?php if( dynamic_sidebar('search_properties_widget')) : else : endif; ?>
	<!--
	<section class="search-bar-area">
		<form action="" class="search-bar-form">
			<input type="text" class="search-bar-input" placeholder="search" name="searchbar">
			<button type="submit"><i class="fas fa-search"></i></button>
		</form>
	</section>-->
        <section id="properties-area">
        </section>
    </section>
    <section id="pagination">
    </section>
</body>
<?php get_footer(); ?>