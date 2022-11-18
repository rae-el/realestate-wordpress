
<?php

/////////////////////////////////////////////////////////////////////////////////////////////////
if ( ! function_exists( 'realestate_theme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various
	 * WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme
	 * hook, which runs before the init hook. The init hook is too late
	 * for some features, such as indicating support post thumbnails.
	 */
	function realestate_theme_setup() {

    /**
		 * Add default posts and comments RSS feed links to <head>.
		 */
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Enable support for post thumbnails and featured images.
		 */
		add_theme_support( 'post-thumbnails' );

		/**
		 * Enable support for the following post formats:
		 * aside, gallery, quote, image, and video
		 */
		add_theme_support( 'post-formats', array( 'aside', 'gallery', 'quote', 'image', 'video' ) );
	}
endif; 
add_action( 'after_setup_theme', 'realestate_theme_setup' );

// Enqueue stylesheet //	

function my_theme_scripts() {

    //main stylesheet
    wp_enqueue_style( 'style', get_template_directory_uri() . '/css/mystyle.css');

    //font-awesome
    wp_enqueue_script('font-awesome','https://kit.fontawesome.com/17aa4105b5.js');

	//condensed menu
    wp_enqueue_script('menu', get_template_directory_uri() . '/js/getcondensedmenu.js');

	// enqueue template stylesheets
	//home
	if (is_home()){
		wp_enqueue_style( 'home', get_template_directory_uri() . '/css/homestyle.css' );
	}
	//residential properties (id=30 personal or id=6 screencraft) or commercial properties (id=56 personal or id=9 screencraft)
	if (is_page(array('30','56'))){
		wp_enqueue_style( 'gridlistings', get_template_directory_uri() . '/css/gridlistingsstyle.css' );
	  }
	
	//contact
	if (is_page('83')){
		wp_enqueue_style( 'contact', get_template_directory_uri() . '/css/contactstyle.css' );
	}

}
add_action( 'wp_enqueue_scripts', 'my_theme_scripts' );


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Favicon //

function mynewfavicon(){
	
	echo '<link rel="Shortcut Icon" type="image/x-icon" href="'.get_template_directory_uri().'/images/T3000_logo_tophalf.ico"/>';
	
}
/*adds a favicon to admin area*/
add_action('admin_head', 'mynewfavicon');
/*adds a favicon to my site*/
add_action('wp_head', 'mynewfavicon');

////////////////////////////////////////////////////////////////////////////////////////////
// my menu //

function my_new_menu() {
    /*register_nav_menu('my-new-menu',__( 'My New Menu' ));*/
	register_nav_menus( array(
		'primary-menu'   => __( 'Primary Menu', 'my-menu' ),
		'secondary-menu' => __( 'Secondary Menu', 'my-menu' )
	) );
}
add_action( 'init', 'my_new_menu' );





//////////////////////////////////////////////////////////////////////////////////////////
// api calls //
function get_api_call(){
	//if the page is home get javascript for api fetch team 3000 listings
	if (is_home()){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-team3000.js">
		</script>
		<?php
	}

	//if the page is residential properties (id=30 personal or id=6 screencraft) get javascript for api fetch res
	if (is_page('30')){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-res.js">
		</script>
		<?php
	}

	//if the page is commercial properties (id=56 personal or id=9 screencraft) get javascript for api fetch comm
	if (is_page('56')){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-com.js">
		</script>
		<?php
	}
}
add_action('wp_head','get_api_call');


//////////////////////////////////////////////////////////////////////////////////////////////////////////
/* form */
//if the page is contact (id=83)local and id=? screencraft get javascript for contact form
function get_form(){
	if (is_page('83')){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/contact-form.js">
		</script>
		<?php
	}
}
add_action('wp_head','get_form');

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Enqueue menu //
//still working on this - paused for now
/*
function my_condensed_menu() {

      //condensed menu
    wp_enqueue_script('menu', get_template_directory_uri() . '/js/getcondensedmenu.js');


}
add_action( 'wp_enqueue_scripts', 'my_condensed_menu' );*/


// Enqueue menu highlight //
//still working on this - paused for now
/*
function my_highlight_menu() {

      //condensed menu
    wp_enqueue_script('highlight', get_template_directory_uri() . '/js/highlight-menu.js');


}
add_action( 'wp_enqueue_scripts', 'my_highlight_menu' );
*/


//if search page search for the featured mls number get javascript for api fetch mls
//need to change so mls search always directs to the search page
//maybe do this by making the search bar the featured widget 
/*
function get_mls_listing(){
	if (is_page('67')){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-mls.js">
		</script>
		<?php
	}
}
add_action('wp_head','get_mls_listing');
*/

//if page is about get agent listings
/*
function get_agent_listings(){
    if (is_page('7')){
        ?>
        <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-ag.js">
        </script>
        <?php
    }
}
add_action('wp_head','get_agent_listings');
 */
/////////////////////////////////
//page generation
/////////////////////////////////



/*
function featured_widget_widgets_init() {
	register_sidebar( array(
		'name'=> 'Featured Widget Area',
		'id' => 'featured_widget_area',
		'before_widget' => '<section class="inner-widget-area">',
		'after_widget' => '</section>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	));
}
add_action('widgets_init','featured_widget_widgets_init');
*/

  