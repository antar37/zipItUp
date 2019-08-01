<?php
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );
/**
* Plugin Name: ZipItUp
* Plugin URI: https://github.com/antar37/zipItUp
* Description: Select Multiple files to download, and Zip it!
* Version: 1.1
* Author: Alex Tarasiuk
* Author URI: https://alextarasiuk.com
* License:     GPL v2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
**/

function zipItUp_enqueue_scripts() {
  wp_register_script( 'zipItUp', plugin_dir_url( __FILE__ ) . 'zipItUp.js', array('jquery'), '1.0', true );
  wp_enqueue_script( 'zipItUp' );
  // Localizing the script lets me access the plugin directory in my JS file
  wp_localize_script('zipItUp', 'zipItUp', array('pluginsUrl' => plugin_dir_url( __FILE__ ),));

  wp_register_style( 'zipItUp', plugin_dir_url( __FILE__ ) . 'zipItUp.css', '1.0' );
  wp_enqueue_style( 'zipItUp' );
}

add_action('wp_enqueue_scripts', 'zipItUp_enqueue_scripts');

// [zipItUpMenu] - Shortcode registration
function zipItUpMenu_func() {
	return '<div id="zipItUpMenu"><a id="downloadSelected" href="' . plugin_dir_url( __FILE__ ) . 'bundled_files.zip" >Download&nbsp;Selected</a><a id="selectAll" href="">Select All</a><a id="cancelSelected" href="">Clear</a></div>';
}
add_shortcode( 'zipItUpMenu', 'zipItUpMenu_func' );
?>