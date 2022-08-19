export type Character = {
  url: string;
  name: string;
  gender: Gender;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
};

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export enum GenderFilter {
  Female = "Female",
  Male = "Male",
  Any = "Female,Male",
}
