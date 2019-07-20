<?php
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );
/**
* Plugin Name: ZipItUp
* Plugin URI: https://alextarasiuk.com
* Description: Select Multiple Downloads, and Zip it!
* Version: 1.0
* Author: Alex Tarasiuk
* Author URI: https://alextarasiuk.com
**/

function zipItUp_enqueue_script() {
  wp_register_script( 'zipItUp-js', plugin_dir_url( __FILE__ ) . 'index.js', array('jquery'), '1.0', true );
  wp_enqueue_script( 'zipItUp-js' );
}
add_action('wp_enqueue_scripts', 'zipItUp_enqueue_script');

// [downloadAll]
function downloadAll_func() {
	return '<a id="downloadAll" href="' . plugin_dir_url( __FILE__ ) . 'bundled_files.zip" >Download All</a>';
}
add_shortcode( 'downloadAll', 'downloadAll_func' );

?>