import * as Sentry from '@sentry/browser';

const logMessage = level => (message, category = 'General') =>
  Sentry.addBreadcrumb({ message, category, level: Sentry.Severity.Info });

const Logger = {
  info: logMessage(Sentry.Severity.Info),
  warn: logMessage(Sentry.Severity.Warning),
  error: logMessage(Sentry.Severity.Error),
};

export default Logger;
