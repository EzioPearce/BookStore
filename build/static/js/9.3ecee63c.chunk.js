(this["webpackJsonpbook-store-v2"]=this["webpackJsonpbook-store-v2"]||[]).push([[9],{282:function(e,n,t){"use strict";t.r(n),t.d(n,"amplify_greetings",(function(){return o}));var r=t(80),a=(t(318),t(319),t(317),t(320)),o=function(){function e(e){Object(r.g)(this,e),this.username=null,this.logo=null,this.handleAuthStateChange=a.d}return e.prototype.render=function(){return Object(r.f)("header",{class:"greetings"},this.logo&&Object(r.f)("span",null,this.logo),Object(r.f)("amplify-nav",null,this.username&&Object(r.f)("slot",{name:"greetings-message"},Object(r.f)("span",null,"Hello, ",this.username)),Object(r.f)("amplify-sign-out",{handleAuthStateChange:this.handleAuthStateChange})))},e}();o.style=":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{position:relative;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:10px;font-family:var(--font-family)}amplify-sign-out{margin-left:1rem}"},317:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return A})),t.d(n,"e",(function(){return L})),t.d(n,"f",(function(){return _})),t.d(n,"g",(function(){return f})),t.d(n,"h",(function(){return C})),t.d(n,"i",(function(){return T})),t.d(n,"j",(function(){return h})),t.d(n,"k",(function(){return l})),t.d(n,"l",(function(){return d})),t.d(n,"m",(function(){return g})),t.d(n,"n",(function(){return E})),t.d(n,"o",(function(){return i})),t.d(n,"p",(function(){return S})),t.d(n,"q",(function(){return s})),t.d(n,"r",(function(){return o})),t.d(n,"s",(function(){return u})),t.d(n,"t",(function(){return r}));var r="username",a="email",o="code",i="phone",u="password",E="country-dial-code-select",c="+1",s="amplify-auth-source",_="amplify-redirected-from-hosted-ui",l="amplify-authenticator-authState",L="Phone number can not be empty",A="No Auth module found, please ensure @aws-amplify/auth is imported",f="SETUP_TOTP",d="User has not set up software token mfa",g="User has not verified software token mfa",S="SUCCESS",O="auth",T="UI Auth",C="ToastAuthError",h="AuthStateChange"},318:function(e,n,t){"use strict";var r,a,o,i,u;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return u})),t.d(n,"e",(function(){return i})),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(r||(r={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(a||(a={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(o||(o={})),function(e){e.Password="password"}(i||(i={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(u||(u={}))},319:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name"}(r||(r={}))},320:function(e,n,t){"use strict";t.d(n,"a",(function(){return A})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return g})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return L})),t.d(n,"f",(function(){return O})),t.d(n,"g",(function(){return S})),t.d(n,"h",(function(){return T}));var r=t(19),a=t(84),o=t(91),i=t(318),u=t(319),E=t(317),c=t(42),s=function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{E(r.next(e))}catch(n){o(n)}}function u(e){try{E(r.throw(e))}catch(n){o(n)}}function E(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}E((r=r.apply(e,n||[])).next())}))},_=function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(u){o=[6,u],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},l=new r.a("helpers"),L=function(e){return!!e.shadowRoot&&!!e.attachShadow},A=function(e){a.a.dispatch(E.i,{event:E.h,message:e.message})},f=function(e,n){a.a.dispatch(E.i,{event:E.j,message:e,data:n})},d=function(e){if(!e.phoneNumberValue)throw new Error(E.e);var n=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+n},g=function(e){if(!(e in i.d))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(i.d))},S=function(e){var n=function(n){return s(void 0,void 0,void 0,(function(){var t,r;return _(this,(function(a){switch(a.label){case 0:switch(t=n.payload,t.event){case E.j:return[3,1]}return[3,8];case 1:if(!t.message)return[3,7];if(t.message!==i.a.SignedIn)return[3,6];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,c.a.currentAuthenticatedUser()];case 3:return r=a.sent(),e(t.message,r),[3,5];case 4:return a.sent(),l.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(t.message,t.data),a.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return a.a.listen(E.i,n),function(){return a.a.remove(E.i,n)}},O=function(e){return!(null===e.hint||"string"===typeof e.hint)},T={address:{label:o.a.get(u.a.ADDRESS_LABEL),placeholder:o.a.get(u.a.ADDRESS_PLACEHOLDER)},nickname:{label:o.a.get(u.a.NICKNAME_LABEL),placeholder:o.a.get(u.a.NICKNAME_PLACEHOLDER)},birthdate:{label:o.a.get(u.a.BIRTHDATE_LABEL),placeholder:o.a.get(u.a.BIRTHDATE_PLACEHOLDER)},phone_number:{label:o.a.get(u.a.PHONE_LABEL),placeholder:o.a.get(u.a.PHONE_PLACEHOLDER)},email:{lable:o.a.get(u.a.EMAIL_LABEL),placeholder:o.a.get(u.a.EMAIL_PLACEHOLDER)},picture:{label:o.a.get(u.a.PICTURE_LABEL),placeholder:o.a.get(u.a.PICTURE_PLACEHOLDER)},family_name:{label:o.a.get(u.a.FAMILY_NAME_LABEL),placeholder:o.a.get(u.a.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:o.a.get(u.a.PREFERRED_USERNAME_LABEL),placeholder:o.a.get(u.a.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:o.a.get(u.a.GENDER_LABEL),placeholder:o.a.get(u.a.GENDER_PLACEHOLDER)},profile:{label:o.a.get(u.a.PROFILE_LABEL),placeholder:o.a.get(u.a.PROFILE_PLACEHOLDER)},given_name:{label:o.a.get(u.a.GIVEN_NAME_LABEL),placeholder:o.a.get(u.a.GIVEN_NAME_LABEL)},zoneinfo:{label:o.a.get(u.a.ZONEINFO_LABEL),placeholder:o.a.get(u.a.ZONEINFO_PLACEHOLDER)},locale:{label:o.a.get(u.a.LOCALE_LABEL),placeholder:o.a.get(u.a.LOCALE_PLACEHOLDER)},updated_at:{label:o.a.get(u.a.UPDATED_AT_LABEL),placeholder:o.a.get(u.a.UPDATED_AT_PLACEHOLDER)},middle_name:{label:o.a.get(u.a.MIDDLE_NAME_LABEL),placeholder:o.a.get(u.a.MIDDLE_NAME_PLACEHOLDER)},website:{label:o.a.get(u.a.WEBSITE_LABEL),placeholder:o.a.get(u.a.WEBSITE_PLACEHOLDER)},name:{label:o.a.get(u.a.NAME_LABEL),placeholder:o.a.get(u.a.NAME_PLACEHOLDER)}}},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(19),a=new r.a("I18n"),o=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),a.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,n){if(void 0===n&&(n=void 0),!this._lang)return"undefined"!==typeof n?n:e;var t=this._lang,r=this.getByLanguage(e,t);return r||(t.indexOf("-")>0&&(r=this.getByLanguage(e,t.split("-")[0])),r||("undefined"!==typeof n?n:e))},e.prototype.getByLanguage=function(e,n,t){if(void 0===t&&(t=null),!n)return t;var r=this._dict[n];return r?r[e]:t},e.prototype.putVocabulariesForLanguage=function(e,n){var t=this._dict[e];t||(t=this._dict[e]={}),Object.assign(t,n)},e.prototype.putVocabularies=function(e){var n=this;Object.keys(e).map((function(t){n.putVocabulariesForLanguage(t,e[t])}))},e}(),i=t(12),u=new r.a("I18n"),E=null,c=null,s=function(){function e(){}return e.configure=function(n){return u.debug("configure I18n"),n?(E=Object.assign({},E,n.I18n||n),e.createInstance(),E):E},e.getModuleName=function(){return"I18n"},e.createInstance=function(){u.debug("create I18n instance"),c||(c=new o(E))},e.setLanguage=function(n){return e.checkConfig(),c.setLanguage(n)},e.get=function(n,t){return e.checkConfig()?c.get(n,t):"undefined"===typeof t?n:t},e.putVocabulariesForLanguage=function(n,t){return e.checkConfig(),c.putVocabulariesForLanguage(n,t)},e.putVocabularies=function(n){return e.checkConfig(),c.putVocabularies(n)},e.checkConfig=function(){return c||(c=new o(E)),!0},e}();i.a.register(s)}}]);
//# sourceMappingURL=9.3ecee63c.chunk.js.map