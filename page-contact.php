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
		<section class="page-content">
			<?php
				$pageid = get_the_id();
				$content_post = get_post($pageid);
				$content = $content_post->post_content;
				echo $content;
				?>
		</section>
		<section id="form-area">
		<form class="contact-form" action="mailto:20066106@tafe.wa.edu.au" method="post" enctype="multipart/form-data" name="emailform">
                <label class="contact-label" for="fname">First Name</label>
                <input class="contact-input" type="text" id="fname" name="fname">
                <label class="contact-label" for="lname">Last Name</label>
                <input class="contact-input" type="text" id="lname" name="lname">
				<label class="contact-label" for="phone">Phone Number</label>
                <input class="contact-input" type="number" id="phone" name="phone" autocomplete="off">
                <label class="contact-label" for="email">Email</label>
                <input class="contact-input" type="email" id="email" name="email" autocomplete="off">
                <label class="contact-label" for="enquiry">Details of Enquiry</label>
                <textarea class="contact-text" id="enquiry" name="enquiry"></textarea>
                <input class="contact-button" type="submit" value="Enquire">
            </form>
		</section>
	</section>
</body>

<?php get_footer(); ?>