export enum APP_ROUTES {
  CHARACTERS = "/characters",
  HOUSE = "/houses/:id",
}

export const APP_LINKS = {
  CHARACTERS: "/characters",
  HOUSE: (id: number | string) => `/houses/${id}`,
};
