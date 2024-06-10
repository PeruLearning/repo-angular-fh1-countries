export interface CountryResponse {
  error: boolean;
  msg:   string;
  data:  Country[];
}

export interface Country {
  name:    string;
  capital: string;
  iso2:    string;
  iso3:    string;
}
