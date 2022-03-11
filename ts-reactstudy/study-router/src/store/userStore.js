import { action, computed, makeAutoObservable, observable } from 'mobx';
import { createContext, useContext } from 'react';

export class userStore {
  _num = 0;
  constructor() {
    makeAutoObservable(this, {
      _num: observable,
      increase: action,
      num: computed,
    });
  }

  get num() {
    return this._num;
  }

  increase = () => {
    this._num = this._num + 1;
  };
}

const store = new userStore();
const StoreContext = createContext();
export const UserStoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export function useUserStore() {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('[DEV] useCarStore must be used in CarStoreProvider');
  }
  return store;
}
