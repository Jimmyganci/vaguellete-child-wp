<?php
// add style child
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles', 'popper_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// ------------- add script javascript --------
function add_custom_scripts() {
    wp_enqueue_script( 'header', get_stylesheet_directory_uri() . '/js/header.js', array(), '', true );
    }
add_action( 'wp_enqueue_scripts', 'add_custom_scripts' );

// ---------------- add font awesone ------------
function add_fontawesone() {
    echo '<script src="https://kit.fontawesome.com/c4e5744b76.js" crossorigin="anonymous"></script>';
}
// Add hook for admin <head></head>
add_action( 'admin_head', 'add_fontawesone' );
// Add hook for front-end <head></head>
add_action( 'wp_head', 'add_fontawesone' );

// ------------- add new area menu-----------
function register_second_menu() {
    register_nav_menu('second-menu',__( 'Menu Secondaire' ));
  }
  add_action( 'init', 'register_second_menu' );

