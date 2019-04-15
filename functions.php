<?php
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );

   wp_enqueue_script('sq-payment-formsdfsdfsdfds', get_stylesheet_directory_uri().'/php_payment/js/sq-payment-form.js',array('jquery'));
   wp_enqueue_script('sq-payment-form', get_stylesheet_directory_uri().'/php_payment/js/paymentform.js',array('jquery'));
   // wp_enqueue_script('sq-payment-form', get_stylesheet_directory_uri().'/sq-payment-form.js',array('jquery'));

}

//require get_template_directory().'/vendor/composer/autoload_classmap.php';
 //require get_template_directory().'/vendor/composer/autoload_files.php';
// require get_template_directory().'/vendor/composer/autoload_namespaces.php';
// require get_template_directory().'/vendor/composer/autoload_psr4.php';
// require get_template_directory().'/vendor/composer/autoload_real.php';
// require get_template_directory().'/vendor/composer/autoload_static.php';
// require get_template_directory().'/vendor/composer/Classloader.php';
// require get_template_directory().'/vendor/phpoption/phpoption/src/Phpoption/LaztOption.php';
// require get_template_directory().'/vendor/phpoption/phpoption/src/Phpoption/None.php';
// require get_template_directory().'/vendor/phpoption/phpoption/src/Phpoption/Option.php';
// require get_template_directory().'/vendor/phpoption/phpoption/src/Phpoption/Some.php';










?>
