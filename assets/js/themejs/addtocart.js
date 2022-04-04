	// Cart add remove functions
	var cart = {
		'add': function(product_id, quantity) {
			addProductNotice('Product added to Cart', '<img src="images/products/bag.jpg" alt="">', '<h3><a href="#">Keepall Bandoulière 50</a> added to <a href="#">shopping cart</a>!</h3>', 'success');
		}
	}

	var wishlist = {
		'add': function(product_id) {
			addProductNotice('Product added to Wishlist', '<img src="images/products/bag.jpg" alt="">', '<h3>Kindly <a href="login.html">login</a>  to save <a href="#">Keepall Bandoulière 50</a> to your <a href="#">wish list</a>!</h3>', 'success');
		}
	}
	var compare = {
		'add': function(product_id) {
			addProductNotice('Product added to compare', '<img src="images/products/bag.jpg" alt="">', '<h3>You have added <a href="#">Keepall Bandoulière 50"</a> to your <a href="#">product comparison</a>!</h3>', 'success');
		}
	}

	/* ---------------------------------------------------
		jGrowl – jQuery alerts and message box
	-------------------------------------------------- */
	function addProductNotice(title, thumb, text, type) {
		$.jGrowl.defaults.closer = false;
		//Stop jGrowl
		//$.jGrowl.defaults.sticky = true;
		var tpl = thumb + '<h3>'+text+'</h3>';
		$.jGrowl(tpl, {		
			life: 6000,
			header: title,
			speed: 'slow',
			theme: type
		});
	}

