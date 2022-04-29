---
id: Setup_Payment
title: Setup payment
sidebar_label: Set up payment
---

<style>
:root {
  --highlight: #f7b77b;
  --hover: #f7b77b;
}
</style>


# Set up your payment method

In order to sell on the Bazar, you will have to make sure that you have your payment set up properly. As the standard payment processor on the Bazar, we use [Stripe](https://stripe.com/en-gb-de), and also recently added [Paypal](https://paypal.com/) as a second option. You will need to have at least one of those accounts to manage your payments, reimbursements, and invoices.

# Stripe - Our standard payment processor

First things first: To connect your Bazar account to Stripe, you will need a Stripe account.
Don’t have one already? [Set up your Stripe account.](https://dashboard.stripe.com/register)

- Creating an account is free
- You need to have a registered organisation in a Stripe supported country [country](https://stripe.com/global)
- If your country is not supported, you can try setting up an account through Stripe [Atlas](https://stripe.com/atlas), or find another creative way around it

Once you are set, you can connect your Bazar account to your Stripe account.


## Step 1: Add a payment method

- Login to the [seller dashboard](https://newbazar.preciousplastic.com/my_admin_panel.php)
- Go to Administration/ Payment methods.
- Click on ‘+’- to add one.

![Payment methods](../assets/Business/Set%20up%20payment-1-payment%20methods.png)



## Step 2: Select processor (Stripe)

- Select Stripe as processor, and fill other required infos
- Then click on ‘configure’

![Select processor](../assets/Business/Set%20up%20payment-2-add%20method.png)



## Step 3: Connect to stripe

- Fill out info for ‘configure’
- Find your publishable key + secret key on your stripe account/Developers/API keys

![Select processor](../assets/Business/Set%20up%20payment-3-Config.png)




## Step 4: Finish!

- Click  ‘Create’ -  you should now see your payment method listed

![Select processor](../assets/Business/Set%20up%20payment-4-create.png) 


# Connect to your Paypal Account

Paypal is a very commonly used payment tool. 

## Requirements: Paypal Business Account
To use Paypal for the Bazar, you need an active Paypal Business Account. 
If you don’t have one, [create one](https://www.paypal.com/bizsignup/#/checkAccount) and make sure to verify with your email address.

## Step 1: Add a payment method

- Login to the [seller dashboard](https://newbazar.preciousplastic.com/my_admin_panel.php)
- Go to Administration/ Payment methods.
- Click on ‘+’- to add one.

![Payment methods](../assets/Business/Set%20up%20payment-1-payment%20methods.png)

## Step 2: Select processor (Paypal)

- Select "Paypal Express Checkout" as processor
- Then click on ‘configure’

## Step 3: Fill in Technical Details (1)
- Scroll down to the **Technical Details** field, this is where you’ll have to insert information from your Paypal Account
- Find your **Merchant ID** in your Paypal Account under [Business Information](https://www.paypal.com/businessmanage/account/aboutBusiness)
- Copy it over into your Technical Details

## Step 4: Fill in Technical Details (2)
- Request your **Username, Password and Signature** in [Manage API Access](https://www.paypal.com/businessprofile/mytools/apiaccess/firstparty)
- Copy it over into your Technical Details
**When copying over names and numbers, make sure you're only copying the numbers & letters, and NOT empty spaces.**

## Step 5: Fill in Technical Details (3)
- Select “Live” mode 
- Check the box to show the Paypal option in the Checkout

## Step 6: Finish!
- Click  ‘Create’
- you should now see your payment method listed


# You're now open for business 🎉
Now you can start to create listings on the Bazar and start selling. Good luck 🙌🏼
Before you leave this page, please stick around for the last important point!



## The Bazar fee - 5% for the Community
We would like to offer the services of the Bazar without any charges, but the reality is: Running, maintaining and improving a platform like the Bazar requires a lot of human resources and money.

This is why we have the Bazar fee, which means that 5% of each sale gets collected.
It is then used to pay for the platform hosting, the bug-fixing, the technical support, the improvement and development of the platform etc.

So by selling your precious things on the Bazar, you also contribute to making this plastic recycling marketplace as accessible and smooth for plastic recyclers to buy and sell and help them succeed in their recycling project. pre


**How are the Bazar fees collected?** Every month we will send out invoices (via stripe), charging 5% of the amount you sold that month. Keep this in mind and calculate this into your item prices!



## Happy selling 💸
Hope this is all clear, if you have any questions about this, best is to bring them up on the [#bazar-sellers channel](https://discord.gg/2E93VxB3CD) on Discord :)
