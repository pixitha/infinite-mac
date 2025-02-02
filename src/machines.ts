import mac128KRomPath from "./Data/Mac-128K.rom";
import macPlusRomPath from "./Data/Mac-Plus.rom";
import macSERomPath from "./Data/Mac-SE.rom";
import macIIRomPath from "./Data/Mac-II.rom";
import macIIfxRomPath from "./Data/Mac-IIfx.rom";
import quadra650RomPath from "./Data/Quadra-650.rom";
import newWorldRomPath from "./Data/New-World.rom";
import powerMacintosh9500RomPath from "./Data/Power-Macintosh-9500.rom";
import basiliskPrefsPath from "./Data/BasiliskIIPrefs.txt";
import sheepShaverPrefsPath from "./Data/SheepShaverPrefs.txt";
import minivMacPrefsPath from "./Data/MinivMacPrefs.txt";
import type {
    EmulatorCpu,
    EmulatorSubtype,
    EmulatorType,
} from "./emulator/emulator-common";

export type MachineDef = {
    name: string;
    cpu: EmulatorCpu;
    romPath: string;
    gestaltID: number;
    emulator: EmulatorType;
    emulatorSubtype?: EmulatorSubtype;
    prefsPath: string;
    fixedScreenSize?: {width: number; height: number};
    bezelStyle: "Beige" | "Platinum" | "Pinstripes";
};

export const MAC_128K: MachineDef = {
    name: "Mac 128K",
    cpu: "68000",
    romPath: mac128KRomPath,
    gestaltID: 1,
    emulator: "Mini vMac",
    emulatorSubtype: "128K",
    prefsPath: minivMacPrefsPath,
    fixedScreenSize: {width: 512, height: 342},
    bezelStyle: "Beige",
};

export const MAC_512KE: MachineDef = {
    name: "Mac 512Ke",
    cpu: "68000",
    romPath: macPlusRomPath,
    gestaltID: 3,
    emulator: "Mini vMac",
    emulatorSubtype: "512Ke",
    prefsPath: minivMacPrefsPath,
    fixedScreenSize: {width: 512, height: 342},
    bezelStyle: "Beige",
};

export const MAC_PLUS: MachineDef = {
    name: "Mac Plus",
    cpu: "68000",
    romPath: macPlusRomPath,
    gestaltID: 4,
    emulator: "Mini vMac",
    emulatorSubtype: "Plus",
    prefsPath: minivMacPrefsPath,
    fixedScreenSize: {width: 512, height: 342},
    bezelStyle: "Beige",
};

export const MAC_SE: MachineDef = {
    name: "Mac SE",
    cpu: "68000",
    romPath: macSERomPath,
    gestaltID: 5,
    emulator: "Mini vMac",
    emulatorSubtype: "SE",
    prefsPath: minivMacPrefsPath,
    fixedScreenSize: {width: 512, height: 342},
    bezelStyle: "Platinum",
};

export const MAC_II: MachineDef = {
    name: "Mac II",
    cpu: "68020",
    romPath: macIIRomPath,
    gestaltID: 6,
    emulator: "Mini vMac",
    emulatorSubtype: "II",
    prefsPath: minivMacPrefsPath,
    fixedScreenSize: {width: 640, height: 480},
    bezelStyle: "Platinum",
};

export const MAC_IIFX: MachineDef = {
    name: "Mac IIfx",
    cpu: "68030",
    romPath: macIIfxRomPath,
    gestaltID: 13,
    emulator: "BasiliskII",
    prefsPath: basiliskPrefsPath,
    bezelStyle: "Platinum",
};

export const QUADRA_650: MachineDef = {
    name: "Quadra 650",
    cpu: "68040",
    romPath: quadra650RomPath,
    gestaltID: 36,
    emulator: "BasiliskII",
    prefsPath: basiliskPrefsPath,
    bezelStyle: "Platinum",
};

export const POWER_MACINTOSH_9500: MachineDef = {
    name: "Power Macintosh 9500",
    cpu: "604",
    romPath: powerMacintosh9500RomPath,
    gestaltID: 67,
    emulator: "SheepShaver",
    prefsPath: sheepShaverPrefsPath,
    bezelStyle: "Platinum",
};

export const POWER_MACINTOSH_G3: MachineDef = {
    name: "Power Macintosh G3",
    cpu: "G3",
    romPath: newWorldRomPath,
    gestaltID: 406,
    emulator: "SheepShaver",
    prefsPath: sheepShaverPrefsPath,
    bezelStyle: "Pinstripes",
};

export const ALL_MACHINES = [
    MAC_128K,
    MAC_512KE,
    MAC_PLUS,
    MAC_SE,
    MAC_II,
    MAC_IIFX,
    QUADRA_650,
    POWER_MACINTOSH_9500,
    POWER_MACINTOSH_G3,
];

export const MACHINES_BY_NAME = Object.fromEntries(
    ALL_MACHINES.map(machine => [machine.name, machine])
);
