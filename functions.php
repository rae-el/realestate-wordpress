
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

	//jquery
	wp_enqueue_script('jquery');

	//condensed menu
    wp_enqueue_script('menu', get_template_directory_uri() . '/js/getcondensedmenu.js');

	// enqueue template stylesheets
	//home
	if (is_home()){
		wp_enqueue_style( 'home', get_template_directory_uri() . '/css/homestyle.css' );
		wp_enqueue_style( 'gridlistings', get_template_directory_uri() . '/css/gridlistingsstyle.css' );
	}
	//residential properties (id=30 personal or id=6 screencraft) or commercial properties (id=56 personal or id=9 screencraft)
	if (is_page(array('30','56'))){
		wp_enqueue_style( 'gridlistings', get_template_directory_uri() . '/css/gridlistingsstyle.css' );
	  }
	
	//contact (id=83 personal or id=16 screencraft)
	if (is_page('83')){
		wp_enqueue_style( 'contact', get_template_directory_uri() . '/css/contactstyle.css' );
	}
	//properties (id=93 personal or id=44 screencraft) 
	if (is_page('93')){
		wp_enqueue_style( 'details', get_template_directory_uri() . '/css/propertydetailsstyle.css' );

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


/////////////////////////////////


//register widgets
function my_custom_widgets_widgets_init() {
	//create search widget
	register_sidebar( array(
		'name'=> 'Search Properties Widget',
		'id' => 'search_properties_widget',
		'before_widget' => '<div class="search-properties-widget-area">',
		'after_widget' => '</div>',
		'before_title' => '',
		'after_title' => '',
	));
}
add_action('widgets_init','my_custom_widgets_widgets_init');


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

	//if the page is search (properties) (id=93 personal or id=44 screencraft) get javascript for api fetch
	if (is_page('93')){
		?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/apifetch-details.js">
		</script>
		<?php
	}
}
add_action('wp_head','get_api_call');

//////////////////////////////////////////////////////////////////////////////////////////

function session_init() {
	if (!session_id()) {
	session_start();
	}
	}
	add_action( 'init', 'session_init' );

//////////////////////////////////////////////////////////////////////////////////////////

//ajax
//Define AJAX URL
function my_ajaxurl() {

	echo '<script type="text/javascript">
			var ajaxurl = "' . admin_url('admin-ajax.php') . '";
		  </script>';
 }
 add_action('wp_head', 'my_ajaxurl');

 //The Javascript that passes to PHP from the property link click
function ajax_property_details(){ ?>
	<script>
		///waits 1 second (async function to load) before running
		setTimeout(() => {
			jQuery(document).ready(function($) {
			// This does the ajax request (The Call).
			$( ".get-property-details" ).click(function() {
				//get the button text
				var variabledata = this.id;
				console.log("Collected property id");
				// log the data pulled
				console.log(variabledata);

			$.ajax({
				url: ajaxurl,
				data: {
					'action':'set_property_transient_ajax_request', // This is our PHP function below
					'testdata' : variabledata // This is the variable we are sending via AJAX
				},
				success:function(data) {
				// This outputs the result of the ajax request (The Callback)
				console.log("Data returned from callback");
				console.log(data);
					//puts the output in the button
					$(".test-btn").text(data);
				},
				error: function(errorThrown){
					window.alert(errorThrown);
				}
			});
			});
		});
		}, 4000);
	</script>
	<?php }
add_action('wp_footer', 'ajax_property_details');


//The Javascript that passes to PHP from the search
function ajax_search_property(){ ?>
	<script>
		jQuery(document).ready(function($) {
			///waits 4 seconds (async function to load) before running
			setTimeout(() => {
				// This does the ajax request (The Call).
				document.addEventListener('submit',function(e){
					e.preventDefault();
					const searchForm = document.querySelector('.search-bar-form');
					console.log(searchForm);
					var searchInput = searchForm.searchbar.value;
					console.log(searchInput);
					if (searchInput && searchInput.trim().length > 0){
						// exclude white space and to uppercase
						searchInput = searchInput.trim().toUpperCase();
						$.ajax({
						url: ajaxurl,
						data: {
							'action':'set_property_transient_ajax_request', // This is our PHP function below
							'testdata' : searchInput // This is the variable we are sending via AJAX
						},
						success:function(data) {
						// This outputs the result of the ajax request (The Callback)
						console.log("Data returned from callback");
						console.log(data);
						//open property window with the number searched
						window.open('wordpress/property/','_self');
						},
						error: function(errorThrown){
							window.alert(errorThrown);
						}
					});
						return console.log(searchInput);
					} else {
						return console.log("No results");
					}
				});
			});
		}, 4000);
	</script>
	<?php }
add_action('wp_footer', 'ajax_search_property');


//The PHP
function set_property_transient_ajax_request() {
    // The $_REQUEST contains all the data sent via AJAX from the Javascript call
    if ( isset($_REQUEST) ) {
		// get data from the javascript and assign to php variable
        $testdata = $_REQUEST['testdata'];

		//this seems to work ok to start but then appears to get "stuck" on a transient
		//check if transient exists
		if(false == get_transient('get_property')){
			// set transient to the variable
			set_transient('get_property',$testdata,MINUTE_IN_SECONDS);
		}
		else{
			//if yes delete existing
			delete_transient('get_property');
			// set transient to the variable
			set_transient('get_property',$testdata,MINUTE_IN_SECONDS);
		}
		

		//try with cookie
		/*
		if(isset($_COOKIE['get_property'])){
			unset($_COOKIE['get_property']);
			setcookie('get_property',$testdata,HOUR_IN_SECONDS,COOKIEPATH,COOKIE_DOMAIN);
		}else{
			setcookie('get_property',$testdata,HOUR_IN_SECONDS,COOKIEPATH,COOKIE_DOMAIN);
		}*/

        // Now let's return the result to the Javascript function (The Callback)
        echo $testdata;
    }
    // Always die in functions echoing AJAX content
   die();
}
// This bit is a special action hook that works with the WordPress AJAX functionality.
add_action( 'wp_ajax_set_property_transient_ajax_request', 'set_property_transient_ajax_request' );
add_action( 'wp_ajax_nopriv_set_property_transient_ajax_request', 'set_property_transient_ajax_request' );

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



  