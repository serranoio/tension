export interface Dance {
    name: string,
    description: string,
}

export const Bachata = "Bachata";
export const Salsa = "Salsa";
export const Merengue = "Merengue";
export const Cumbia = "Cumbia";

export const CurrentDance = "current-dance";

export enum Direction {
    L = "L",
    R = "R",
    B = "B"
}

export interface Move {
    name: string,  // cuddle, reverse cuddle
    EntranceType: string,
    ExitType: string,
    Direction: Direction, 
}

export interface DanceMove {
    name: string,
    moves: Move[],
}


export const dancesMoves: DanceMove[] = [
    {
        name: Bachata,
        moves: [{
            name: "Cuddle",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B, 
        },
        {
            name: "Reverse Cuddle",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B, 
        },
        {
            name: "Basic L",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B, 
        },
        {
            name: "Frame",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B, 
        },
        {
            name: "Butterfly",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        },
        {
            name: "Waist Turn",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        },
        {
            name: "Hand On Back Turn",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        },
        {
            name: "L Inside Turn",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        },
        {
            name: "L Outside Spin",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        },
        {
            name: "Random",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        },
        {
            name: "Random other",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        },
        {
            name: "Wind Turn",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        },
        {
            name: "R Hand Grab",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        
        },
        {
            name: "R Inside Spin",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        
        },
        {
            name: "R Man Inside Turn",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        }, 
        {
            name: "One Step Frame",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        }, 
        {
            name: "R Release",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        }, 
        {
            name: "Two Spin",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        }, 
        {
            name: "Sexy Dip",
            EntranceType: "",
            ExitType: "",
            Direction: Direction.B,
        }
        ],

    }

]