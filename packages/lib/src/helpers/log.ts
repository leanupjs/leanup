/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as log from 'loglevel';

import { Validator } from './validator';

const LOG_CACHE: Object[] = [];

/**
 * Tiny hack
 */
function getEnvironment(): string {
  return '$$NODE_ENV$$';
}

interface LogMessage {
  className?: string;
  messageText: string;
  refObject?: unknown;
}

export class Log {
  private static _instance: Log = null;

  private constructor() {}

  private static log(level: string, message: LogMessage): void {
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
        log.trace(message);
        break;
      case 'debug':
        log.debug(message);
        break;
      case 'info':
        log.info(message);
        break;
      case 'warn':
        log.warn(message);
        break;
      case 'error':
        log.error(message);
    }
    if (getEnvironment() === 'development' && level === 'error') {
      throw new Error(`Execution in development mode was canceled. See the error log above.`);
    }
  }

  public static trace(messageText: string, refObject?: Object): Log {
    this.log('trace', { messageText, refObject });
    return this;
  }
  public static debug(messageText: string, refObject?: Object): Log {
    this.log('debug', { messageText, refObject });
    return this;
  }
  public static info(messageText: string, refObject?: Object): Log {
    this.log('info', { messageText, refObject });
    return this;
  }
  public static warn(messageText: string, refObject?: Object): Log {
    this.log('warn', { messageText, refObject });
    return this;
  }
  public static error(messageText: string, refObject?: Object): Log {
    this.log('error', { messageText, refObject });
    return this;
  }

  public static get cache(): Object[] {
    return [].concat(LOG_CACHE);
  }
}

switch (getEnvironment()) {
  case 'development':
    log.setDefaultLevel('trace');
    break;
  case 'test':
    log.setDefaultLevel('warn');
    break;
  case 'production':
    log.setDefaultLevel('error');
}
