import * as React from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    layout?: any;
  }
  interface ImgHTMLAttributes<T> extends React.HTMLAttributes<T> {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
  }
}
