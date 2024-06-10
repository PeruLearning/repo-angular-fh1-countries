export interface CountryResponse<T> {
  error: boolean;
  msg:   string;
  data:  T;
}

export interface Country {
  name:    string;
  capital: string;
  iso2:    string;
  iso3:    string;
}
