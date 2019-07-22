<?php
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );
/**
* Plugin Name: ZipItUp
* Plugin URI: https://github.com/antar37/zipItUp
* Description: Select Multiple Downloads, and Zip it!
* Version: 1.0
* Author: Alex Tarasiuk
* Author URI: https://alextarasiuk.com
* License:     GPL v2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
**/

function zipItUp_enqueue_scripts() {
  wp_register_script( 'zipItUp', plugin_dir_url( __FILE__ ) . 'zipItUp.js', array('jquery'), '1.0', true );
  wp_enqueue_script( 'zipItUp' );

  wp_register_style( 'zipItUp', plugin_dir_url( __FILE__ ) . 'zipItUp.css', '1.0' );
  wp_enqueue_style( 'zipItUp' );
}

add_action('wp_enqueue_scripts', 'zipItUp_enqueue_scripts');

// [downloadAll]
function downloadAll_func() {
	return '<a id="downloadAll" href="' . plugin_dir_url( __FILE__ ) . 'bundled_files.zip" >Download All</a>';
}
add_shortcode( 'downloadAll', 'downloadAll_func' );

?>