// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
declare type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  poster: string,
  trailer: string
};
