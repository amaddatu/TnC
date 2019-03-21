{/* <div class="row">
    <div class="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
        <h1>Checkout</h1>
        <h4>Your Total:</h4>
        <form action="/" method="post" id="checkout-form">
            <div class="row">
                <div class="col-xs-12">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" class="form-control" required></input>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" id="address" class="form-control" required></input>
                    </div>
                </div>
            <hr></hr>
            <div class="col-xs-12">
                    <div class="form-group">
                        <label for="card-name">Card Holder Name</label>
                        <input type="text" id="card-name" class="form-control" required></input>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="form-group">
                        <label for="card-number">Credit Card Number</label>
                        <input type="text" id="card-number" class="form-control" required></input>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="form-group">
                        <label for="card-expiry-month">Expiration Month</label>
                        <input type="text" id="card-expiry-month" class="form-control" required></input>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="form-group">
                        <label for="card-expiry-year">Expiration Year</label>
                        <input type="text" id="card-expiry-year" class="form-control" required></input>
                    </div>
                </div>
            <button type="submit" class="btn btn-info">Buy</button>
        </form>
    </div>
</div> */}

Stripe.setpPublishableKey('pk_test_nC9dliwHKOdfTUtVZGu1Ff6100ulsdFoz2');

var $form = ('#checkout-form');

$form.submit(function(event) {
    $form.find('button').prop('disabled', true);
    Stripe.card.createToken({
        number: $form('.card-number').val(),
        cvc: $form('.card-cvc').val(),
        exp_month: $form('.card-expiry-month').val(),
        exp_year: $form('.card-expiry-year').val()
    },  stripeResponseHandler);
})

