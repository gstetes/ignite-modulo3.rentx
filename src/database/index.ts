import { createConnection, getConnectionOptions } from 'typeorm';

createConnection();

interface IOptions {
  host: string
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'localhost';
  createConnection({
    ...options
  });
});