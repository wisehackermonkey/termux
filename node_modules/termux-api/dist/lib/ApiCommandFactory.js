"use strict";
const BatteryStatusBuilder_1 = require('./builders/BatteryStatusBuilder');
const CameraInfoBuilder_1 = require('./builders/CameraInfoBuilder');
const CameraPhotoBuilder_1 = require('./builders/CameraPhotoBuilder');
const ClipboardGetBuilder_1 = require('./builders/ClipboardGetBuilder');
const ClipboardSetBuilder_1 = require('./builders/ClipboardSetBuilder');
const ContactListBuilder_1 = require('./builders/ContactListBuilder');
const DialogBuilder_1 = require('./builders/DialogBuilder');
const DownloadBuilder_1 = require('./builders/DownloadBuilder');
const LocationBuilder_1 = require('./builders/LocationBuilder');
const NotificationBuilder_1 = require('./builders/NotificationBuilder');
const SmsInboxBuilder_1 = require('./builders/SmsInboxBuilder');
const SmsSendBuilder_1 = require('./builders/SmsSendBuilder');
const TelephonyCellInfoBuilder_1 = require('./builders/TelephonyCellInfoBuilder');
const TelephonyDeviceInfoBuilder_1 = require('./builders/TelephonyDeviceInfoBuilder');
const ToastBuilder_1 = require('./builders/ToastBuilder');
const VibrateBuilder_1 = require('./builders/VibrateBuilder');
const TTSEnginesBuilder_1 = require('./builders/TTSEnginesBuilder');
const TTSSpeakBuilder_1 = require('./builders/TTSSpeakBuilder');
class ApiCommandFactory {
    batteryStatus() {
        return new BatteryStatusBuilder_1.BatteryStatusBuilder();
    }
    cameraInfo() {
        return new CameraInfoBuilder_1.CameraInfoBuilder();
    }
    cameraPhoto() {
        return new CameraPhotoBuilder_1.CameraPhotoBuilder();
    }
    clipboardGet() {
        return new ClipboardGetBuilder_1.ClipboardGetBuilder();
    }
    clipboardSet() {
        return new ClipboardSetBuilder_1.ClipboardSetBuilder();
    }
    contactList() {
        return new ContactListBuilder_1.ContactListBuilder();
    }
    dialog() {
        return new DialogBuilder_1.DialogBuilder();
    }
    download(url) {
        return new DownloadBuilder_1.DownloadBuilder().setUrl(url);
    }
    location() {
        return new LocationBuilder_1.LocationBuilder();
    }
    notification() {
        return new NotificationBuilder_1.NotificationBuilder();
    }
    smsInbox() {
        return new SmsInboxBuilder_1.SmsInboxBuilder();
    }
    smsSend() {
        return new SmsSendBuilder_1.SmsSendBuilder();
    }
    telephonyCellInfo() {
        return new TelephonyCellInfoBuilder_1.TelephonyCellInfoBuilder();
    }
    telephonyDeviceInfo() {
        return new TelephonyDeviceInfoBuilder_1.TelephonyDeviceInfoBuilder();
    }
    toast() {
        return new ToastBuilder_1.ToastBuilder();
    }
    vibrate() {
        return new VibrateBuilder_1.VibrateBuilder();
    }
    ttsEngines() {
        return new TTSEnginesBuilder_1.TTSEnginesBuilder();
    }
    ttsSpeak() {
        return new TTSSpeakBuilder_1.TTSSpeakBuilder();
    }
}
exports.ApiCommandFactory = ApiCommandFactory;
