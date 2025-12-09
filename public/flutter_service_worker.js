'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bba5ce011fee2eb9220b0c3f4c33d443",
"assets/AssetManifest.bin.json": "677168d97c171b2bc6e87399ebdaf9c3",
"assets/AssetManifest.json": "545e655584849928e9f8558b5eadac02",
"assets/assets/data/test/pos_order.test.json": "78545f00143e545f34372a2312e1e9d1",
"assets/assets/fonts/Mulish-Bold.ttf": "987e18dffd501e760afdbea36a4dbeed",
"assets/assets/fonts/Mulish-ExtraBold.ttf": "f4c4920f1de354965565fa1509f5aeae",
"assets/assets/fonts/Mulish-Regular.ttf": "31423d3904a79ab8fccbad8c31f0c645",
"assets/assets/fonts/Mulish-SemiBold.ttf": "922e5ae520dbced208a37bbfd3184b82",
"assets/assets/gif/empty_cart.gif": "97ce75452b2967689c882ce4a1d3c41d",
"assets/assets/gif/loader_ks.gif": "9b61d8778b41a0633de0bdc238e58f0b",
"assets/assets/icons/add_btn.png": "513f965c14191ccd4271d54488f43057",
"assets/assets/icons/bag.png": "26fe894090c6b86b8df74b996acafecb",
"assets/assets/icons/default_invoice.jpg": "393a84b6f243fa1b17c15480a9c7488d",
"assets/assets/icons/delivered_img.png": "860494c78a2351622b7639843e16ac2b",
"assets/assets/icons/generate_report_illustration.png": "b9c4886b3f03d50146990f0a4189b6db",
"assets/assets/icons/ic_aadhar.png": "01136c9022c0133651ead8902e507b90",
"assets/assets/icons/ic_accountant.png": "b05c0fa4a4a5f9034686bfff31957436",
"assets/assets/icons/ic_accountnumber.png": "894b4658ea7b257b476194fa206094e9",
"assets/assets/icons/ic_active.png": "963a854437f27e6aadfd916a25c33877",
"assets/assets/icons/ic_add_.png": "a7c5df3e606d886c35628336c9244d82",
"assets/assets/icons/ic_add_25px.png": "be68b4ab3160449385236eef94ba97f8",
"assets/assets/icons/ic_add_item.png": "931ad25ddb0b35471442392f3760776d",
"assets/assets/icons/ic_add_photo.png": "973941ad4d44f0991f55fd6bce84b520",
"assets/assets/icons/ic_address.png": "4f3dac35e4f75fc3845d68d036b05976",
"assets/assets/icons/ic_age.png": "f2a031d1cd702fd4b046f909121b2006",
"assets/assets/icons/ic_assign_shift.png": "68c52ceb39390b3e1edc331c9624f312",
"assets/assets/icons/ic_attach.png": "a2213c486a5fd96090f1119d51921a1c",
"assets/assets/icons/ic_attendance.png": "bd8f7f7d351209b0e12ad45c6a5d0d89",
"assets/assets/icons/ic_attendance_update.png": "320e0543f40d8544691a283877b1d788",
"assets/assets/icons/ic_available.png": "4fba0a64535ac4094bebddc2e423fc12",
"assets/assets/icons/ic_avatar.png": "547c88f8ea31fa566bcd264cc7ecf95e",
"assets/assets/icons/ic_back.png": "0e16de538483bcd9f2ef3c8e6192a7a0",
"assets/assets/icons/ic_backspace.png": "c59067a1e04e80905a98ecacb8060e5c",
"assets/assets/icons/ic_bank.png": "c797adab92cb565073bf014d495d9ad5",
"assets/assets/icons/ic_batch.png": "89d6614cb70d1505e2f9cd4d326a830f",
"assets/assets/icons/ic_belowSatisfy.png": "24a233e7dc32ad77fdeb89e430409c5a",
"assets/assets/icons/ic_billing_payment.png": "5d7bf035377e47c1b6c04ddea7df1ac3",
"assets/assets/icons/ic_boss.png": "d985376321dd61a7bcc8f28041f9d936",
"assets/assets/icons/ic_calendar_.png": "496e6cbbf43c80bd05005c635a1abcd5",
"assets/assets/icons/ic_calendar_filled.png": "8ecc45bd8f6461a9a397fb6fc316f16c",
"assets/assets/icons/ic_call_circle.png": "5c7c2a9eee99c2d57e573145273f31ac",
"assets/assets/icons/ic_cancel_circle.png": "1df1f5a345dda1ed93f9b01d20db5ed9",
"assets/assets/icons/ic_cancel_order.png": "cc00e4291aad757da761189a09c5ffd5",
"assets/assets/icons/ic_cancel_packaging.png": "9d07a7a7bbf76bb17c65a49b491081df",
"assets/assets/icons/ic_cancel_sale.png": "d58bddc0aa9035d083003d522f712e86",
"assets/assets/icons/ic_cancelled_bill_requests.png": "fa12018c479e5103820df427ab28017e",
"assets/assets/icons/ic_card.png": "a24d2308b0af438dc1d57b067ccec9fd",
"assets/assets/icons/ic_card_selected.png": "2b02b9fb122ff7e3f09c206b4fdfb3b7",
"assets/assets/icons/ic_cart.png": "441e34354c0826c0755cf7a205f1ed35",
"assets/assets/icons/ic_cash.png": "1e02fa9603811e99bcf7600a8a6ee67c",
"assets/assets/icons/ic_cash_selected.png": "5516203f04d0e445e225b0e54e736134",
"assets/assets/icons/ic_category.png": "d0ad532bed03bc8adcc8944ab8c34715",
"assets/assets/icons/ic_category_subcategory.png": "0f7311eab2a9fc36bb3f9e164f8e51fa",
"assets/assets/icons/ic_chechbox_filled.png": "9751134d79f970ee8f7cd69bcf5b66e2",
"assets/assets/icons/ic_checkbox_unfilled.png": "6cdd5243515b94eecd85cc91f5f99b59",
"assets/assets/icons/ic_click.png": "537a3fd0f03ba3a02851f9638c7a01ce",
"assets/assets/icons/ic_click_filled.png": "9f80d170e9f533810a2f4f86d69f3e62",
"assets/assets/icons/ic_close.png": "9fdd8e31e52dd54044adfaab42e1d2a1",
"assets/assets/icons/ic_compliance.png": "0f4dc462233721dea9421a3dc5eea8f1",
"assets/assets/icons/ic_contactnumber.png": "121ddf62738d981335120de9bb579ca9",
"assets/assets/icons/ic_contactperson.png": "58f5a2459bd67be791cd50c0ea532097",
"assets/assets/icons/ic_creditdays.png": "f305777b7b90c146c7b1bf46b0d63e10",
"assets/assets/icons/ic_creditlimit.png": "414f7d55609d72809e0c89bbde8d295c",
"assets/assets/icons/ic_cross.png": "02cad8ef2988cddabdface387ff396f0",
"assets/assets/icons/ic_customer_bulk_order.png": "1dad9144023826523f1833292f7df402",
"assets/assets/icons/ic_customers.png": "c0c3e55f75ea4151494495c29db659f2",
"assets/assets/icons/ic_customize_mithai.png": "2fa451f826a607731a564d2fb7e3875d",
"assets/assets/icons/ic_dashboard.png": "37ff91059f53fea11bd5ef084943bda5",
"assets/assets/icons/ic_date_.png": "c0547a80d7d96d82f44de80f2547c32a",
"assets/assets/icons/ic_delete.png": "bd7ab8ce129543dd8173ec74e2256115",
"assets/assets/icons/ic_delete_event.png": "bb857db85830d4a8fec09792bc67947b",
"assets/assets/icons/ic_delete_red.png": "afd0725b677f4789db5680a4e9355c0a",
"assets/assets/icons/ic_denied.png": "e758eb93ea6fd48299ec1a5e9a3d61e1",
"assets/assets/icons/ic_description.png": "1a001531befe9c07aad055f3e7f243ca",
"assets/assets/icons/ic_directions.png": "7c986b38b887097e07afa3e061ee3dea",
"assets/assets/icons/ic_disciplinary_.png": "c13aef71de1bb99bffe5140819916fd1",
"assets/assets/icons/ic_dispatch%2520order.png": "6e8ba37b1fa008f4e5ba8213319b72d8",
"assets/assets/icons/ic_dispatch%2520ready.png": "ec2ec3a204ff25853a46efefe90247f1",
"assets/assets/icons/ic_dispatch_ready.png": "a9b3dd2fe4f2a071b7aca1c3df3ba2d1",
"assets/assets/icons/ic_dispatched.png": "ad8e313e7473a2c343392494795c7ea5",
"assets/assets/icons/ic_downarrow.png": "9f171bf955d044bd83a306244f5af835",
"assets/assets/icons/ic_download.png": "0e15b2f60242432f45b240c22693d88b",
"assets/assets/icons/ic_downward_red.png": "b91c61c34fbfa872378092c56a21ff15",
"assets/assets/icons/ic_dropdown.png": "787d887f786ebe074ad2f5972648c181",
"assets/assets/icons/ic_early_leave.png": "182e650cd3cfaf8af2d26999e7262c8f",
"assets/assets/icons/ic_edit.png": "f229478d5a5177f1240fe7da7bcdb4ee",
"assets/assets/icons/ic_edit_blue.png": "e29c61a7c8e1619d0d013b63c25b6158",
"assets/assets/icons/ic_edit_circle.png": "c01c4d25815fb4d8f34dee33a27e36d5",
"assets/assets/icons/ic_email.png": "d5ad8c198918b8a962e7a754e348b314",
"assets/assets/icons/ic_emploee_salary@3x.png": "490529eaf7d6c88a49edcaebf3dd8620",
"assets/assets/icons/ic_employee%2520id@3x.png": "3e7bcb6598c792c210c6ad78600819e6",
"assets/assets/icons/ic_employee.png": "560272ed3974de1ccfcdaf9484f16001",
"assets/assets/icons/ic_employee_master.png": "b2afe5cbdbb03a8cb94a7f472814e622",
"assets/assets/icons/ic_event_name.png": "7d14c25c3aa2f997f1d944be663586ee",
"assets/assets/icons/ic_factory.png": "1d3a79dcb5406d2e0c954e1eb3217717",
"assets/assets/icons/ic_factory_request.png": "85830308366d13fba156cb4e976a4a59",
"assets/assets/icons/ic_father.png": "bb7af012b253ad6322b2157368fa6a44",
"assets/assets/icons/ic_feedback.png": "2013bf7786158c11c6eaaa312482d4cc",
"assets/assets/icons/ic_fexible_quantity.png": "79f09f5456922ef80bfee414cfc2692e",
"assets/assets/icons/ic_filter.png": "9aa8def6cd2568d01410b74c9c4371ca",
"assets/assets/icons/ic_filter_applied.png": "8c7f95432cace64bef11dba9d629bef3",
"assets/assets/icons/ic_flag.png": "ac8c52e50d8a2411cb349e39143c79a2",
"assets/assets/icons/ic_flag_24.png": "9162a37962de036028c1e2c322022100",
"assets/assets/icons/ic_flag_blue.png": "eba82c917f489b33417cebb142e53b51",
"assets/assets/icons/ic_gender.png": "23d217af45838dfc26ba322214e49bff",
"assets/assets/icons/ic_generate_report.png": "1c7e0a4f8761192b61f26e67b0cb7a28",
"assets/assets/icons/ic_gifting.png": "5f7db34bc06480f15f171bd59c89407d",
"assets/assets/icons/ic_good.png": "6f5576657a38c52a304c9ff26bd283d1",
"assets/assets/icons/ic_grey_arrow.png": "6956611469d7b10085e2cd31f58a9ae2",
"assets/assets/icons/ic_gst.png": "3d185f64c373003c32568dc1ed2393d8",
"assets/assets/icons/ic_half_day_request.png": "182e650cd3cfaf8af2d26999e7262c8f",
"assets/assets/icons/ic_hamburger.png": "89f33c1d16a149d020901158199efe0c",
"assets/assets/icons/ic_hide@3x.png": "b3924b37de41f6e1f8216a56db4f2b3a",
"assets/assets/icons/ic_history.png": "002697ebc2b2e115d3fa3ebba95aa287",
"assets/assets/icons/ic_hold_orders.png": "0054d07e8b03e852de5b82eff01d87ab",
"assets/assets/icons/ic_id.png": "ef616c1131d0b3d16ecdf01b7e258ca2",
"assets/assets/icons/ic_ifsc.png": "d78d2bcd6aed77f49f98535f25f32660",
"assets/assets/icons/ic_in_stock.png": "0dcb25fb36bdaa999f19947146c6cac6",
"assets/assets/icons/ic_inactive.png": "b6d4a7d004d67c99e5837dc6f81fc58c",
"assets/assets/icons/ic_info.png": "7bf4f3bf5081ef453055ce290f02b2c9",
"assets/assets/icons/ic_info_quantity.png": "85cd093f2a333cfb1164395239212ddc",
"assets/assets/icons/ic_inprocess.png": "98a20e18418bed050f23e46ecf945110",
"assets/assets/icons/ic_inproduction.png": "e96ceee03aa20e7ac47958dbb9e1714c",
"assets/assets/icons/ic_invoice.png": "3f780a3a57d00d3dfad319c71295a641",
"assets/assets/icons/ic_invoice_scan@3x.png": "77a4e907803b69ebc8a3b7934541a4fa",
"assets/assets/icons/ic_invoice_scanned@3x.png": "8575b5cd1a2ee51854f7e4fa49598cb3",
"assets/assets/icons/ic_item.png": "7988e1b5d3e10f173584c1011ebeac7b",
"assets/assets/icons/ic_item_wise_dispatch.png": "264f6c9f04a9b7915a5e0adf4950d947",
"assets/assets/icons/ic_KS_updated_logo@2x.png": "8f217077817e98523b194b0b6b21cd6d",
"assets/assets/icons/ic_leave.png": "b24e6f69475e5b2ded1f198eab68e54c",
"assets/assets/icons/ic_leave_application.png": "9e6f4482126b3b4c24ee2acbb5b801f1",
"assets/assets/icons/ic_leave_application_.png": "6bfc785fb7b11997bf399e7f31a4175a",
"assets/assets/icons/ic_leave_apply.png": "a1dc873a958f208417d99a016bcb993c",
"assets/assets/icons/ic_leavingtime.png": "03dfb6065507dcd9affc65642f7e8bc8",
"assets/assets/icons/ic_ledger_circle.png": "4df34841e3681973a8f530874e8dccfb",
"assets/assets/icons/ic_left_active.png": "97188bfbe748fe1ac7341aff85493bac",
"assets/assets/icons/ic_list_view.png": "b9fc9b1fa43cd134af1358f408f2392a",
"assets/assets/icons/ic_location.png": "4a85f6795d099b458fb47d733bc1c05b",
"assets/assets/icons/ic_low_stock.png": "0c4996206d11998cba684c475f555365",
"assets/assets/icons/ic_loyalty.png": "0ffdbd3232900dbc9bf2e5f2c12ff7f5",
"assets/assets/icons/ic_loyalty_points.png": "b52323ff9e5d0ecc1b80f2ff0dc06a5a",
"assets/assets/icons/ic_lunch_break.png": "7f89c19dd76f717fccbba32ff87bb3c1",
"assets/assets/icons/ic_make_payment.png": "3ce8435dbf6456743987df43b728c93b",
"assets/assets/icons/ic_manual_attendance.png": "dbdd68ff6c6bc65400a4add734beadcf",
"assets/assets/icons/ic_menu.png": "4cdaab70fe7ed1ad5bdfbacbd5ced3a7",
"assets/assets/icons/ic_minus.png": "1a5cc2fdf95d8dd94e3ca28d8790fd3b",
"assets/assets/icons/ic_minus_25px.png": "2a7ac38c1cf2d29e34693d952be3d0da",
"assets/assets/icons/ic_mithai%2520box.png": "aaa670772dc1661efeec609f46b4beff",
"assets/assets/icons/ic_model_name@3x.png": "40fdd5ba9f652fb19f8813a009e55f9a",
"assets/assets/icons/ic_month.png": "64e851bb8c56e39fbeb7ed3016a6ad7b",
"assets/assets/icons/ic_multi_payment.png": "a66435cef72b0b42bedd5742b6325892",
"assets/assets/icons/ic_multi_payment_selected.png": "a1fd1e539ad879f6e4bd5c88c2163ee9",
"assets/assets/icons/ic_my_salary@3x.png": "82b517f167af8d77f6b4ab7b800d5128",
"assets/assets/icons/ic_my_tasks.png": "f916e81f90a65171415e833e7b145c76",
"assets/assets/icons/ic_near_expiry.png": "83d3fa727f59d97c1a6b0fcf2e337597",
"assets/assets/icons/ic_new_sales.png": "349a9e3935542dec3f1e7cb2ec7ab401",
"assets/assets/icons/ic_no_employee_history.png": "c8b661469ceb395987dc7d5f6f225fc8",
"assets/assets/icons/ic_notes.png": "c557d120bc7cd0c33fa3c886d317412b",
"assets/assets/icons/ic_notification.png": "b0cb1ba314140ad72a4e819c9fff5a92",
"assets/assets/icons/ic_number.png": "c2db61e03862ad9422b12dbd536e7be9",
"assets/assets/icons/ic_number_plate.png": "677422dba2435489a8f7c2a37495ce5a",
"assets/assets/icons/ic_off_duty.png": "9e6f4482126b3b4c24ee2acbb5b801f1",
"assets/assets/icons/ic_on_duty.png": "d321d74f30ecce1aac08b679d8873f7d",
"assets/assets/icons/ic_open_order.png": "8ef64cc46081bbdb512ac7b73cf554c3",
"assets/assets/icons/ic_openingbalance.png": "582de8c3f5785381958bfe59f59112ec",
"assets/assets/icons/ic_order_accepeted.png": "c11cf164e54d78ba6c32808af5388d8b",
"assets/assets/icons/ic_order_aligned.png": "57ff07e5c570624581c09c0901476e34",
"assets/assets/icons/ic_order_cancel.png": "5873bfd72985a783dde6cf0b76936439",
"assets/assets/icons/ic_order_delivered.png": "1be3cab9d487a0c63b52db04c6406a1f",
"assets/assets/icons/ic_order_dispatch.png": "c64cd62bb99d39a18b8b52b9693ede89",
"assets/assets/icons/ic_order_id.png": "7a864225134df4131bf52134e950878f",
"assets/assets/icons/ic_order_placed.png": "57741ba96db4c6e7f573cadec7eda364",
"assets/assets/icons/ic_orders.png": "c188a0cf627afa15aea7fdafb0b57838",
"assets/assets/icons/ic_out_of_stock.png": "afabb4bb74224b03245439b86925d75a",
"assets/assets/icons/ic_outlets.png": "bfc5849a2d905736e280b5ea8ab0dde9",
"assets/assets/icons/ic_outstanding_payment.png": "41896be9abec309aa121a503a784eebd",
"assets/assets/icons/ic_owner.png": "52f369278a9414d30aead41187a9a2f4",
"assets/assets/icons/ic_owner_calendar.png": "4e1004b0106373bc157964e00a570911",
"assets/assets/icons/ic_partial_payment.png": "8755580810093bf044da2c1864cce165",
"assets/assets/icons/ic_partial_payment_selected.png": "c4ed75dce74df345e04acb182960673b",
"assets/assets/icons/ic_password@3x.png": "1383e16894fba60bbdaec65ed6e587ec",
"assets/assets/icons/ic_pause.png": "d23c0fcdfaa0768c6929dd0d97628bf7",
"assets/assets/icons/ic_pending_payments.png": "b941ea61b95226c655c630c4e755a15a",
"assets/assets/icons/ic_personal_selected.png": "4dd4b6ce3cd8c2b657c9f31430f7bc8b",
"assets/assets/icons/ic_pin.png": "e3bcd88fb3e98cb31406ad448427cf8e",
"assets/assets/icons/ic_play.png": "50d0965aa56902658d454c228215e015",
"assets/assets/icons/ic_print.png": "50eec75ec2dd6dcfb12540750929e028",
"assets/assets/icons/ic_print_circle.png": "f1cabd5605406ab8a347fb1bc20cdec2",
"assets/assets/icons/ic_priority_24.png": "bf2721bb04618727b33238de8d551950",
"assets/assets/icons/ic_privileged_customer.png": "462e712fcc9244c2e057d1ba16563295",
"assets/assets/icons/ic_process_order.png": "49df22c733b7967db7084c3ea557f64e",
"assets/assets/icons/ic_process_order_blue.png": "4c96366c61867022d8897c4d7670a4fb",
"assets/assets/icons/ic_product_type.png": "e02421f7956bcbc609bf77a2e6cb3d31",
"assets/assets/icons/ic_production%2520planning.png": "44cc166f66c0420d1453e26bbfb60d85",
"assets/assets/icons/ic_production.png": "5475abd8ea46e652ba377572d754c02d",
"assets/assets/icons/ic_products.png": "f70a232527d4dfe0a154b63632643eb0",
"assets/assets/icons/ic_put_on_hold%2520.png": "3e596ffac387a61b5eb4e81bbf2e0b77",
"assets/assets/icons/ic_put_on_hold.png": "3e596ffac387a61b5eb4e81bbf2e0b77",
"assets/assets/icons/ic_qr.png": "58718034fb8862e387f1c4e18839ca36",
"assets/assets/icons/ic_quantity.png": "b9d8b5e1f3d7c20236719022e6ad811a",
"assets/assets/icons/ic_quick_scan.png": "4e5def06756acb90d92f6e254ede8dda",
"assets/assets/icons/ic_quotation.png": "177ed7c62900470bef0deb366c415df5",
"assets/assets/icons/ic_radiobutton.png": "26689a0040912aa7c7c14756b14df2f8",
"assets/assets/icons/ic_radiobutton_filled.png": "2137f46e9e7ad60c350baf80b6079c1c",
"assets/assets/icons/ic_reason.png": "2fdac8275d950a144a7828e414a22d3a",
"assets/assets/icons/ic_recipe.png": "55f62ef8790b35c03e36ec92eb0c931e",
"assets/assets/icons/ic_record.png": "f1f01af97d8534e629e2cba459280b8e",
"assets/assets/icons/ic_record_invoice.png": "752e2dbc5fa5f13aa141a9e05c88016b",
"assets/assets/icons/ic_regular_customer.png": "eecea9dafa054fcf9306951b238a1a07",
"assets/assets/icons/ic_reminder_24.png": "73f56d813ad42094baf759ea5284ff9d",
"assets/assets/icons/ic_remove.png": "04d591a1b7e0e0d81b116795f9a6ac10",
"assets/assets/icons/ic_repeat_24.png": "5fa65ac63609bc860881e311134adede",
"assets/assets/icons/ic_repeat_order.png": "2832f79b2788a5621e86995c4d81ca5a",
"assets/assets/icons/ic_report.png": "b7869da645c04a92f33279453b5f15f3",
"assets/assets/icons/ic_result.png": "6ce63083b0dc686de15c8ef3e4c6f4f7",
"assets/assets/icons/ic_right_active.png": "d75cf4cce3cb930119e8a695af699a11",
"assets/assets/icons/ic_rightarrow.png": "89273c8c5c600062be60a822d5ff6cdd",
"assets/assets/icons/ic_rupee.png": "1b6b53872bcdab5ea8247a097a5979a3",
"assets/assets/icons/ic_sad.png": "00a14e081ba1e07802f1bae7cd9c0a39",
"assets/assets/icons/ic_sales.png": "90e174074c7b64d950588236d4712423",
"assets/assets/icons/ic_satisfy.png": "3408501b9d0d5e862817cbe7f72cea01",
"assets/assets/icons/ic_scan_qr.png": "f132415a3be4312791b9c2edd9826623",
"assets/assets/icons/ic_search_grey.png": "4499407f241b0a1f8da75ef1830d16b5",
"assets/assets/icons/ic_share.png": "1533a02d7849f1c95f44b9d513e09930",
"assets/assets/icons/ic_show.png": "71d08ae9c00e64915783bee360958223",
"assets/assets/icons/ic_show@3x.png": "71d08ae9c00e64915783bee360958223",
"assets/assets/icons/ic_showroom%2520order.png": "18939f648577f2cd3bab5a6483cf42f2",
"assets/assets/icons/ic_showroom.png": "6fa124590a40e7ea8ba210da57b3222e",
"assets/assets/icons/ic_showroom_wise_dispatch.png": "52d3a952ab4ec705de7a52b256b9aa4f",
"assets/assets/icons/ic_snacks.png": "9771d94db223fe4fe4df6c686ec1c692",
"assets/assets/icons/ic_special_customer.png": "86498cb35f79d08bda944c8ae14136e1",
"assets/assets/icons/ic_star.png": "7a3822721ce8fa89b0ebb975d0a0503c",
"assets/assets/icons/ic_status.svg": "e3a9a0165189cc89f784d38da472fd80",
"assets/assets/icons/ic_stock.png": "d50f2d93179f68a91e87f4c5165ffbf9",
"assets/assets/icons/ic_stock_gate.png": "85c4488bd3324926695e1a50a3f168a0",
"assets/assets/icons/ic_stock_issue.png": "31e995df91df5f7963bb4d55e019a0e9",
"assets/assets/icons/ic_stock_receive@3x.png": "5d8356851680053ffb7e74092a303622",
"assets/assets/icons/ic_stock_return.png": "d2d8cd76578259ac65dace0af360e359",
"assets/assets/icons/ic_stock_search.png": "da5b1630ee20c7e433470afab3aef2c1",
"assets/assets/icons/ic_stock_warehouse.png": "3e1593b329a4f496f179afffcc3764ba",
"assets/assets/icons/ic_success.png": "04dd697f3ff9bd286c40be2be10fdc4c",
"assets/assets/icons/ic_sync_sales.png": "729df258b080cc4cdcc86e60704e5481",
"assets/assets/icons/ic_task.png": "4105c82c2e99e23c451c81c92835cf43",
"assets/assets/icons/ic_tea_break.png": "7ffe42be1d90115ba070933372f85738",
"assets/assets/icons/ic_tick_white.png": "6802256207e0d347d6f83470bcecae0e",
"assets/assets/icons/ic_time.png": "cf7a9a07cf15e8b01a17b56036ac02f3",
"assets/assets/icons/ic_time_24.png": "0f5b9295e22f508ba64d3d7ef411c6eb",
"assets/assets/icons/ic_topnav_logo@3x.png": "31acd47f4e298fc0b0094325532fd7c6",
"assets/assets/icons/ic_tray.png": "dcd64c804fa23ed9fe52c7b63628a476",
"assets/assets/icons/ic_type.png": "be0d5e7fd7616a41bcfb1c16427b58c4",
"assets/assets/icons/ic_unit.png": "480bd83064046dfd7454ff122e3b02b8",
"assets/assets/icons/ic_up.png": "3a9cf9125a63a1c89edde53ba50fc53a",
"assets/assets/icons/ic_updatedby.png": "2ebe5b379a5d0d7f6434681027e6741b",
"assets/assets/icons/ic_upi.png": "cc88edc82fe166f9a977b1a51402c8a3",
"assets/assets/icons/ic_upi_selected.png": "c4a0fd32cdb9ef114536f6d72bd52066",
"assets/assets/icons/ic_upward_green.png": "53fdd1e72065ba58c6c88f30b00e1a3a",
"assets/assets/icons/ic_user_image_upload.png": "2c7ff33915e0ded0cf3c604ca7925670",
"assets/assets/icons/ic_vendor.png": "ebf33b6a3e97b5aee34aeb99b332bc19",
"assets/assets/icons/ic_vendor_code.png": "9726499eae1e4e09aa2c8035de66af85",
"assets/assets/icons/ic_vendor_order.png": "4fb2eaf86f59c37c65731d01a2018854",
"assets/assets/icons/ic_vendor_return.png": "b3717d530562165fbc92dff8ffc9091b",
"assets/assets/icons/ic_vendors.png": "a54c210ae88d399ba40296d8b7e8ad07",
"assets/assets/icons/ic_veryGood.png": "3d5d04642f5d518edd6fcea068112604",
"assets/assets/icons/ic_view_invoice.png": "3f15d2a26e7584ac83cfce1821916a23",
"assets/assets/icons/ic_view_sub_category.png": "6bf07c585d176e5b79202c5bd29a4c2a",
"assets/assets/icons/ic_violations.png": "c7cf0c6c2622b3e816aaf08ae9f8632b",
"assets/assets/icons/ic_warning_count.png": "28eeb6b2c2494aafdf77dbba67c188de",
"assets/assets/icons/ic_wastage.png": "c94be6e4920989d9f776e6ae521cf2fb",
"assets/assets/icons/ic_week.png": "54cc2846f513a99c443bd31b844436c0",
"assets/assets/icons/ic_whatsapp.png": "ddc3d4ea5740bda210a1de2966aeec9b",
"assets/assets/icons/no_stock.png": "e7bac2dc93dffdd662cc63a19232b3a2",
"assets/assets/icons/payment%2520done.png": "adbb16bdbac99aa0ece8197b68cfd35a",
"assets/assets/icons/payment%2520failed.png": "39c9535d90a64760a1b6e954c6827aee",
"assets/assets/icons/payment%2520pending.png": "c0ae606cea8271c3275105f9403ebc81",
"assets/assets/icons/start_scanning@3x.png": "80d661578cf0825510f2d7d9a2b7d4ed",
"assets/assets/images/dummy%2520product.png": "c50136a03ee8bc7afa8430e2f3cb25bb",
"assets/assets/images/dummy_bag_image.png": "26fe894090c6b86b8df74b996acafecb",
"assets/assets/images/dummy_product2.png": "5851f8ffd479583dce6835ba7686b113",
"assets/assets/images/ic_dummy_qr.png": "236cbb6ce1119e8e2216931493162014",
"assets/assets/images/ic_placeholder_product.jpg": "9669fb4218aea113ee6b92ebfbe99466",
"assets/assets/images/ic_update.png": "018ce59095fbbcb77f7b113f10a9f820",
"assets/assets/images/icons8-stack-50.png": "ab0958838f70e67ee65e0be09af757d4",
"assets/assets/images/product_%2520image.png": "a3559082a6984c61c91763c2332881e6",
"assets/assets/images/test_acc.png": "8a76bd8c1517ac72c4f2a7029109cf5a",
"assets/assets/images/test_accountant.png": "13216c48244324011d619070d60ab84e",
"assets/assets/lottie/empty_screen.json": "b0fd29c76b01942605deee6104861c39",
"assets/assets/lottie/Loading%2520check%2520status.json": "9dce833f3a7483607a69f4ae88846cb2",
"assets/assets/lottie/recording.json": "0ab20d22aff41068eb972dcb04675a74",
"assets/assets/lottie/recording1.json": "bc7743bb94f4ee7e5c0008d9793eeaab",
"assets/assets/lottie/search%2520printer.json": "98bd5168120e33ffe2ac415904d5448d",
"assets/assets_rider/gif/empty_cart.gif": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/gif/loader_ks.gif": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/icon/ic_address.png": "4f3dac35e4f75fc3845d68d036b05976",
"assets/assets_rider/icon/ic_avatar.png": "547c88f8ea31fa566bcd264cc7ecf95e",
"assets/assets_rider/icon/ic_model_name.png": "40fdd5ba9f652fb19f8813a009e55f9a",
"assets/assets_rider/icon/ic_open%2520order.png": "8ef64cc46081bbdb512ac7b73cf554c3",
"assets/assets_rider/icon/ic_password@3x.png": "1383e16894fba60bbdaec65ed6e587ec",
"assets/assets_rider/icon/ic_rider.png": "9d4c868bdee4300d0419f5a06906746a",
"assets/assets_rider/icon/ic_tray.png": "dcd64c804fa23ed9fe52c7b63628a476",
"assets/assets_rider/icon/ic_unit.png": "480bd83064046dfd7454ff122e3b02b8",
"assets/assets_rider/icon/ic_updated.png": "f16f0bd96bebcd7df25abd044c3909a0",
"assets/assets_rider/images/dummy%2520product.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/images/dummy_product2.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/images/ic_dummy_qr.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/images/ic_placeholder_product.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/images/ic_update.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/images/product_%2520image.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/images/test_acc.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/images/test_accountant.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets_rider/lottie/empty_screen.json": "b0fd29c76b01942605deee6104861c39",
"assets/assets_rider/lottie/recording.json": "0ab20d22aff41068eb972dcb04675a74",
"assets/assets_rider/lottie/recording1.json": "bc7743bb94f4ee7e5c0008d9793eeaab",
"assets/FontManifest.json": "3660f5a7f5c196888cbcea7e61647414",
"assets/fonts/MaterialIcons-Regular.otf": "0dc2469ec40daf430d89e4cd47f42b71",
"assets/NOTICES": "ac5a229625e4c746b49fabeb998276cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e567879b71158cc6e1276ec4f27b99fe",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "7e17a336e64c7aaf2ab0fd4fe1e6cf0f",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b4ab3574b00feb9165fefd08634da145",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "b37654208f2ab2461a0f66424a20335a",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "d466fda2e806ef7abe69ca33ef278c97",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "562701d4383f58872d2d9ff8b77c4116",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d0c53f97992d8f06e8c7f2f69d08b6a2",
"icons/icon-192.png": "b710f1225a890f6eb502221e2767a5bb",
"icons/Icon-512.png": "dbd002b168a196c69083c2770b842205",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02bc9e60c391acf18182bb9309c45fbc",
"/": "02bc9e60c391acf18182bb9309c45fbc",
"main.dart.js": "965812440822ce8f199881a71d712f6c",
"manifest.json": "092c59d5c452d8cce306935f05d9daad",
"version.json": "771bb7bda6f4c6117c9123c55166f8bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
