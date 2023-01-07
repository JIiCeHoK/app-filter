export interface Iship {
    type: string;
    name: string;
    home_port: string;
    weight_kg?: string;
    year_built?: string;
    missions?: any[];
    id: string;
}

export interface IshipState {
    ships: Iship[] | [];
    selectedShip: Iship;
}

export interface IappState {
    ships: IshipState;
    config: IconfigState
}

export interface IconfigState {
    currentPage: number
}