const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');

// order Model:
const Order = require("../../models/Order");

// Test
router.get('/test', (req, res) => res.json({ success: 'APi Works!' }));

// @ desc    Send Buyer Email Confimation
// @ route    GET api/Orders/confirm
// @ access   Public
router.post("/confirm", sendBuyerEmail); // handle the route at yourdomain.com/sendBuyerEmail
function sendBuyerEmail(req, res) {
    // console.log("hitting email confirmation, req.body is: ");
    const { total, orderDetails } = req.body;
    const firstName = req.session.firstName, lastName = req.session.lastName, email=req.session.email; 
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "CodeSquadEsC1337@gmail.com",
    pass: "LeetLife369$"
  }
});
    var text = 'Hello world from \n\n' + "EsC- CodeSquad," + `ORDER DETAILS: `
    var htmlTest = "<h1> test html in here thingy </h1>"

    var mailOptions = {
        from: '"Code Squad "<no-Reply@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: `${firstName} ${lastName} : Code Squad Recipt`, // Subject line
        text: text, //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
        html: '<b>Hello test bastard world ✔</b>',
        html: '<b>Hello test2 bastard sphincter world ✔</b>',
        html: htmlTest
    };

    // Send email and handle response:
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({message: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({message: info.response});
    };
    });
}


// @ desc    Get ALL Orders
// @ route    GET api/Orders
// @ access   Public
router.get("/", (req, res) => {
    Order.find()
        .sort({ date: -1 })
        .then(orders => res.json(orders))
        .catch(err => res.status(404).json({ message: "Error", error: err }))
});

// router.get("/sessionTest", (req, res) => {
//     console.log('HERE TEST HERE SESSION IN ORDERS BACKE END', req.session)
// })

// @ desc    Create New Order
// @ route    POST api/orders
// @ access   Public
router.post("/", (req, res) => {
    // console.log('HERE TEST HERE SESSION IN ORDERS BACKE END', req.session)
    const {  total, orderDetails } = req.body;
    // let { state } = req.body;
    // let { address2 } = req.body
    // console.log("Grabbing from req.body", firstName, lastName, email, address, address2, total, city, state, experation)
    // console.log("GRABBING FROM REQ.BODY ORDER DETAILS: ", orderDetails)
    // console.log("HERE GRAND TOTAL: ", total)
    // Create Order:
    // If address 2 was entered then do this:
    // if (address2 && address && address2 !== null && address2 !== undefined && address2 !== "") {
        if(req.session.address2){
        console.log("Hitting in Address 2 area")
        // if(state === undefined) {state = ""}
        const newAddress = req.session.address1 + " " + req.session.address2 + " " + req.session.address2 + " " + req.session.state.toUpperCase() + ". " + req.session.zipCode;
        const newOrder = new Order({
            firstName: req.session.firstName,
            lastName:  req.session.lastName,
            email: req.session.email,
            address: newAddress,
            total,
            orderDetails: orderDetails,
            status: "Order In",
        });
        // console.log("New order:", newOrder);
        // Save Order to DB:
        newOrder.save().then(order => res.status(200).json({ message: "success", data: order }))
            .catch(err => res.status(400).json({ message: "Error", error: err }))
    } else { // else no address2, without address 2 field:
        if (req.session.address2 === undefined) { address2 = "" }
        // if(state === undefined) {state = ""}
        // console.log("HERE GRAND TOTAL: ", total)
        const newAddress = req.session.address1 + " " + req.session.address2 + " " + req.session.state.toUpperCase() + ". " + req.session.zipCode;
        const newOrder = new Order({
            firstName: req.session.firstName,
            lastName:  req.session.lastName,
            email: req.session.email,
            address: newAddress,
            total: total,
            orderDetails: orderDetails,
            status: "Order In",
        });
        // console.log("New order else:", newOrder);
        

        // Save Order to DB:
        newOrder.save().then(order => res.status(200).json({ message: "success", data: order }))
            .catch(err => res.status(400).json({ message: "Error", error: err }))
    }
});

// @ route    POST api/Orders/:id
// @ desc    Delete a Order:
// @ access   Public
router.delete("/:id", (req, res) => {
    Order.findById(req.params.id)
        .then(order => order.remove().then(() => res.status(200).json({ message: "Order Successfully Removed!" })))
        .catch(err => res.status(404).json({ message: "Error", error: "Order Doesn't Exist" }))
})

// @ route    PUT api/Orders/ID
// @ desc    Edit Order By ID Route
// @ access   Private
router.put("/:id", (req, res) => {
    Order.findById(req.params.id, (err, order) => {
        if (err) {
            res.json({ message: "Error", error: err });
        }
        else {
            // Weird way of doing so as usually entries wont even get this far, but if the entries are null, this will hit
            try {
                order.set(req.body)
            } catch{
                return res.status(400).json({ message: "Error", error: "Cannot save, one of the inputs is empty" })
            }

            order.save((err) => {
                if (err) {
                    res.status(400).json({ message: "Error", error: err });
                }
                else {
                    res.status(200).json({ message: "Success", data: order });
                }
            });
        }
    });
});

// @ route    GET api/Orders/ID
// @ desc    Show one Order by ID
// @ access   Private
router.get("/:id", (req, res) => {
    Order.findById(req.params.id, (err, order) => {
        if (err) {
            res.json({ message: "Error", error: "ID doesn't exist..." });
        }
        else {
            res.json({ message: "Success", data: order });
        }
    });
});

module.exports = router;