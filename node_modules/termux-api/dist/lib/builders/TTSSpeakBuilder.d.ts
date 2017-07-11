import { BaseCommandBuilder } from './BaseCommandBuilder';
export declare class TTSSpeakBuilder extends BaseCommandBuilder {
    constructor();
    setEngine(engine: string): TTSSpeakBuilder;
    setLanguage(language: string): TTSSpeakBuilder;
    setPitch(pitch: number): TTSSpeakBuilder;
    setRate(rate: number): TTSSpeakBuilder;
    setTextToSpeak(textToSpeak: string): TTSSpeakBuilder;
    streamAsAlarm(): TTSSpeakBuilder;
    streamAsMusic(): TTSSpeakBuilder;
    streamAsNotification(): TTSSpeakBuilder;
    streamAsRing(): TTSSpeakBuilder;
    streamAsSystem(): TTSSpeakBuilder;
    streamAsVoiceCall(): TTSSpeakBuilder;
}
