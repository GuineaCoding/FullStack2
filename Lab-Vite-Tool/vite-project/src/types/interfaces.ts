export interface ModuleProps { name: string, noLectures: number, noPracticals: number }
export interface ProgrammeProps { title: string, modules: ModuleProps[] }