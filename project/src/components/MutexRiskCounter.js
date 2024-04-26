class Mutex {
    constructor() {
      this._queue = [];
      this._isLocked = false;
    }
  
    async lock() {
      if (this._isLocked) {
        const unlock = new Promise((resolve) => {
          this._queue.push(resolve);
        });
        await unlock;
      }
      this._isLocked = true;
    }
  
    unlock() {
      if (this._queue.length > 0) {
        const nextResolve = this._queue.shift();
        nextResolve();
      } else {
        this._isLocked = false;
      }
    }
  }