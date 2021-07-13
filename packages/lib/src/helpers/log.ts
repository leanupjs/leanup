/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as loglevel from 'loglevel';

import { Validator } from './validator';

const LOG_CACHE: Object[] = [];

function getEnvironment(): string {
  return process.env.NODE_ENV;
}

interface LogMessage {
  className?: string;
  messageText: string;
  refObject?: unknown;
}

export interface LoggerOptions {
  /**
   * CSS style of the console log shield.
   */
  shieldStyle?: string;
}

export class Logger {
  private static readonly instances: Map<string, Logger> = new Map<string, Logger>();

  private readonly shield: string[];

  private constructor(identifier: string, options: LoggerOptions = {}) {
    this.shield = [
      `%c${identifier}`,
      Validator.isString(options.shieldStyle, 1)
        ? options.shieldStyle
        : `color: white; background: #666; font-weight: bold; font-size: 10px; padding: 2px 6px; border-radius: 3px; border: 1px solid #000`,
    ];
  }

  public static getInstance(identifier: string, options: LoggerOptions = {}) {
    if (Validator.isString(identifier, 1)) {
      if (Logger.instances.has(identifier) === false) {
        Logger.instances.set(identifier, new Logger(identifier));
      }
      return Logger.instances.get(identifier);
    } else {
      throw new Error(`The identifier of the Logger must be a string with a min length of 1.`);
    }
  }

  private log(level: string, message: LogMessage): void {
    if (
      Validator.isObject(message.refObject) &&
      typeof message.refObject.constructor === 'function' &&
      Validator.isString(message.refObject.constructor.name)
    ) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      message.className = `[${message.refObject.constructor.name}]:`;
    }

    LOG_CACHE.push({
      date: new Date().toUTCString(),
      level,
      message,
    });

    switch (level) {
      case 'trace':
        loglevel.trace(...this.shield, message);
        break;
      case 'debug':
        loglevel.debug(...this.shield, message);
        break;
      case 'info':
        loglevel.info(...this.shield, message);
        break;
      case 'warn':
        loglevel.warn(...this.shield, message);
        break;
      case 'error':
      default:
        loglevel.error(...this.shield, message);
        if (getEnvironment() === 'development' && level === 'error') {
          throw new Error(`↑ Execution in development mode was canceled. See the error log above.`);
        }
    }
  }

  public trace(messageText: string, refObject?: Object): Logger {
    this.log('trace', { messageText, refObject });
    return this;
  }
  public debug(messageText: string, refObject?: Object): Logger {
    this.log('debug', { messageText, refObject });
    return this;
  }
  public info(messageText: string, refObject?: Object): Logger {
    this.log('info', { messageText, refObject });
    return this;
  }
  public warn(messageText: string, refObject?: Object): Logger {
    this.log('warn', { messageText, refObject });
    return this;
  }
  public error(messageText: string, refObject?: Object): Logger {
    this.log('error', { messageText, refObject });
    return this;
  }

  public static get cache(): Object[] {
    return [].concat(LOG_CACHE);
  }
}

switch (getEnvironment()) {
  case 'development':
    loglevel.setDefaultLevel('trace');
    break;
  case 'test':
    loglevel.setDefaultLevel('warn');
    break;
  case 'production':
  default:
    loglevel.setDefaultLevel('error');
}

export const Log: Logger = Logger.getInstance('leanup');
