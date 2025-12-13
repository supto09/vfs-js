// ["submitLogin"]() {
//     var _0x2a600c = this;
//     0;
//     return _0x5ce8ef.A(function* () {
//         try {
//             _0x2a600c.loginSubmit = true;
//             if (_0x2a600c.loginForm.invalid) {
//                 return;
//             }
//             let _0x4cd052 = _0x2a600c.loginForm.value;
//             _0x4cd052.password = _0x2a600c.encription(_0x2a600c.loginForm.value?.["password"]);
//             const _0x2119c0 = "CC;" + _0x2a600c.utilityService.momentInstance().format("YYYY-MM-DDTHH:mm:ss") + 'Z';
//             const _0x1ad66d = _0x2a600c.encription(_0x2119c0);
//             let _0x31a4b7;
//             _0x31a4b7 = yield _0x2a600c.httpService.doPostLogin(_0x398e42.YM.api.login, _0x4cd052, _0x1ad66d).toPromise();
//             if (_0x31a4b7?.["error"]) {
//                 _0x2a600c.errorType = _0x31a4b7?.["error"]?.["type"];
//             }
//             if (_0x31a4b7.taResetPWDToken && _0x31a4b7.isNewUser && 4231 === _0x31a4b7?.['error']?.["code"]) {
//                 _0x2a600c.sessionService.setSignupLinkDisabled(true);
//                 _0x2a600c.sessionService.loginResponse = 'CC';
//                 _0x2a600c.router.navigate([_0x2a600c.sessionService.ccCountryCode, _0x2a600c.sessionService.appLanguageCode, _0x2a600c.sessionService.ccMissionCode, _0x398e42.V2.RESETPASSWORD], {
//                     'queryParams': {
//                         'q': _0x31a4b7.taResetPWDToken
//                     }
//                 });
//             } else if (_0x31a4b7.accessToken || null == _0x31a4b7?.['error']) {
//                 if (!_0x31a4b7?.["error"]) {
//                     _0x2a600c.userDetails = _0x31a4b7;
//                     _0x2a600c.loginResponse = _0x31a4b7.roleName;
//                     _0x2a600c.sessionService.loginResponse = _0x2a600c.loginResponse;
//                     _0x2a600c.sessionService.isEmbassyUser = 'CC' == _0x2a600c.loginResponse && _0x31a4b7.isEmbassyUser;
//                     _0x2a600c.sessionService.updateLoggedEmail(_0x2a600c.loginForm.contains('username') ? _0x2a600c.loginForm.value?.['username'] : _0x31a4b7?.["loginUser"]);
//                     _0x2a600c.sessionService.pwdExpiryData = {
//                         'PasswordExpirydays': _0x2a600c.userDetails.PasswordExpirydays,
//                         'isPasswordExpiryMessage': _0x2a600c.userDetails.isPasswordExpiryMessage
//                     };
//                     _0x2a600c.sessionService.ccUserDetails = JSON.stringify(_0x31a4b7);
//                     yield _0x2a600c.commonService.postLoginActivityForCCUser(_0x31a4b7);
//                     _0x2a600c.commonService.routeToSelectCountry();
//                 }
//             } else {
//                 _0x2a600c.utilityService.formcontrolReset(_0x2a600c.loginForm, _0x470529);
//                 _0x2a600c.utilityService.resetCaptcha();
//                 _0x2a600c.actiateMailMessage = 421 === _0x31a4b7?.['error']?.["code"] ? _0x2a600c.commonService.translateValue("commonSections.messages.statusMessages." + _0x31a4b7?.['error']?.["code"]).replace(" X ", " " + _0x31a4b7?.["maximumlimit"] + " ") : 414 === _0x31a4b7?.["error"]?.["code"] ? _0x2a600c.commonService.translateValue("Sprint25.RSB-32815.messages.statusMessages." + _0x31a4b7?.['error']?.["code"]) : _0x2a600c.commonService.translateValue('commonSections.messages.statusMessages.' + _0x31a4b7?.["error"]?.['code']) || _0x31a4b7?.["error"]?.["description"] || _0x31a4b7?.['message'];
//                 if (_0x31a4b7?.["error"] && _0x31a4b7?.["remainingCount"] > 0) {
//                     _0x2a600c.remainingCount = _0x31a4b7?.["remainingCount"];
//                     _0x2a600c.isRemainingCount = true;
//                 }
//                 setTimeout(() => {
//                     _0x2a600c.actiateMailMessage = '';
//                     _0x2a600c.isRemainingCount = false;
//                 }, 10000);
//             }
//         } catch {
//             if (!_0x2a600c.allowedCaptcha) {
//                 return;
//             }
//             if (_0x367ace.c.captchaFallbackEnabled) {
//                 _0x2a600c.currentCaptcha = _0x2a600c.captchaVersionConst.alternate;
//                 _0x2a600c.utilityService.formcontrolReset(_0x2a600c.loginForm, _0x470529);
//                 _0x2a600c.utilityService.resetCaptcha();
//             } else {
//                 const _0x5387c1 = yield _0x2a600c.captchaContainer.generateToken();
//                 _0x2a600c.utilityService.patchCaptchaValue(_0x2a600c.loginForm, _0x5387c1, _0x2a600c.captchaVersionConst["default"]);
//             }
//         }
//     })();
// }