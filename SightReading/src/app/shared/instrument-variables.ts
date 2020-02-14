
export interface InstrumentMenu {
    type: InstrumentType;
    iconImage: string;
    staffType: StaffType;
    notesRange: Note[];
}


export enum StaffType {
    LOW,
    HIGH,
    BOTH
}


export enum InstrumentType {
    PIANO = "piano",
    VIOLIN = "violin",
    GUESSER = "guesser"
}

export interface Note {
    name: string;
    value: number;
    isFlat: boolean;
}

export class AllNotes {
    static notes: Note[] = [
        // { name: "A2", value: 21, isFlat: false },
        // { name: "A2s", value: 21.5, isFlat: true }, // Sharp A
        // { name: "B2", value: 22, isFlat: false },
        // { name: "C2", value: 23, isFlat: false },
        // { name: "C2s", value: 23.5, isFlat: true }, // Sharp C

        { name: "D2", value: 24, isFlat: false },
        { name: "Ds2", value: 24.5, isFlat: true },
        { name: "E2", value: 25, isFlat: false },
        { name: "F2", value: 26, isFlat: false },
        { name: "Fs2", value: 26.5, isFlat: true },
        { name: "G2", value: 27, isFlat: false },
        { name: "Gs2", value: 27.5, isFlat: true },
        { name: "A3", value: 31, isFlat: false },
        { name: "As3", value: 31.5, isFlat: true },
        { name: "B3", value: 32, isFlat: false },
        { name: "C3", value: 33, isFlat: false },
        { name: "Cs3", value: 33.5, isFlat: true },
        { name: "D3", value: 34, isFlat: false },
        { name: "Ds3", value: 34.5, isFlat: true },
        { name: "E3", value: 35, isFlat: false },
        { name: "F3", value: 36, isFlat: false },
        { name: "Fs3", value: 36.5, isFlat: true },
        { name: "G3", value: 37, isFlat: false },
        { name: "Gs3", value: 37.5, isFlat: true },
        { name: "A4", value: 41, isFlat: false },
        { name: "As4", value: 41.5, isFlat: true },
        { name: "B4", value: 42, isFlat: false },
        { name: "C4", value: 43, isFlat: false },
        { name: "Cs4", value: 43.5, isFlat: true },
        { name: "D4", value: 44, isFlat: false },
        { name: "Ds4", value: 44.5, isFlat: true },
        { name: "E4", value: 45, isFlat: false },
        { name: "F4", value: 46, isFlat: false },
        { name: "Fs4", value: 46.5, isFlat: true },
        { name: "G4", value: 47, isFlat: false },
        { name: "Gs4", value: 47.5, isFlat: true },
        { name: "A5", value: 51, isFlat: false },
        { name: "As5", value: 51.5, isFlat: true },
        { name: "B5", value: 52, isFlat: false },
        { name: "C5", value: 53, isFlat: false },
        { name: "Cs5", value: 53.5, isFlat: true },
        { name: "D5", value: 54, isFlat: false },
        { name: "Ds5", value: 54.5, isFlat: true },
        { name: "E5", value: 55, isFlat: false },
        { name: "F5", value: 56, isFlat: false },
        { name: "Fs5", value: 56.5, isFlat: true },
        { name: "G5", value: 57, isFlat: false },
        { name: "Gs5", value: 57.5, isFlat: true },
        { name: "A6", value: 61, isFlat: false },
        { name: "As6", value: 61.5, isFlat: true },
        { name: "B6", value: 62, isFlat: false },
        { name: "C6", value: 63, isFlat: false },
        { name: "Cs6", value: 63.5, isFlat: true },
        { name: "D6", value: 64, isFlat: false },
        { name: "Ds6", value: 64.5, isFlat: true },
        { name: "E6", value: 65, isFlat: false },
        { name: "F6", value: 66, isFlat: false },
        { name: "Fs6", value: 66.5, isFlat: true },
        { name: "G6", value: 67, isFlat: false },
        { name: "Gs6", value: 67.5, isFlat: true }
    ]

    static getNote(noteName: string) {
        for (const note in AllNotes.notes) {
            if (AllNotes.notes.hasOwnProperty(note)) {
                const element = AllNotes.notes[note];
                if (element.name == noteName) {
                    return element;
                }

            }
        }
        return null;
    }

}

/* DEPRECATED :
// Sharp notes are C# D# F# G# A#
export enum Note {
    // {PITCH}{LETTER_POSITION}
    A2=21,
    A2s=21.5, // Sharp
    B2=22,
    C2=23,
    C2s=23.5, // Sharp C
    D2=24,
    D2s=24.5,
    E2=25,
    F2=26,
    F2s=26.5,
    G2=27,
    G2s=27.5,
    A3=31,
    A3s=31.5,
    B3=32,
    C3=33,
    C3s=33.5,
    D3=34,
    D3s=34.5,
    E3=35,
    F3=36,
    F3s=36.5,
    G3=37,
    G3s=37.5,
    A4=41,
    A4s=41.5,
    B4=42,
    C4=43,
    C4s=43.5,
    D4=44,
    D4s=44.5,
    E4=45,
    F4=46,
    F4s=46.5,
    G4=47,
    G4s=47.5,
    A5=51,
    A5s=51.5,
    B5=52,
    C5=53,
    C5s=53.5,
    D5=54,
    D5s=54.5,
    E5=55,
    F5=56,
    F5s=56.5,
    G5=57,
    G5s=57.5,
    A6=61,
    A6s=61.5,
    B6=62,
    C6=63,
    C6s=63.5,
    D6=64,
    D6s=64.5,
    E6=65,
    F6=66,
    F6s=66.5,
    G6=67,
    G6s=67.5
}
*/