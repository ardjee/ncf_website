declare module 'flubber' {
  export interface InterpolateOptions {
    maxSegmentLength?: number;
    string?: boolean;
  }

  export function interpolate(
    from: string,
    to: string,
    options?: InterpolateOptions
  ): (t: number) => string;

  export function toCircle(
    from: string,
    x: number,
    y: number,
    r: number,
    options?: InterpolateOptions
  ): (t: number) => string;

  export function toRect(
    from: string,
    x: number,
    y: number,
    width: number,
    height: number,
    options?: InterpolateOptions
  ): (t: number) => string;

  export function toPolygon(
    from: string,
    points: Array<[number, number]>,
    options?: InterpolateOptions
  ): (t: number) => string;

  export function combine(
    paths: string[],
    options?: InterpolateOptions
  ): (t: number) => string;

  export function separate(
    from: string,
    paths: string[],
    options?: InterpolateOptions
  ): (t: number) => string[];
}

