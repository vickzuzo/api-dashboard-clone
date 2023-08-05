interface Iprops {
  width?: number;
  src?: string;
  quality?: number;
}

export const imageLoader = ({ src, width = 100, quality = 75 }: Iprops) => {
  return `https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/${src}?w=${width}&q=${
    quality || 75
  }`;
};
