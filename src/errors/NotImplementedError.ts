class NotImplementedError extends Error {
  constructor(message = 'Not implemented') {
    super(message);

    this.name = 'NotImplementedError';
  }
}

export default NotImplementedError;