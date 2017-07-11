"use strict";
const BaseCommandBuilder_1 = require('./BaseCommandBuilder');
class TTSSpeakBuilder extends BaseCommandBuilder_1.BaseCommandBuilder {
    constructor() {
        super('TextToSpeech');
        this.command.setESParam('engine', 'LIST_AVAILABLE');
    }
    setEngine(engine) {
        this.command.setESParam('engine', engine);
        return this;
    }
    setLanguage(language) {
        this.command.setESParam('language', language);
        return this;
    }
    setPitch(pitch) {
        this.command.setEFParam('pitch', pitch);
        return this;
    }
    setRate(rate) {
        this.command.setEFParam('rate', rate);
        return this;
    }
    setTextToSpeak(textToSpeak) {
        this.command.setStdinInput(textToSpeak);
        return this;
    }
    streamAsAlarm() {
        this.command.setESParam('stream', 'ALARM');
        return this;
    }
    streamAsMusic() {
        this.command.setESParam('stream', 'MUSIC');
        return this;
    }
    streamAsNotification() {
        this.command.setESParam('stream', 'NOTIFICATION');
        return this;
    }
    streamAsRing() {
        this.command.setESParam('stream', 'RING');
        return this;
    }
    streamAsSystem() {
        this.command.setESParam('stream', 'SYSTEM');
        return this;
    }
    streamAsVoiceCall() {
        this.command.setESParam('stream', 'VOICE_CALL');
        return this;
    }
}
exports.TTSSpeakBuilder = TTSSpeakBuilder;
