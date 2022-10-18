
<?php

/////////////////////////////////////////////////////////////////////////////////////////////////
// Enqueue stylesheet //	

function my_theme_scripts() {

    //stylesheet
    wp_enqueue_style( 'style', get_template_directory_uri() . '/css/mystyle.css');
    //font-awesome
    wp_enqueue_script('font-awesome','https://kit.fontawesome.com/17aa4105b5.js');


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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Enqueue menu //

function my_condensed_menu() {

      //condensed menu
    wp_enqueue_script('menu', get_template_directory_uri() . '/js/getcondensedmenu.js');


}
add_action( 'wp_enqueue_scripts', 'my_condensed_menu' );

// Enqueue search //
//really no clue why not working, not recognizing elements
/*
function my_search() {

      //condensed menu
    wp_enqueue_script('search', get_template_directory_uri() . '/js/apifetch-search.js');


}
add_action( 'wp_enqueue_scripts', 'my_search' );
*/

//////////////////////////////////////////////////////////////////////////////////////////
// api calls //
//if the page is residential properties (id=30) get javascript for api fetch res
function get_res_listings(){
	if (is_page('30')){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-res.js">
		</script>
		<?php
	}
}
add_action('wp_head','get_res_listings');


//if the page is commercial properties (id=56) get javascript for api fetch comm
function get_com_listings(){
	if (is_page('56')){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-com.js">
		</script>
		<?php
	}
}
add_action('wp_head','get_com_listings');

//if page is about get agent listings
function get_agent_listings(){
    if (is_page('7')){
        ?>
        <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-ag.js">
        </script>
        <?php
    }
}
add_action('wp_head','get_agent_listings');


//if the page is home get javascript for api fetch team 3000
function get_team_listings(){
	if (is_home()){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-team3000.js">
		</script>
		<?php
	}
}
add_action('wp_head','get_team_listings');


//if search page search for the featured mls number get javascript for api fetch mls
//need to change so mls search always directs to the search page
//maybe do this by making the search bar the featured widget 
function get_mls_listing(){
	if (is_page('67')){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-mls.js">
		</script>
		<?php
	}
}
add_action('wp_head','get_mls_listing');


/////////////////////////////////
//page generation
/////////////////////////////////


//commercial pagination
/*
function commercial_pagination($pageNum){
//check if exists
    if ( get_page_by_title( $pageNum ) == null ) {
         // Insert post
         $new_page = array(
                  'post_title'    => 'Commercial',
                  'post_content'  => '',
                  'post_status'   => 'publish',
                  'post_author'   => 1,
                  'post_type'     => 'page',
                  'post_parent'   => 'commercial',
                  'post_name'     => $pageNum,
                  );}
                  // Insert the post into the database
                  wp_insert_post( $new_page );
}
*/

/*
//create page
function create_property_page(){
//get the mls number from the link and use as the title
 $new_page = array(
          'post_title'    => 'test',
          'post_content'  => 'test',
          'post_status'   => 'publish',
          'post_author'   => 1,
          'post_category' => array(1),
          'post_type'     => 'page'
          );

          // Insert the post into the database
          wp_insert_post( $new_page );
}*/


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
////////////////////////////////////////////////////////////////////////////////////////////
// my menu //
/*
function my_new_menu() {
    register_nav_menu('my-new-menu',__( 'My New Menu' ));
}
add_action( 'init', 'my_new_menu' );
*/
/*wp_nav_menu( array(
	'theme_location' => 'my-new-menu',
	'container_class' => 'menu-area' ) ); */


  