
export interface InstrumentMenu {
    type: InstrumentType;
    iconImage: string;
    staffType:StaffType;
    notesRange: Note[];
}


export enum StaffType {
    LOW,
    HIGH,
    BOTH
}


export enum InstrumentType {
    PIANO="piano",
    VIOLIN="violin",
    GUESSER="guesser"
}


export enum Note {
    // {PITCH}{LETTER_POSITION}
    A2=21,
    B2=22,
    C2=23,
    D2=24,
    E2=25,
    F2=26,
    G2=27,
    A3=31,
    B3=32,
    C3=33,
    D3=34,
    E3=35,
    F3=36,
    G3=37,
    A4=41,
    B4=42,
    C4=43,
    D4=44,
    E4=45,
    F4=46,
    G4=47,
    A5=51,
    B5=52,
    C5=53,
    D5=54,
    E5=55,
    F5=56,
    G5=57,
    A6=61,
    B6=62,
    C6=63,
    D6=64,
    E6=65,
    F6=66,
    G6=67,
}