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


const setOrderINFO = (itemDetails) => {
    var ordersINFO =`<table style="width:100%"> <tr>
    <th>Name</th><hr>
    <th>Qty</th><hr>
    <th>Price</th><hr>
    <th>Sub Total</th><hr>
  </tr>`;
    // console.log("ITEM DETAILS", itemDetails)
    for(let j=0;j<itemDetails.length;j++){
        // console.log(itemDetails[j].name)
        ordersINFO += `<tr> <th> ${itemDetails[j].name} </th> <th> ${itemDetails[j].desiredQuantity} </th>  <th> $${itemDetails[j].price} </th> <th> $${itemDetails[j].total} </th></tr>`
    }
    ordersINFO += "</table>"
    // console.log("HERE TEST ORDERS ", ordersINFO);
    return ordersINFO
}

function sendBuyerEmail(req, res) {
    
    // console.log("hitting email confirmation, req.body is: ");
    const { total, orderDetails } = req.body;
    var ordersInfo = setOrderINFO(orderDetails);
    var afterShipping = total + 4.98;
    // console.log("HGERE TEST ORDERS INFO STRING", ordersInfo)
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
    // var text = 'Hello world from \n\n' + "EsC- CodeSquad," + `ORDER DETAILS: `
    var htmlTest = `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>Tegrity Farms Order:</title>
    
    
    </head>
    
    <body>
    
      <html xmlns="http://www.w3.org/1999/xhtml">
    
      <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        <media_query_styles></media_query_styles>
      </head>
    
      <body style="margin:0;padding:0;background-color:#FFF">
        <center>
          <table align="center" border="0" cellpadding="0" cellspacing="0" id="bodyTable" width="100%" style="border-collapse:collapse;;padding:0;background-color:#FFF;height:100%;margin:0;width:100%">
            <tbody>
              <tr>
                <td align="center" id="bodyCell" valign="top" style="border-collapse:collapse;;padding-top:50px;padding-left:20px;padding-bottom:20px;padding-right:20px;border-top:0;height:100%;margin:0;width:100%">
                  <table border="0" cellpadding="0" cellspacing="0" class="templateContainer" width="600" style="border-collapse:collapse;;border:0 solid #FFF;background-color:#FFF">
                    <tbody>
                      <tr>
                        <td class="templateContainerInner" style="border-collapse:collapse;;padding:0">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="kmDividerBlock" style="border-collapse:collapse;">
                                          <tbody class="kmDividerBlockOuter">
                                            <tr>
                                              <td class="kmDividerBlockInner" style="border-collapse:collapse;;padding-top:0px;">
                                                <table class="kmDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td style="border-collapse:collapse;"><span></span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmImageBlockOuter">
                                            <tr>
                                              <td class="kmImageBlockInner" style="border-collapse:collapse;;padding:9px;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmImageContent" valign="top" style="border-collapse:collapse;;padding:0;padding-top:0px;padding-bottom:0;padding-left:9px;padding-right:9px;text-align: center;">
                                                        <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/bVvvBe/images/810e1473-f682-4add-acbd-987d00bdf6bf.jpeg" width="564" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:1200px;">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmImageBlockOuter">
                                            <tr>
                                              <td class="kmImageBlockInner" style="border-collapse:collapse;;padding:0px;padding-top:20px;padding-bottom:10px;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmImageContent" valign="top" style="border-collapse:collapse;;padding:0;padding:0;text-align: center;">
                                                        <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/bVvvBe/images/5fdf112d-9b22-412a-8546-da9d2240489d.jpeg" width="600" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:1300px;">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmTextBlockOuter">
                                            <tr>
                                              <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;;background-color:#FFFFFF;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmTextContent" valign="top" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;padding-top:9px;padding-bottom:9px;background-color:#FFFFFF;padding-left:18px;padding-right:18px;">
                                                        <p style="margin:0;padding-bottom:1em"><span style="line-height: 1.6em;"><span style="line-height: 20.7999992370605px;">Hey ${req.session.firstName+" "+req.session.lastName}, $</span>
                                                          <br>
                                                          <br>Your Huckberry order
                                                          <a href="https://huckberry.com/login" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline;line-height: 20.8px;"><span style="line-height: 20.8px;">R123456789 ${req.session.orderID}</span>
                                                          </a> has successfully been placed. You'll find all the details about your order below, and we'll send you a shipping confirmation email as soon
                                                          as your order ships. In the meantime, you can</span>
                                                          <a href="#" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline;line-height: 1.6em;">share Tegrity and earn store credit!</a>
                                                        </p>
                                                        <p style="margin:0;padding-bottom:0">Questions? Suggestions? Insightful shower thoughts?
                                                          <a href="mailto:support@huckberry.com" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline">Shoot us an email.</a>
                                                        </p>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmTableBlock kmTableMobile" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmTableBlockOuter">
                                            <tr>
                                              <td class="kmTableBlockInner" valign="top" style="border-collapse:collapse;;padding-top:9px;padding-bottom:9px;background-color:#FFFFFF;padding-left:18px;padding-right:18px;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTable" width="100%" style="border-collapse:collapse;;background-color:#FFFFFF;">
                                                  <thead>
                                                    <tr>
                                                      <th valign="top" class="kmTextContent" style="color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;text-align:left;font-weight:bold;padding-bottom:4px;padding-right:0px;padding-left:0px;padding-top:4px;">Estimated U.S. Delivery</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr class="kmTableRow">
                                                      <td valign="top" class="kmTextContent" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;border-right:none;border-bottom:none;text-align:left;;border-top-style:solid;padding-bottom:4px;padding-right:0px;padding-left:0px;padding-top:4px;border-top-color:#d9d9d9;border-top-width:1px;">
                                                        <span style="line-height: 20.7999992370605px;">04/10/16 - </span><span style="line-height: 20.7999992370605px;">04/14/16  (<a href="https://huckberry.com/shipping?utm_campaign=Order+Confirmation+%28a8pbk7%29&utm_medium=email&utm_source=Order+Confirmation" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline">Learn More</a>)</span>
    
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmTableBlock kmTableMobile" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmTableBlockOuter">
                                            <tr>
                                              <td class="kmTableBlockInner" valign="top" style="border-collapse:collapse;;padding-top:9px;padding-bottom:9px;background-color:#FFFFFF;padding-left:18px;padding-right:18px;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTable" width="100%" style="border-collapse:collapse;;background-color:#FFFFFF;">
                                                  <thead>
                                                    <tr>
                                                      <th valign="top" class="kmTextContent" style="color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;text-align:left;width:50%;font-weight:bold;padding-bottom:4px;padding-right:0px;padding-left:0px;padding-top:4px;">Order Number</th>
                                                      <th valign="top" class="kmTextContent" style="color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;text-align:left;font-weight:bold;padding-bottom:4px;padding-right:0px;padding-left:0px;padding-top:4px;">Order Date</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr class="kmTableRow">
                                                      <td valign="top" class="kmTextContent" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;border-bottom:none;text-align:left;width:50%;;border-top-style:solid;padding-bottom:4px;padding-right:0px;padding-left:0px;padding-top:4px;border-top-color:#d9d9d9;border-top-width:1px;">
                                                        <a href="https://huckberry.com/login" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline"><span style="line-height: 20.7999992370605px;">R123456789</span>
                                                        </a>
                                                      </td>
                                                      <td valign="top" class="kmTextContent" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;border-right:none;border-bottom:none;text-align:left;;border-top-style:solid;padding-bottom:4px;padding-right:0px;padding-left:0px;padding-top:4px;border-top-color:#d9d9d9;border-top-width:1px;">
                                                        <span style="line-height: 20.7999992370605px;">4/7/2016${req.session.orderDate}</span>
    
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmTableBlock kmTableMobile" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmTableBlockOuter">
                                            <tr>
                                              <td class="kmTableBlockInner" valign="top" style="border-collapse:collapse;;padding-top:9px;padding-bottom:9px;background-color:#FFFFFF;padding-left:18px;padding-right:18px;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTable" width="100%" style="border-collapse:collapse;;background-color:#FFFFFF;">
                                                  <thead>
                                                    <tr>
                                                      <th valign="top" class="kmTextContent" style="color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;text-align:left;padding-right:0px;padding-bottom:4px;font-weight:bold;padding-left:0px;padding-top:4px;">Shipping Address</th>
                                                      <th valign="top" class="kmTextContent" style="color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;text-align:left;padding-right:0px;padding-bottom:4px;font-weight:bold;padding-left:0px;padding-top:4px;">Billing Address</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr class="kmTableRow">
                                                      <td valign="top" class="kmTextContent" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;border-bottom:none;text-align:left;;border-top-style:solid;padding-bottom:4px;padding-right:0px;padding-left:0px;padding-top:4px;border-top-color:#d9d9d9;border-top-width:1px;">
                                                        <p style="margin:0;padding-bottom:0"><span style="line-height: 20.7999992370605px;"></span><span style="line-height: 20.8px;">Someone</span>
                                                          <br style="line-height: 20.8px;">
                                                          <span style="line-height: 20.8px;">111 XXXXXXXX</span>
                                                          <br style="line-height: 20.8px;">
                                                          <span style="line-height: 20.8px;"> XXXXXXXXXX<br>
    XXXXXX</span>
                                                        </p>
                                                      </td>
                                                      <td valign="top" class="kmTextContent" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;border-right:none;border-bottom:none;text-align:left;;border-top-style:solid;padding-bottom:4px;padding-right:0px;padding-left:0px;padding-top:4px;border-top-color:#d9d9d9;border-top-width:1px;">
                                                        <span style="line-height: 20.8px;">Someone</span>
                                                        <br style="line-height: 20.8px;">
                                                        <span style="line-height: 20.8px;">1111 XXXXXXX</span>
                                                        <br style="line-height: 20.8px;">
                                                        <span style="line-height: 20.8px;"> XXXXXXXXXXXX<br>
    <span style="line-height: 20.8px;">XXXXX</span></span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmTextBlockOuter">
                                            <tr>
                                              <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;;background-color:#FFFFFF;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmTextContent" valign="top" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;padding-top:15px;padding-bottom:5px;background-color:#FFFFFF;padding-left:18px;padding-right:18px;">
                                                        <p style="margin:0;padding-bottom:0"><b>Here's what you ordered:</b>
                                                        </p>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        
                                              </td>
                                            </tr>
                                          </tbody>
                                          ${ordersInfo}
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmTextBlockOuter">
                                            <tr>
                                              <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;;background-color:#FFFFFF;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmTextContent" valign="top" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;padding-top:9px;padding-bottom:9px;background-color:#FFFFFF;padding-left:18px;padding-right:18px;">
                                                        <p style="margin:0;padding-bottom:0;text-align: right;"><strong>Subtotal: </strong>${req.session.grandTotal}
                                                          <br>
                                                          <strong>Shipping: </strong><span style="line-height: 20.7999992370605px; text-align: right;">$4.98</span><strong><br>
    Sales Tax: </strong>$0.00
                                                          <br>
                                                        </p>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmTableBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmTableBlockOuter">
                                            <tr>
                                              <td class="kmTableBlockInner" valign="top" style="border-collapse:collapse;;padding-top:0px;padding-bottom:0px;background-color:#FFFFFF;padding-left:0px;padding-right:0px;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTable" width="100%" style="border-collapse:collapse;;">
                                                  <thead>
                                                    <tr>
                                                      <th valign="top" class="kmTextContent" style="color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;text-align:left;width:70%;padding-top:0px;font-weight:bold;padding-bottom:0px;padding-left:0px;padding-right:0px;"></th>
                                                      <th valign="top" class="kmTextContent" style="color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;text-align:right;width:30%;padding-top:0px;font-weight:bold;padding-bottom:0px;padding-left:0px;padding-right:0px;"></th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr class="kmTableRow">
                                                      <td valign="top" class="kmTextContent" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;border-bottom:none;text-align:left;width:70%;;border-top-style:none;padding-bottom:0px;padding-right:0px;padding-left:0px;padding-top:0px;border-top-color:#d9d9d9;border-top-width:0px;"></td>
                                                      <td valign="top" class="kmTextContent" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;border-right:none;border-bottom:none;text-align:right;width:30%;;border-top-style:none;padding-bottom:0px;padding-right:0px;padding-left:0px;padding-top:0px;border-top-color:#d9d9d9;border-top-width:0px;">
                                                        <table width="100%;" style="border-collapse:collapse;">
                                                          <tbody>
                                                            <tr>
                                                              <td style="border-collapse:collapse;;text-align: right;background:#e4e4e4;padding: 9px 18px;"> <strong style="font-size: 14px;">TOTAL  </strong><span style="font-size: 14px;">$${afterShipping}</span>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <hr>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmTextBlockOuter">
                                            <tr>
                                              <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;;background-color:#FFFFFF;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmTextContent" valign="top" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left;padding-top:9px;padding-bottom:9px;background-color:#FFFFFF;padding-left:18px;padding-right:18px;"></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="kmDividerBlock" style="border-collapse:collapse;;background-color:#FFFFFF">
                                          <tbody class="kmDividerBlockOuter">
                                            <tr>
                                              <td class="kmDividerBlockInner" style="border-collapse:collapse;;padding-top:20px;">
                                                <table class="kmDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td style="border-collapse:collapse;"><span></span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmImageBlockOuter">
                                            <tr>
                                              <td class="kmImageBlockInner" style="border-collapse:collapse;;padding:0px;padding-top:50px;padding-bottom:20px;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmImageContent" valign="top" style="border-collapse:collapse;;padding:0;padding:0;text-align: center;">
                                                        <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/bVvvBe/images/94de3cac-06a8-46c7-be79-f9d60476397f.jpeg" width="600" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:1200px;">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmImageBlockOuter">
                                            <tr>
                                              <td class="kmImageBlockInner" style="border-collapse:collapse;;padding:0px;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmImageContent" valign="top" style="border-collapse:collapse;;padding:0;padding:0;text-align: center;">
                                                        <a href="https://huckberry.com/store/iron-and-resin/category/p/29012-rambler-jacket?utm_campaign=Order+Confirmation+%28a8pbk7%29&utm_medium=email&utm_source=Order+Confirmation" target="_self" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline">
                                                          <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/bVvvBe/images/2fa3202e-5867-44c6-896a-37e3455819ac.png" width="198" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:402px;">
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmImageBlockOuter">
                                            <tr>
                                              <td class="kmImageBlockInner" style="border-collapse:collapse;;padding:0px;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmImageContent" valign="top" style="border-collapse:collapse;;padding:0;padding:0;text-align: center;">
                                                        <a href="https://huckberry.com/store/kammok/category/p/17015-roo-hammock-python-straps?utm_campaign=Order+Confirmation+%28a8pbk7%29&utm_medium=email&utm_source=Order+Confirmation" target="_self" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline">
                                                          <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/bVvvBe/images/708c2e35-39ce-4845-8977-605f6972a323.png" width="198" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:402px;">
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmImageBlockOuter">
                                            <tr>
                                              <td class="kmImageBlockInner" style="border-collapse:collapse;;padding:0px;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmImageContent" valign="top" style="border-collapse:collapse;;padding:0;padding:0;text-align: center;">
                                                        <a href="https://huckberry.com/store/huckberry/category/p/22992-seiko-dive-watch?utm_campaign=Order+Confirmation+%28a8pbk7%29&utm_medium=email&utm_source=Order+Confirmation" target="_self" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline">
                                                          <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/bVvvBe/images/d385a5e4-18b6-43a0-89dd-824d56f70f68.png" width="198" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:401px;">
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmImageBlockOuter">
                                            <tr>
                                              <td class="kmImageBlockInner" style="border-collapse:collapse;;padding:0px;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmImageContent" valign="top" style="border-collapse:collapse;;padding:0;padding:0;text-align: center;">
                                                        <a href="https://huckberry.com/store/onia/category/p/25420-calder-7-5?utm_campaign=Order+Confirmation+%28a8pbk7%29&utm_medium=email&utm_source=Order+Confirmation" target="_self" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline">
                                                          <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/bVvvBe/images/d7b2d07a-5beb-49d9-879b-fc5a35f9097a.png" width="198" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:401px;">
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmImageBlockOuter">
                                            <tr>
                                              <td class="kmImageBlockInner" style="border-collapse:collapse;;padding:0px;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmImageContent" valign="top" style="border-collapse:collapse;;padding:0;padding:0;text-align: center;">
                                                        <a href="https://huckberry.com/store/seavees/category/p/23048-08-63-hermosa-plimsoll-standard?utm_campaign=Order+Confirmation+%28a8pbk7%29&utm_medium=email&utm_source=Order+Confirmation" target="_self" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline">
                                                          <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/bVvvBe/images/343b2f7f-d4d0-497d-aacf-9939fb5e95e5.png" width="198" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:397px;">
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmImageBlockOuter">
                                            <tr>
                                              <td class="kmImageBlockInner" style="border-collapse:collapse;;padding:0px;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmImageContent" valign="top" style="border-collapse:collapse;;padding:0;padding:0;text-align: center;">
                                                        <a href="https://huckberry.com/store/matteo/category/p/33293-vintage-linen-duvet-set-queen?utm_campaign=Order+Confirmation+%28a8pbk7%29&utm_medium=email&utm_source=Order+Confirmation" target="_self" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline">
                                                          <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/bVvvBe/images/d5f9567a-0477-4ce6-ab66-21954ce94ba0.png" width="198" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:397px;">
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="kmDividerBlock" style="border-collapse:collapse;;background-color:#FFFFFF">
                                          <tbody class="kmDividerBlockOuter">
                                            <tr>
                                              <td class="kmDividerBlockInner" style="border-collapse:collapse;;padding-top:5px;">
                                                <table class="kmDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td style="border-collapse:collapse;"><span></span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="kmDividerBlock" style="border-collapse:collapse;">
                                          <tbody class="kmDividerBlockOuter">
                                            <tr>
                                              <td class="kmDividerBlockInner" style="border-collapse:collapse;;padding-top:40px;">
                                                <table class="kmDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td style="border-collapse:collapse;"><span></span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="kmSplitBlock" width="100%" style="border-collapse:collapse;">
                                          <tbody class="kmSplitBlockOuter">
                                            <tr>
                                              <td class="kmSplitBlockInner" valign="top" style="border-collapse:collapse;;padding-top:20px;padding-bottom:9px;background-color:#000000;padding-left:18px;padding-right:18px;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmSplitContentOuter" width="100%" style="border-collapse:collapse;">
                                                  <tbody>
                                                    <tr>
                                                      <td class="kmSplitContentInner" valign="top" style="border-collapse:collapse;">
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmSplitContentLeftContentContainer" width="264" style="border-collapse:collapse;">
                                                          <tbody>
                                                            <tr>
                                                              <td class="kmTextContent" valign="top" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left">
                                                                <span style="font-size:11px;"><strong></strong></span>
    
    
                                                                <h3 style="color:#666;display:block;font-family:Helvetica, Arial;font-size:16px;font-style:normal;font-weight:normal;line-height:110%;letter-spacing:normal;margin:0;margin-bottom:9px;text-align:left"><strong><span style="font-size: 11px;">Questions? <a href="https://huckberry.com/contact-us?utm_campaign=Order+Confirmation+%28a8pbk7%29&utm_medium=email&utm_source=Order+Confirmation" style="word-wrap:break-word;color:#E36E3A;font-weight:normal;text-decoration:underline">We're here to help.</a></span></strong></h3>
    
                                                                <span style="font-size:11px;"><strong></strong></span>
    
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <table align="right" border="0" cellpadding="0" cellspacing="0" class="kmSplitContentRightContentContainer" width="264" style="border-collapse:collapse;">
                                                          <tbody>
                                                            <tr>
                                                              <td class="kmTextContent" valign="top" style="border-collapse:collapse;;color:#505050;font-family:Helvetica, Arial;font-size:14px;line-height:150%;text-align:left">
                                                                <p style="margin:0;padding-bottom:0;text-align: right;"><strong><span style="font-size:11px;"><span style="font-family: arial, sans-serif; line-height: 19.2000007629395px;">© HUCKBERRY 2016</span></span></strong>
                                                                </p>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="50%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="25%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft firstColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                      <td class="rowContainer kmFloatLeft lastColumn" valign="top" width="33%" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" valign="top" style="border-collapse:collapse;">
                                <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%" style="border-collapse:collapse;">
                                  <tbody>
                                    <tr>
                                      <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        <img src="http://send.huckberry.com/mpss/o/4gA/q2wVAA/t.1w5/m3_D2AdWTb2cQK08YkBg-w/o.gif" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"
        />
      </body>
    
      </html>
    
    
    </body>
    
    </html>`;

    var mailOptions = {
        from: '"Code Squad "<no-Reply@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: `${firstName} ${lastName} : Code Squad Recipt`, // Subject line
        //text: text, //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
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
    async function setOrdSession (ordID, ordDate){
            req.session.orderID = ordID;
            req.session.orderDate = ordDate
            if(await req.session.orderID !== undefined && await req.session.orderDate !== undefined) await req.session.save()
            console.log("HERE IS CURRENT SESSION AFTER ORDER SAVES:", req.session.orderID, "and: ", req.session.orderDate)
    }
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
        newOrder.save((err, result) => {
            if(err){
                return res.status(400).json({ message: "Error", error: err })
            }else{
                // console.log("HERE TEST IN ORDERS SAVE RES", result._id, "date :", result.date)
                setOrdSession(result._id, result.date)
                return res.status(200).json({ message: "success", data: result })
            }
        })
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