export interface Config {
  readonly name: string;
  port?: number;
}

type Handler<T> = (input: T) => Promise<void>;

export enum Mode {
  Fast = "fast",
  Slow = "slow",
}

/** test jsdoc comment
 * @param port - the port number
 * @returns a new Service instance
 */
export default class Service implements Config {
  // test inline comment
  readonly name: string;
  #secret = new Map<string, number>();
  constructor(public port = 8080) {
    this.name = `svc:${port}`;
  }
  async run<T extends object>(h: Handler<T>, v: T): Promise<void> {
    try {
      await h(v);
    } catch (e) {
      console.error(e as Error);
    }
    const re = /^ab+c$/gi;
    return void re.test(this.name);
  }
}

// Line comment: verify gutter alignment
/* Block comment
   spanning lines */
/**
 * JSDoc comment for {@link loadConfig}
 * @param path absolute file path
 * @deprecated use loadConfigV2
 */
