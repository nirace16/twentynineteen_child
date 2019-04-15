<?php
/*
Template Name: Payment
*/
?>
<?php get_header(); ?>

<?php //echo my_payment_form(); ?>
<html>
<head>
  <!-- link to the SqPaymentForm library -->

  <!-- <script type="text/javascript" src="https://js.squareup.com/v2/paymentform"></script> -->
  <script type="text/javascript">
    window.applicationId =
      <?php
        echo "\"";
        echo ($_ENV["USE_PROD"] == 'true')  ?  $_ENV["sq0idp-n4mjcCOkFCC_WBcoVv4zGg"]
                                            :  $_ENV["sandbox-sq0idp-n4mjcCOkFCC_WBcoVv4zGg"];
        echo "\"";
      ?>;
    window.locationId =
    <?php
      echo "\"";
      echo ($_ENV["USE_PROD"] == 'true')  ?  $_ENV["QWEAKQ5J43SQN"]
                                          :  $_ENV["CBASEEJ9cnh4RGSQmAXXeS3uDycgAQ"];
      echo "\"";
    ?>;
  /**
   * Define callback function for "sq-button"
   * @param {*} event
   */


  </script>
  <!-- <script type="text/javascript" src="js/sq-payment-form.js"></script> -->
  <!-- link to the local SqPaymentForm initialization -->
</head>
<body>
  <!-- Begin Payment Form -->
  <div class="sq-payment-form">
    <!--
      Square's JS will automatically hide these buttons if they are unsupported
      by the current device.
    -->
    <div id="sq-walletbox">
      <button id="sq-google-pay" class="button-google-pay"></button>
      <button id="sq-apple-pay" class="sq-apple-pay"></button>
      <button id="sq-masterpass" class="sq-masterpass"></button>
      <div class="sq-wallet-divider">
        <span class="sq-wallet-divider__text">Or</span>
      </div>
    </div>
    <div id="sq-ccbox">
      <!--
        You should replace the action attribute of the form with the path of
        the URL you want to POST the nonce to (for example, "/process-card").

        You need to then make a "Charge" request to Square's transaction API with
        this nonce to securely charge the customer.

        Learn more about how to setup the server component of the payment form here:
        https://docs.connect.squareup.com/payments/transactions/processing-payment-rest
      -->
      <form id="nonce-form" novalidate action="<?php echo get_site_url().'/index.php/process-card/';?>" method="post">
        <div class="sq-field">
          <label class="sq-label">Card Number</label>
          <div id="sq-card-number"></div>
        </div>
        <div class="sq-field-wrapper">
          <div class="sq-field sq-field--in-wrapper">
            <label class="sq-label">CVV</label>
            <div id="sq-cvv"></div>
          </div>
          <div class="sq-field sq-field--in-wrapper">
            <label class="sq-label">Expiration</label>
            <div id="sq-expiration-date"></div>
          </div>
          <div class="sq-field sq-field--in-wrapper">
            <label class="sq-label">Postal</label>
            <div id="sq-postal-code"></div>
          </div>
        </div>
        <div class="sq-field">
          <button id="sq-creditcard" class="sq-button" onclick="onGetCardNonce(event)">
            Pay $10.00 Now
          </button>
        </div>
        <script>

        /**
         * Define callback function for "sq-button"
         * @param {*} event
         */

        // jQuery('#sq-creditcard').on('click',function(e){
        //
        //   onGetCardNonce(event);
        // });

        function onGetCardNonce(event) {

          // Don't submit the form until SqPaymentForm returns with a nonce
          event.preventDefault();

          // Request a nonce from the SqPaymentForm object
          paymentForm.requestCardNonce();
        }

        // Initializes the SqPaymentForm object by
        // initializing various configuration fields and providing implementation for callback functions.
        var paymentForm = new SqPaymentForm({
          // Initialize the payment form elements
          applicationId: 'sq0idp-n4mjcCOkFCC_WBcoVv4zGg',
          locationId: 'QWEAKQ5J43SQN',
          inputClass: 'sq-input',

          // Customize the CSS for SqPaymentForm iframe elements
          inputStyles: [{
            backgroundColor: 'transparent',
            color: '#333333',
            fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            placeholderColor: '#8594A7',
            placeholderFontWeight: '400',
            padding: '16px',
            _webkitFontSmoothing: 'antialiased',
            _mozOsxFontSmoothing: 'grayscale'
          }],

          // Initialize Google Pay button ID
          googlePay: {
            elementId: 'sq-google-pay'
          },

          // Initialize Apple Pay placeholder ID
          applePay: {
            elementId: 'sq-apple-pay'
          },

          // Initialize Masterpass placeholder ID
          masterpass: {
            elementId: 'sq-masterpass'
          },

          // Initialize the credit card placeholders
          cardNumber: {
            elementId: 'sq-card-number',
            placeholder: '•••• •••• •••• ••••'
          },
          cvv: {
            elementId: 'sq-cvv',
            placeholder: 'CVV'
          },
          expirationDate: {
            elementId: 'sq-expiration-date',
            placeholder: 'MM/YY'
          },
          postalCode: {
            elementId: 'sq-postal-code'
          },

          // SqPaymentForm callback functions
          callbacks: {

            /*
             * callback function: methodsSupported
             * Triggered when: the page is loaded.
             */
            methodsSupported: function (methods) {
              if (!methods.masterpass && !methods.applePay && !methods.googlePay) {
                var walletBox = document.getElementById('sq-walletbox');
                walletBox.style.display = 'none';
              } else {
                var walletBox = document.getElementById('sq-walletbox');
                walletBox.style.display = 'block';
              }

              // Only show the button if Google Pay is enabled
              if (methods.googlePay === true) {
                var googlePayBtn = document.getElementById('sq-google-pay');
                googlePayBtn.style.display = 'inline-block';
              }

              // Only show the button if Apple Pay for Web is enabled
              if (methods.applePay === true) {
                var applePayBtn = document.getElementById('sq-apple-pay');
                applePayBtn.style.display = 'inline-block';
              }

              // Only show the button if Masterpass is enabled
              if (methods.masterpass === true) {
                var masterpassBtn = document.getElementById('sq-masterpass');
                masterpassBtn.style.display = 'inline-block';
              }
            },

            /*
             * callback function: createPaymentRequest
             * Triggered when: a digital wallet payment button is clicked.
             */
            createPaymentRequest: function () {

              var paymentRequestJson = {
                requestShippingAddress: false,
                requestBillingInfo: true,
                shippingContact: {
                  familyName: "CUSTOMER LAST NAME",
                  givenName: "CUSTOMER FIRST NAME",
                  email: "mycustomer@example.com",
                  country: "USA",
                  region: "CA",
                  city: "San Francisco",
                  addressLines: [
                    "1455 Market St #600"
                  ],
                  postalCode: "94103",
                  phone:"14255551212"
                },
                currencyCode: "USD",
                countryCode: "US",
                total: {
                  label: "MERCHANT NAME",
                  amount: "1.00",
                  pending: false
                },
                lineItems: [
                  {
                    label: "Subtotal",
                    amount: "1.00",
                    pending: false
                  }
                ]
              };

              return paymentRequestJson;
            },

            /*
             * callback function: validateShippingContact
             * Triggered when: a shipping address is selected/changed in a digital
             *                 wallet UI that supports address selection.
             */
            validateShippingContact: function (contact) {

              var validationErrorObj ;
              /* ADD CODE TO SET validationErrorObj IF ERRORS ARE FOUND */
              return validationErrorObj ;
            },

            /*
             * callback function: cardNonceResponseReceived
             * Triggered when: SqPaymentForm completes a card nonce request
             */
            cardNonceResponseReceived: function(errors, nonce, cardData, billingContact, shippingContact) {
              if (errors){
                var error_html = "";
                for (var i =0; i < errors.length; i++){
                  error_html += "<li> " + errors[i].message + " </li>";
                }
                document.getElementById("error").innerHTML = error_html;
                document.getElementById('sq-creditcard').disabled = false;

                return;
              }else{
                document.getElementById("error").innerHTML = "";
              }

              // Assign the nonce value to the hidden form field
              document.getElementById('card-nonce').value = nonce;

              // POST the nonce form to the payment processing page
              document.getElementById('nonce-form').submit();

            },

            /*
             * callback function: unsupportedBrowserDetected
             * Triggered when: the page loads and an unsupported browser is detected
             */
            unsupportedBrowserDetected: function() {
              /* PROVIDE FEEDBACK TO SITE VISITORS */
            },

            /*
             * callback function: inputEventReceived
             * Triggered when: visitors interact with SqPaymentForm iframe elements.
             */
            inputEventReceived: function(inputEvent) {
              switch (inputEvent.eventType) {
                case 'focusClassAdded':
                  /* HANDLE AS DESIRED */
                  break;
                case 'focusClassRemoved':
                  /* HANDLE AS DESIRED */
                  break;
                case 'errorClassAdded':
                  /* HANDLE AS DESIRED */
                  break;
                case 'errorClassRemoved':
                  /* HANDLE AS DESIRED */
                  break;
                case 'cardBrandChanged':
                  /* HANDLE AS DESIRED */
                  break;
                case 'postalCodeChanged':
                  /* HANDLE AS DESIRED */
                  break;
              }
            },

            /*
             * callback function: paymentFormLoaded
             * Triggered when: SqPaymentForm is fully loaded
             */
            paymentFormLoaded: function() {
              /* HANDLE AS DESIRED */
            }
          }
        });

        </script>
        <!--
          After a nonce is generated it will be assigned to this hidden input field.
        -->
        <div id="error"></div>
        <input type="hidden" id="card-nonce" name="nonce">
      </form>
    </div>
  </div>
  <!-- End Payment Form -->
</body>
</html>


<?php get_footer(); ?>
