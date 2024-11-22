const nodemailer = require("nodemailer");

exports.email = function (req, _res) {
  console.log({ body: req.body });
  console.log({ env: process.env.USER_EMAIL });

  const today = new Date();
  const fileClient = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>New email template 2024-11-20</title> <!--[if (mso 16)]><style type="text/css"> a {text-decoration: none;}  </style><![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]><noscript> <xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> </noscript>
<![endif]--><style type="text/css">.rollover:hover .rollover-first { max-height:0px!important; display:none!important;}.rollover:hover .rollover-second { max-height:none!important; display:block!important;}.rollover span { font-size:0px;}u + .body img ~ div div { display:none;}#outlook a { padding:0;}span.MsoHyperlink,span.MsoHyperlinkFollowed { color:inherit; mso-style-priority:99;}a.es-button { mso-style-priority:100!important; text-decoration:none!important;}a[x-apple-data-detectors],#MessageViewBody a { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important;}.es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all;}@media only screen and (max-width:600px) {h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important }
 h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-p-default { } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important }
 .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important }
 .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important; display:block } .es-spacer { display:inline-table }
 a.es-button, button.es-button { font-size:20px!important; padding:6px 25px 6px 25px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important; display:table-row!important } tr.es-desk-hidden { display:table-row!important }
 table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .h-auto { height:auto!important } }@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }</style>
 </head> <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FFFFFF"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#ffffff"></v:fill> </v:background><![endif]--><table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF"><tr style="border-collapse:collapse">
<td valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr style="border-collapse:collapse"><td bgcolor="#f7f7f7" align="center" class="es-adaptive" style="padding:0;Margin:0;background-color:#f7f7f7"><table cellspacing="0" cellpadding="0" align="center" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none"> </table></td></tr></table> <table align="center" cellspacing="0" cellpadding="0" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0"><table align="center" cellspacing="0" cellpadding="0" bgcolor="#ffffff" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"><tr style="border-collapse:collapse"><td align="left" data-custom-paddings="true" style="padding:0;Margin:0;padding-top:20px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td align="center" valign="top" style="padding:0;Margin:0;width:600px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;font-size:0"><img src="https://yhfjxf.stripocdn.email/content/guids/c9903540-5b6d-4b47-b1c7-034130bd4bda/images/gb571577ca0f92f76c8cae9e31312334eb18c24484d89271eeae38ae086e382f4594b095659b5fcb9db12d75c6fe8d585_640.png" alt="Image" title="Image" width="260" class="adapt-img" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" height="272"></td> </tr></table></td></tr></table></td></tr></table></td></tr></table> <table align="center" cellspacing="0" cellpadding="0" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0"><table align="center" cellspacing="0" cellpadding="0" bgcolor="#ffffff" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;border:1px solid #00000000;width:600px;border-width:1px;border-color:#00000000;border-style:solid" role="none"><tr style="border-collapse:collapse"><td align="left" data-custom-paddings="true" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:40px;padding-left:40px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:518px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td align="center" style="padding:0;Margin:0"><h2 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:28.8px;color:#333333">Hey there!<br></h2> </td></tr><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-top:15px"><p class="es-m-txt-c" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;font-size:14px;color:#333333">Thank you for your recent payment of<strong> ${req.body.amount} $</strong>. We truly appreciate your promptness and trust in our services.<br><br>If you have any questions or need further assistance, please don't hesitate to reach out to us at contact information.<br><br>We look forward to serving you again in the future!<br><br>Best regards,<br>ADCS TEAM<br></p></td></tr> <tr style="border-collapse:collapse">
<td align="center" style="Margin:0;padding-top:20px;padding-right:10px;padding-bottom:15px;padding-left:10px"><span class="es-button-border" style="border-style:solid;border-color:#474745;background:#474745;border-width:0px;display:inline-block;border-radius:20px;width:auto"><a href="https://ashburndcs.com/" target="_blank" class="es-button" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#EFEFEF;font-size:16px;padding:10px 20px 10px 20px;display:inline-block;background:#474745;border-radius:20px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-weight:normal;font-style:normal;line-height:19.2px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #474745">Visit Webiste</a></span></td></tr></table></td></tr></table></td></tr></table></td></tr> </table>
 <table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top"><tr style="border-collapse:collapse"><td bgcolor="#f7f7f7" align="center" style="padding:0;Margin:0;background-color:#f7f7f7"><table cellspacing="0" cellpadding="0" align="center" class="es-footer-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F7F7F7;width:600px"><tr style="border-collapse:collapse">
<td align="left" data-custom-paddings="true" style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td valign="top" align="center" style="padding:0;Margin:0;width:560px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td align="center" style="padding:0;Margin:0;padding-bottom:5px"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:30px;color:#333333">Let's get social</h3> </td></tr><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0"><table cellspacing="0" cellpadding="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px"><a href="https://viewstripo.email/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Facebook" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
 <td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px"><a href="https://viewstripo.email/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Youtube" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td><td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px"><a href="https://viewstripo.email/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Pinterest" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/pinterest-logo-black.png" alt="P" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
 <td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px"><a href="https://viewstripo.email/" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Instagram" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Ig" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td><td valign="top" align="center" style="padding:0;Margin:0"><a href="https://viewstripo.email/" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="X" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png" alt="X" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td></tr></table></td></tr>
 <tr style="border-collapse:collapse"><td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">You are receiving this email because you have visited our site or asked us about the regular newsletter. You can&nbsp;<a target="_blank" class="unsubscribe" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px;line-height:21px" href="">unsubscribe here</a>&nbsp;or&nbsp;<a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px;line-height:21px">update your subscription preferences</a>.</p></td></tr> <tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>ADCS</strong></p></td></tr><tr style="border-collapse:collapse"><td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">© 2024</p></td></tr></table></td></tr></table></td></tr></table></td></tr></table> <table align="center" cellspacing="0" cellpadding="0" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0"><table align="center" cellspacing="0" cellpadding="0" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none"><tr style="border-collapse:collapse"><td align="left" data-custom-paddings="true" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;display:none"></td> </tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div><div style="position:absolute;left:-9999px;top:-9999px;margin:0px"></div></body></html>`;
  const fileOwner = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>New email template 2024-11-20</title> <!--[if (mso 16)]><style type="text/css"> a {text-decoration: none;}  </style><![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]><noscript> <xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> </noscript>
<![endif]--><style type="text/css">.rollover:hover .rollover-first { max-height:0px!important; display:none!important;}.rollover:hover .rollover-second { max-height:none!important; display:block!important;}.rollover span { font-size:0px;}u + .body img ~ div div { display:none;}#outlook a { padding:0;}span.MsoHyperlink,span.MsoHyperlinkFollowed { color:inherit; mso-style-priority:99;}a.es-button { mso-style-priority:100!important; text-decoration:none!important;}a[x-apple-data-detectors],#MessageViewBody a { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important;}.es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all;}@media only screen and (max-width:600px) {h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important }
 h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-p-default { } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important }
 .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important }
 .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important; display:block } .es-spacer { display:inline-table }
 a.es-button, button.es-button { font-size:20px!important; padding:6px 25px 6px 25px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important; display:table-row!important } tr.es-desk-hidden { display:table-row!important }
 table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .h-auto { height:auto!important } }@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }</style>
 </head> <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FFFFFF"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#ffffff"></v:fill> </v:background><![endif]--><table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF"><tr style="border-collapse:collapse">
<td valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr style="border-collapse:collapse"><td bgcolor="#f7f7f7" align="center" class="es-adaptive" style="padding:0;Margin:0;background-color:#f7f7f7"><table cellspacing="0" cellpadding="0" align="center" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none"> </table></td></tr></table> <table align="center" cellspacing="0" cellpadding="0" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0"><table align="center" cellspacing="0" cellpadding="0" bgcolor="#ffffff" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"><tr style="border-collapse:collapse"><td align="left" data-custom-paddings="true" style="padding:0;Margin:0;padding-top:20px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td align="center" valign="top" style="padding:0;Margin:0;width:600px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;font-size:0"><img src="https://yhfjxf.stripocdn.email/content/guids/c9903540-5b6d-4b47-b1c7-034130bd4bda/images/gb571577ca0f92f76c8cae9e31312334eb18c24484d89271eeae38ae086e382f4594b095659b5fcb9db12d75c6fe8d585_640.png" alt="Image" title="Image" width="260" class="adapt-img" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" height="272"></td> </tr></table></td></tr></table></td></tr></table></td></tr></table> <table align="center" cellspacing="0" cellpadding="0" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0"><table align="center" cellspacing="0" cellpadding="0" bgcolor="#ffffff" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;border:1px solid #00000000;width:600px;border-width:1px;border-color:#00000000;border-style:solid" role="none"><tr style="border-collapse:collapse"><td align="left" data-custom-paddings="true" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:40px;padding-left:40px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:518px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td align="center" style="padding:0;Margin:0"><h2 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:28.8px;color:#333333">Hey there!<br></h2> </td></tr><tr style="border-collapse:collapse"><td align="center" style="padding:0;Margin:0;padding-top:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;font-size:14px;color:#333333">Dear Tahir,</p>
<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;font-size:14px;color:#333333">This is to confirm that a payment of ${
    req.body.amount
  } $ has been successfully made to your account on ${today
    .toISOString()
    .slice(
      0,
      10
    )}.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;font-size:14px;color:#333333">Details of the Payment:</p> <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;font-size:14px;color:#333333">Amount: ${
    req.body.amount
  }<br>Date: ${today.toISOString().slice(0, 10)}<br>Transaction Reference: ${
    req.body.transaction
  }</p>
<p class="es-m-txt-c" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;font-size:14px;color:#333333"><br><br>Best regards,<br>ADCS TEAM</p></td></tr> <tr style="border-collapse:collapse">
<td align="center" style="Margin:0;padding-top:20px;padding-right:10px;padding-bottom:15px;padding-left:10px"><span class="es-button-border" style="border-style:solid;border-color:#474745;background:#474745;border-width:0px;display:inline-block;border-radius:20px;width:auto"><a href="https://ashburndcs.com/" target="_blank" class="es-button" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#EFEFEF;font-size:16px;padding:10px 20px 10px 20px;display:inline-block;background:#474745;border-radius:20px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-weight:normal;font-style:normal;line-height:19.2px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #474745">Visit Webiste</a></span></td></tr></table></td></tr></table></td></tr></table></td></tr> </table>
 <table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top"><tr style="border-collapse:collapse"><td bgcolor="#f7f7f7" align="center" style="padding:0;Margin:0;background-color:#f7f7f7"><table cellspacing="0" cellpadding="0" align="center" class="es-footer-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F7F7F7;width:600px"><tr style="border-collapse:collapse">
<td align="left" data-custom-paddings="true" style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td valign="top" align="center" style="padding:0;Margin:0;width:560px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td align="center" style="padding:0;Margin:0;padding-bottom:5px"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:30px;color:#333333">Let's get social</h3> </td></tr><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0"><table cellspacing="0" cellpadding="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px"><a href="https://viewstripo.email/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Facebook" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
 <td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px"><a href="https://viewstripo.email/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Youtube" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td><td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px"><a href="https://viewstripo.email/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Pinterest" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/pinterest-logo-black.png" alt="P" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
 <td valign="top" align="center" style="padding:0;Margin:0;padding-right:20px"><a href="https://viewstripo.email/" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Instagram" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Ig" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td><td valign="top" align="center" style="padding:0;Margin:0"><a href="https://viewstripo.email/" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="X" src="https://yhfjxf.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png" alt="X" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td></tr></table></td></tr>
 <tr style="border-collapse:collapse"><td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">You are receiving this email because you have visited our site or asked us about the regular newsletter. You can&nbsp;<a target="_blank" class="unsubscribe" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px;line-height:21px" href="">unsubscribe here</a>&nbsp;or&nbsp;<a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px;line-height:21px">update your subscription preferences</a>.</p></td></tr> <tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>ADCS</strong></p></td></tr><tr style="border-collapse:collapse"><td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">© 2024</p></td></tr></table></td></tr></table></td></tr></table></td></tr></table> <table align="center" cellspacing="0" cellpadding="0" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0"><table align="center" cellspacing="0" cellpadding="0" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none"><tr style="border-collapse:collapse"><td align="left" data-custom-paddings="true" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse"><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;display:none"></td> </tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div><div style="position:absolute;left:-9999px;top:-9999px;margin:0px"></div></body></html>`;

  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  let mailDetails = {
    from: "ADCS",
    to: req.body.email,
    subject: "Payment Confirmation",
    html: fileClient,
  };
  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (data) {
      console.log("Email sent successfully");
    } else {
      console.log(`${err}`);
    }
  });
  let mailDetailOwner = {
    from: "ADCS",
    to: process.env.OWNER_MAIL,
    subject: "Payment Confirmation",
    html: fileOwner,
  };
  mailTransporter.sendMail(mailDetailOwner, function (err, data) {
    if (data) {
      console.log("Email sent successfully");
    } else {
      console.log(`${err}`);
    }
  });
};
