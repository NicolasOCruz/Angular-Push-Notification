"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(swPush, newsletterService) {
        this.swPush = swPush;
        this.newsletterService = newsletterService;
        this.title = 'push';
        this.VAPID_PUBLIC_KEY = "BM7H8NmJyXhvC2Mb8G0kCCpIleYfPFgIeCNc7KIZFZ3qqSQmyOvDI7FxFH_5XBtk4pQQShLXJELQtnx8_F6m7vk";
    }
    AppComponent.prototype.subscribeToNotifications = function () {
        var _this = this;
        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
            .then(function (sub) {
            _this.newsletterService.addPushSubscriber(sub).subscribe();
        })["catch"](function (err) { return console.error("Could not subscribe to notifications", err); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n      <button class=\"button button-primary\" (click)=\"subscribeToNotifications()\">\n        Subscribe\n      </button>\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
